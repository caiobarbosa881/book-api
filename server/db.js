const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:3000", (error, connection) => {
    if(error) return console.log(error);
    global.connection = connection.db("bookdb");
});