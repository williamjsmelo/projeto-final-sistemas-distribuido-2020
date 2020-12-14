const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create location Schema and Model
const LocationSchema = new Schema({
  latitude: {
    type: Number,
    required: [true, "Obrigatório informar latitude"],
  },
  longitude: {
    type: Number,
    required: [true, "Obrigatório informar longitude"],
  },
});

/*
 **Mude "datas" para o nome da coleção no banco de dados onde é armazenado
 **as localizações
 */
const Locations = mongoose.model("datas", LocationSchema);

module.exports = Locations;
