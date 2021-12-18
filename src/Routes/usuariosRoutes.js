const { Router } = require("express");
const router = Router();

const {
  getUsuarios,
  createUsuarios,
  deleteUsuario,
  updateUsuario,
  getUsuarioID,
} = require("../Controllers/usuariosController");

router.route("/")
  .get(getUsuarios)
  .post(createUsuarios);

router.route("/:id")
  .get(getUsuarioID)
  .put(updateUsuario)
  .delete(deleteUsuario);

module.exports = router;
