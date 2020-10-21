const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  nombre: {
    type: String,
    unique: true,
    required: [true, "Tiene que tener un nombre"],
    trim: true, // borra espacios antes o después del string (recomendado que todos los strings lo tengan)
  },
  quiereAdoptar: {
    type: Boolean,
    default: false,
  },
  tieneOtrosGatos: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

const User = mongoose.model("Users", usersSchema, "users");

module.exports = User;
