const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const http = require("http");
const https = require("https");
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

// const CERT_DIR = process.env.CERT_DIR || path.resolve(__dirname, "pubkey");

const options = {
  // key: fs.readFileSync(path.join(CERT_DIR, "key.pem")),
  // cert: fs.readFileSync(path.join(CERT_DIR, "cert.pem")),
};

const server = https.createServer(options, app);

server.on("clientError", (err, socket) => {
  console.log("ErrorCode: ", err.code);
  console.log("BytesParsed: ", err.bytesParsed);
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

const listener = server.listen(PORT, () => {
  console.log(`🌐 Server is running!`);
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


app.use((req, res) => {
  res.sendStatus(404);
});
