const proyectosCtrl = {};
const Proyectos = require("../Models/proyectosModel");

proyectosCtrl.getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyectos.find();
    res.json(proyectos);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

proyectosCtrl.createProyectos = async (req, res) => {
  try {
    const { idproyecto, nombreProyecto, objetivosGenerales, objetivosEspecificos, presupuesto, fechaInicio,fechaTerminacion,identificacionLider,nombreLider,faseProyecto } =
      req.body;
    const nuevoProyecto = new Proyectos({
      idproyecto: idproyecto,
      nombreProyecto: nombreProyecto,
      objetivosGenerales: objetivosGenerales,
      objetivosEspecificos: objetivosEspecificos,
      presupuesto: presupuesto,
      fechaInicio: fechaInicio,
      fechaTerminacion:fechaTerminacion,
      identificacionLider:identificacionLider,
      nombreLider:nombreLider,
      faseProyecto:faseProyecto,
    });
    await nuevoProyecto.save();
    console.log(nuevoProyecto);
    res.json({ message: "Proyecto Almacenado Exitosamente" });
  } catch (e) {
    console.log(e);
    res.json(e.errmsg);
  }
};

proyectosCtrl.getProyectoID = async (req, res) => {
  try {
    const proyecto = await Proyectos.findById(req.params.id);
    res.json(proyecto);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

proyectosCtrl.updateProyecto = async (req, res) => {
  const { idproyecto, nombreProyecto, objetivosGenerales, objetivosEspecificos, presupuesto, fechaInicio,fechaTerminacion,identificacionLider,nombreLider,faseProyecto  } = req.body;
  await Proyectos.findByIdAndUpdate(req.params.id, {
    idproyecto: idproyecto,
      nombreProyecto: nombreProyecto,
      objetivosGenerales: objetivosGenerales,
      objetivosEspecificos: objetivosEspecificos,
      presupuesto: presupuesto,
      fechaInicio: fechaInicio,
      fechaTerminacion:fechaTerminacion,
      identificacionLider:identificacionLider,
      nombreLider:nombreLider,
      faseProyecto:faseProyecto,
  });
  res.json({ message: " Proyecto Actualizado Exitosamente" });
};

proyectosCtrl.deleteProyecto = async (req, res) => {
  const { id } = req.params;
  await Proyectos.findByIdAndDelete(id);
  res.json("Proyecto Eliminado");
};

module.exports = proyectosCtrl;
