const express = require("express");
const app = express();
const cors = require("cors");

const requireDir = require("require-dir");

const mongoose = require("mongoose");

//Conexão com MongoDB
//Mude o endereço do database se for diferente
//const DatabaseURL = "mongodb://localhost:27017/locations";
const DatabaseURL = "mongodb://db:27017/locations";

//Essa função fica tentando se conecta com o banco
//se ela não consegue, ela tenta de novo em 5 segundos
var connectWithRetry = function(){
  mongoose.connect(DatabaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  //Test the connection to the database
  let db = mongoose.connection;
  db.on("error", function (error) {
    console.log(error);
    setTimeout(connectWithRetry, 5000);
  });
  db.once("open", function (callback) {
    console.log("Connection Successful!");
  });
}
connectWithRetry();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
requireDir("./src/models");

/*
 **Todos os endereços do backend vão começar com /api
 **Por exemplo, http:localhost:porta/api/****
 */
app.use("/api", require("./src/routes"));

//A porta usado aqui é 3001 pois não criei o .env arquivo
const PORT = process.env.port || 3001;
app.listen(PORT, function () {
  console.log("Now listening for request port: " + PORT);
});
