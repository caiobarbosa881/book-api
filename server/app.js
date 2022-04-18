const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())

const db = "ola"

app.get("/", function(req, res) {
  res.send(db);
});

let port = process.env.PORT;

if(port == null || port == "") {
 port = 5000;
}

app.listen(port, function() {
 console.log("O servidor iniciou com sucesso");
});