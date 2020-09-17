const express = require("express");
const router = express.Router();
const {
  getShelters,
  getShelter,
  putShelter,
  postShelter,
  deleteShelter,
} = require("../controllers/shelterController");

router.get("/", getShelters);
router.get("/:id", getShelter);
router.post("/", postShelter);
router.delete("/:id", deleteShelter);
router.put("/:id", putShelter);

module.exports = router;
