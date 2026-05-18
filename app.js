const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const http = require("http");
const https = require("https");
const net = require("net");
const tls = require("tls");
const os = require("os");

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
  methods: process.env.CORS_METHODS || "GET,POST,OPTIONS",
  allowedHeaders:
    process.env.CORS_ALLOWED_HEADERS || "Content-Type,Authorization",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(bodyParser.json({ extended: true, limit: "5mb" }));

const PORT = Number(process.env.PORT || 3810);
const HTTP_PORT = Number(process.env.HTTP_PORT || 3800);

// Get local IP address
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

const localIP = getLocalIPAddress();

const CERT_DIR = process.env.CERT_DIR || path.resolve(__dirname, "pubkey");
const STATIC_PROXY_URL = process.env.STATIC_PROXY_URL || "";

const options = {
  key: fs.readFileSync(path.join(CERT_DIR, "key.pem")),
  cert: fs.readFileSync(path.join(CERT_DIR, "cert.pem")),
};

const server = https.createServer(options, app);

server.on("clientError", (err, socket) => {
  console.log("ErrorCode: ", err.code);
  console.log("BytesParsed: ", err.bytesParsed);
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

const listener = server.listen(PORT, () => {
  console.log(`🌐 HTTPS Server is running!`);
  console.log(`📍 Local IP Address: ${localIP}`);
  console.log(`🔒 HTTPS running at https://${localIP}:${PORT}/`);
  console.log(`🔒 HTTPS running at https://${listener.address().address}:${listener.address().port}/...`);
});

const httpServer = http.createServer(app);
const httpListener = httpServer.listen(HTTP_PORT, () => {
  console.log(`🌐 HTTP Server is running!`);
  console.log(`📍 Local IP Address: ${localIP}`);
  console.log(`HTTP running at http://${localIP}:${HTTP_PORT}/`);
  console.log(`HTTP running at http://${httpListener.address().address}:${httpListener.address().port}/...`);
});

const programList = {};
const responseList = {};
let idnum = 1;

const apiPaths = new Set([
  "/getid",
  "/dataset",
  "/startaccept",
  "/smartview/dataget",
  "/smartview/finishaccept",
]);

const staticProxyTarget = STATIC_PROXY_URL ? new URL(STATIC_PROXY_URL) : null;

if (staticProxyTarget) {
  console.log(`📦 Static requests are proxied to: ${staticProxyTarget.href}`);
}

function isApiRequest(req) {
  return apiPaths.has(req.path);
}

function proxyStaticRequest(req, res, targetBaseUrl) {
  const upstreamUrl = new URL(req.originalUrl, targetBaseUrl);
  const httpClient = upstreamUrl.protocol === "https:" ? https : http;

  const proxyReq = httpClient.request(
    {
      protocol: upstreamUrl.protocol,
      hostname: upstreamUrl.hostname,
      port: upstreamUrl.port,
      method: req.method,
      path: `${upstreamUrl.pathname}${upstreamUrl.search}`,
      headers: {
        ...req.headers,
        host: upstreamUrl.host,
      },
    },
    (proxyRes) => {
      res.status(proxyRes.statusCode || 502);
      Object.entries(proxyRes.headers).forEach(([name, value]) => {
        if (value !== undefined) {
          res.setHeader(name, value);
        }
      });
      proxyRes.pipe(res);
    }
  );

  proxyReq.on("error", (err) => {
    console.error("Static reverse proxy error:", err.message);
    if (!res.headersSent) {
      res.status(502).json({ error: "Bad Gateway", detail: err.message });
    }
  });

  req.pipe(proxyReq);
}

function proxyWebSocket(req, socket, head, targetBaseUrl) {
  const upstreamUrl = new URL(req.url, targetBaseUrl);
  const isSecure = upstreamUrl.protocol === "https:" || upstreamUrl.protocol === "wss:";
  const port = Number(upstreamUrl.port) || (isSecure ? 443 : 80);

  const upstream = isSecure
    ? tls.connect({ host: upstreamUrl.hostname, port, rejectUnauthorized: false })
    : net.createConnection({ host: upstreamUrl.hostname, port });

  const onConnect = () => {
    const headerLines = [`${req.method} ${upstreamUrl.pathname}${upstreamUrl.search || ""} HTTP/1.1`];
    for (const [key, val] of Object.entries(req.headers)) {
      headerLines.push(key.toLowerCase() === "host" ? `host: ${upstreamUrl.host}` : `${key}: ${val}`);
    }
    headerLines.push("", "");
    upstream.write(headerLines.join("\r\n"));
    if (head && head.length) upstream.write(head);
    upstream.pipe(socket);
    socket.pipe(upstream);
  };

  upstream.on(isSecure ? "secureConnect" : "connect", onConnect);
  upstream.on("error", (err) => {
    console.error("WebSocket proxy error:", err.message);
    socket.destroy();
  });
  socket.on("error", () => upstream.destroy());
}

function attachWebSocketProxy(srv) {
  srv.on("upgrade", (req, socket, head) => {
    if (staticProxyTarget && !isApiRequest(req)) {
      proxyWebSocket(req, socket, head, staticProxyTarget);
    } else {
      socket.destroy();
    }
  });
}

app.get("/getid", (req, res, next) => {
  let myid = 0;
  myid = idnum++;
  console.log(myid);
  res.json({ id: myid });
});

app.get("/dataset", (req, res, next) => {
  const id = req.query.id;
  const program = req.query.program;
  console.log(id, program);
  programList[id] = program;
  res.json({ ok: true });
});

app.get("/smartview/dataget", (req, res, next) => {
  const id = req.query.id;
  console.log(id);
  res.json({ prog: programList[id] });
});

app.get("/startaccept", (req, res, next) => {
  const id = req.query.id;
  console.log("startaccept!");
  responseList[id] = res;
});

app.post("/smartview/finishaccept", (req, res, next) => {
  const id = req.body.id;
  console.log("finishaccept!");
  console.log(id);
  if (responseList[id]) {
    responseList[id].json(req.body);
  }
  res.json({ ok: true });
});

app.use((req, res, next) => {
  if (!staticProxyTarget) {
    next();
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    next();
    return;
  }
  if (isApiRequest(req)) {
    next();
    return;
  }

  proxyStaticRequest(req, res, staticProxyTarget);
});

app.use((req, res) => {
  res.sendStatus(404);
});

attachWebSocketProxy(server);
attachWebSocketProxy(httpServer);
