const express = require("express");
const db = require("./db")
var cors = require('cors')
const app = express();
app.use(cors())

app.get("/", function(req, res) {
  return res.json(db);
});

let port = process.env.PORT;

if(port == null || port == "") {
 port = 5000;
}

app.listen(port, function() {
 console.log("O servidor iniciou com sucesso");
});