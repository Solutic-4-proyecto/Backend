const inscripcionesCtrl = {};
const Inscripciones = require("../Models/inscripcionesModel");

inscripcionesCtrl.getInscripciones = async (req, res) => {
  try {
    const inscripciones = await Inscripciones.find();
    res.json(inscripciones);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

inscripcionesCtrl.createInscripciones = async (req, res) => {
  try {
    const { idproyecto, identificacionEstudiante, estado, fechaIngreso, fechaEgreso } =
      req.body;
    const nuevaInscripcion = new Inscripciones({
      idproyecto: idproyecto,
      identificacionEstudiante: identificacionEstudiante,
      estado: estado,
      fechaIngreso: fechaIngreso,
      fechaEgreso: fechaEgreso,
    });
    await nuevaInscripcion.save();
    console.log(nuevaInscripcion);
    res.json({ message: "Inscripción Almacenada Exitosamente" });
  } catch (e) {
    console.log(e);
    res.json(e.errmsg);
  }
};

inscripcionesCtrl.getInscripcionID = async (req, res) => {
  try {
    const inscripcion = await Inscripciones.findById(req.params.id);
    res.json(inscripcion);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

inscripcionesCtrl.updateInscripcion = async (req, res) => {
  const { idproyecto, identificacionEstudiante, estado, fechaIngreso, fechaEgreso } = req.body;
  await Inscripciones.findByIdAndUpdate(req.params.id, {
    idproyecto: idproyecto,
    identificacionEstudiante: identificacionEstudiante,
    estado: estado,
    fechaIngreso: fechaIngreso,
    fechaEgreso: fechaEgreso,
  });
  res.json({ message: " Inscripción Actualizada Exitosamente" });
};

inscripcionesCtrl.deleteInscripcion = async (req, res) => {
  const { id } = req.params;
  await Inscripciones.findByIdAndDelete(id);
  res.json("Usuario Eliminado");
};

module.exports = inscripcionesCtrl;
