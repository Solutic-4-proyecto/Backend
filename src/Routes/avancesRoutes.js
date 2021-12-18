const { Router } = require("express");
const router = Router();

const {
  getAvances,
  createAvances,
  deleteAvance,
  updateAvance,
  getAvanceID,
} = require("../Controllers/avancesController");

router.route("/")
  .get(getAvances)
  .post(createAvances);

router.route("/:id")
  .get(getAvanceID)
  .put(updateAvance)
  .delete(deleteAvance);

module.exports = router;
