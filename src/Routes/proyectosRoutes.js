const { Router } = require("express");
const router = Router();

const {
  getProyectos,
  createProyectos,
  deleteProyecto,
  updateProyecto,
  getProyectoID,
} = require("../Controllers/proyectosController");

router.route("/")
  .get(getProyectos)
  .post(createProyectos);

router.route("/:id")
  .get(getProyectoID)
  .put(updateProyecto)
  .delete(deleteProyecto);

module.exports = router;