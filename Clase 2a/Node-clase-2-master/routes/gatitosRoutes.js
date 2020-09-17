const express = require("express");
const router = express.Router();
const {
  getGatitos,
  getGatito,
  postGatito,
  putGatito,
  deleteGatito,
} = require("../controllers/gatitosController");

router.get("/", getGatitos);
router.get("/:id", getGatito);
router.post("/", postGatito);
router.delete("/:id", deleteGatito);
router.put("/:id", putGatito);

module.exports = router;
