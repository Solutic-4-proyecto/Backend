const { Router } = require("express");
const router = Router();

const {
  getInscripciones,
  createInscripciones,
  deleteInscripcion,
  updateInscripcion,
  getInscripcionID,
} = require("../Controllers/inscripcionesController");

router.route("/")
  .get(getInscripciones)
  .post(createInscripciones);

router.route("/:id")
  .get(getInscripcionID)
  .put(updateInscripcion)
  .delete(deleteInscripcion);

module.exports = router;