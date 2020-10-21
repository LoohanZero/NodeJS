const mongoose = require("mongoose");

const gatitosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Tiene que tener un nombre"],
    trim: true,
  },
  edad: Number,
  disponible: {
    type: Boolean,
    default: false,
  },
});

const Gatito = mongoose.model("Gatito", gatitosSchema, "gatitos");

module.exports = Gatito;

// const gatito = new Gatito({
//   nombre: "gatito desde express",
//   edad: 69,
//   disponible: true,
// });

// gatito
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log(err));
