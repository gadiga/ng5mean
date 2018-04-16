/**
 * Created by eguradi on 4/9/2018.
 */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const app = express();
const api = require("./server/routes/api");

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// Setup REST API routes
app.use('/api', api);

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "dist/index.html")));

const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

// mongodb server:mongodb://<dbuser>:<dbpassword>@ds139919.mlab.com:39919/codepostnet
