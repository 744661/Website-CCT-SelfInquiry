// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/ChristmasPage.html", function(request, response) {
  response.sendFile(__dirname + "/views/ChristmasPage.html");
});

app.get("/PresentedProjects.html", function(request, response) {
  response.sendFile(__dirname + "/views/PresentedProjects.html");
});

app.get("/Biography.html", function(request, response) {
  response.sendFile(__dirname + "/views/Biography.html");
});