const mongoose = require("mongoose");

const sheltersSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Tiene que tener un nombre"],
    trim: true,
  },
  plazas: Number,
  disponible: {
    type: Boolean,
    default: false,
  },
});

const Shelter = mongoose.model("Shelters", sheltersSchema, "shelters");

module.exports = Shelter;
