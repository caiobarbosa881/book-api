const express = require("express");
const quotes = "Ola tudo bem?";
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get("/", function(req, res) {
  res.send(quotes);
});

let port = process.env.PORT;

if(port == null || port == "") {
 port = 5000;
}

app.listen(port, function() {
 console.log("Server started successfully");
});