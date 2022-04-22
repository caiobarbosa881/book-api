const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())

const db = [
  { name: "Harry Potter"},
  { name: "O Senhor dos Anéis"},
  { name: "Star Wars"},
  { name: ""}
];

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