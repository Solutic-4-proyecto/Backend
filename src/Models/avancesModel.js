const { Schema, model } = require("mongoose");

const avancesSchema = new Schema({
  idProyecto: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  fechaAvance: String,
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: String,
});

module.exports= model("Avances", avancesSchema);