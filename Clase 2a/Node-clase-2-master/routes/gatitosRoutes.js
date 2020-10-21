const express = require("express");
const router = express.Router();
const fs = require("fs");
const {
  getGatitos,
  getGatito,
  postGatito,
  putGatito,
  deleteGatito,
} = require("../controllers/gatitosController");

// router.param("id", (req, res, next, val) => {
  
//   fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
//     if (err) {
//       return res.status(500).json({
//         status: "error",
//         message: "Ocurrió un error",
//       });
//     }
//     const gatos = JSON.parse(data);
//     const id = val;
//     console.log(gatos)
//     const gatosFiltrados = gatos.filter((gato) => gato.id === id);
//     console.log(gatosFiltrados)
//     if (!gatosFiltrados.length) {
//       res.status(404).json({
//         status: "fail",
//         message: "Gato no encontrado",
//       });
//     }
//   });
//   next();
// });

router.get("/", getGatitos);
router.get("/:id", getGatito);
router.post("/", postGatito);
router.delete("/:id", deleteGatito);
router.put("/:id", putGatito);

module.exports = router;
