const mongoose = require("mongoose");

//Mude "datas" para o nome da coleção no banco de dados
const Locations = mongoose.model("datas");

module.exports = {
  async index(req, res) {
    const dadoLocations = await Locations.find();
    return res.json(dadoLocations);
  },
  async show(req, res) {
    const dadoLocation = await Locations.findById(req.params.id);
    return res.json(dadoLocation);
  },
  async store(req, res) {
    const dadoLocation = await Locations.create(req.body);
    return res.json(dadoLocation);
  },
  async destroy(req, res) {
    await Locations.findByIdAndDelete(req.params.id);
    return res.json("Excluído");
  },
};
