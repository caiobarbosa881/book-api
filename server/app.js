const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())

const db = [
  { name: "Harry Potter", author: "J. K. Rowling", data: "26 de junho de 1997"},
  { name: "O Senhor dos Anéis", author: "J. R. R. Tolkien", data:"29 de julho de 1954"},
  { name: "Duna", author: "Frank Herbert", data:"agosto de 1965"}, 
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