const usuariosCtrl = {};
const Usuarios = require("../Models/usuariosModel");

usuariosCtrl.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.find();
    res.json(usuarios);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

usuariosCtrl.createUsuarios = async (req, res) => {
  try {
    const { identificacion, nombreCompleto, correo, contraseña, rol, estado } =
      req.body;
    const nuevoUsuario = new Usuarios({
      identificacion: identificacion,
      nombreCompleto: nombreCompleto,
      correo: correo,
      contrasena: contrasena,
      rol: rol,
      estado: estado,
    });
    await nuevoUsuario.save();
    console.log(nuevoUsuario);
    res.json({ message: "Usuario Almacenado Exitosamente" });
  } catch (e) {
    console.log(e);
    res.json(e.errmsg);
  }
};

usuariosCtrl.getUsuarioID = async (req, res) => {
  try {
    const usuario = await Usuarios.findById(req.params.id);
    res.json(usuario);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

usuariosCtrl.updateUsuario = async (req, res) => {
  const { identificacion, nombreCompleto, correo, contrasena, rol, estado } = req.body;
  await Usuarios.findByIdAndUpdate(req.params.id, {
    identificacion: identificacion,
    nombreCompleto: nombreCompleto,
    correo: correo,
    contrasena: contrasena,
    rol: rol,
    estado: estado,
  });
  res.json({ message: " Usuario Actualizado Exitosamente" });
};

usuariosCtrl.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  await Usuarios.findByIdAndDelete(id);
  res.json("Usuario Eliminado");
};

module.exports = usuariosCtrl;
