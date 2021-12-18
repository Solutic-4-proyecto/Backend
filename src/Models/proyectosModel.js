const { Schema, model } = require("mongoose");

const proyectosSchema = new Schema({
  idproyecto: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  nombreProyecto: {
    type: String,
    required: true,
    trim: true,
  },
  objetivosGenerales: {
    type: String,
    required: true,
    trim: true,
  },
  objetivosEspecificos: {
    type: String,
    required: true,
    trim: true,
  },
  presupuesto: Number,
  fechaInicio: String,
  fechaTerminacion: String,
  identificacionLider: {
    type: String,
    required: true,
    trim: true,
  },
  nombreLider: String,
  estado: {
    type: String,
    required: true,
  },
  faseProyecto: String,
});
module.exports = model("Proyecto", proyectosSchema);
