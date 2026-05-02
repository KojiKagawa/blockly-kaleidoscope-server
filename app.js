const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(bodyParser.json({ extended: true, limit: "5mb" }));

const PORT = Number(process.env.PORT || 3010);
const PUBLIC_ROOT = process.env.PUBLIC_ROOT || path.resolve(__dirname, "public");
const CERT_DIR = process.env.CERT_DIR || path.resolve(__dirname, "pubkey");

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

var listener = server.listen(PORT, () => {
  console.log("Running at Port " + listener.address().port + "...");
  console.log("Serving static files from " + PUBLIC_ROOT);
});

var programList = {};
var responseList = {};
var idnum = 1;

app.get("/getid", (req, res, next) => {
  let myid = 0;
  myid = idnum++;
  console.log(myid);
  res.json({ id: myid });
});

app.get("/dataset", (req, res, next) => {
  let id = req.query.id;
  let program = req.query.program;
  console.log(id, program);
  programList[id] = program;
  res.json({ ok: true });
});

app.get("/smartview/dataget", (req, res, next) => {
  let id = req.query.id;
  console.log(id);
  res.json({ prog: programList[id] });
});

app.get("/startaccept", (req, res, next) => {
  let id = req.query.id;
  console.log("startaccept!");
  responseList[id] = res;
});

app.post("/smartview/finishaccept", (req, res, next) => {
  let id = req.body.id;
  console.log("finishaccept!");
  console.log(id);
  if (responseList[id]) {
    responseList[id].json(req.body);
  }
  res.json({ ok: true });
});

app.use(express.static(PUBLIC_ROOT));

app.use((req, res) => {
  res.sendStatus(404);
});
