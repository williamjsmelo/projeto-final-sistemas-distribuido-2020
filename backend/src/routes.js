const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("URL Base da API");
});
/*
 **As rotas para acessar o backend
 **http:localhost:porta/api/locations -> mostrar todas as localizações
 **.../api/locations/(id) vai mostrar os dados de uma única localização
 */
const LocationController = require("./controllers/LocationController");
routes.get("/locations", LocationController.index);
routes.get("/locations/:id", LocationController.show);
//store é para poder armazenar dados mas não é usado neste projeto
routes.post("/locations", LocationController.store);
routes.delete("/locations/:id", LocationController.destroy);

module.exports = routes;
