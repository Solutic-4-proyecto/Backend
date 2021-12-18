const avancesCtrl = {};
const Avances = require("../Models/avancesModel");

avancesCtrl.getAvances = async (req, res) => {
  try {
    const avances = await Avances.find();
    res.json(avances);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

avancesCtrl.createAvances = async (req, res) => {
  try {
    const { idProyecto, fechaAvance, descripcion, observaciones } =
      req.body;
    const nuevoAvance = new Avances({
      idProyecto: idProyecto,
      fechaAvance: fechaAvance,
      descripcion: descripcion,
      observaciones: observaciones,
    });
    await nuevoAvance.save();
    console.log(nuevoAvance);
    res.json({ message: "Avance Almacenado Exitosamente" });
  } catch (e) {
    console.log(e);
    res.json(e.errmsg);
  }
};

avancesCtrl.getAvanceID = async (req, res) => {
  try {
    const avance = await Avances.findById(req.params.id);
    res.json(avance);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

avancesCtrl.updateAvance = async (req, res) => {
  const { idProyecto, fechaAvance, descripcion, observaciones } = req.body;
  await Avances.findByIdAndUpdate(req.params.id, {
    idProyecto: idProyecto,
    fechaAvance: fechaAvance,
    descripcion: descripcion,
    observaciones: observaciones,
  });
  res.json({ message: " Avance Actualizado Exitosamente" });
};

avancesCtrl.deleteAvance = async (req, res) => {
  const { id } = req.params;
  await Avances.findByIdAndDelete(id);
  res.json("Avance Eliminado");
};

module.exports = avancesCtrl;
