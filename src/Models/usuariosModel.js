const { Schema, model } = require("mongoose");

const usuariosSchema = new Schema({
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombreCompleto: {
    type: String,
    required: true,
    trim: true,
  },
  correo: {
    type: String,
    required: true,
    trim: true,
  },
  contrasena: {
    type: String,
    required: true,
    trim: true,
  },
  rol: String,
  estado: String,
});

module.exports = model("Usuario", usuariosSchema);
