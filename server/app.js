const express = require("express");
const quotes = "Ola tudo bem?";
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://admin123:@cluster0.lu6ey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Conectando com Sucesso");
});

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
 console.log("O servidor iniciou com sucesso");
});