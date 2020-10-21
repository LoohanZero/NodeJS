const { query } = require("express");
const fs = require("fs");
const Gatito = require("../models/gatitos");

const getGatitos = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const camposExcluidos = ["page"];

    camposExcluidos.forEach((el) => delete queryObj[el]);
    // console.log(queryObj);

    // PAGINADO
    let query = await Gatito.find(queryObj);

    const page = Number(req.query.page) || 1;
    const limit = req.query.limit * 1 || 2;
    const skip = (page - 1) * limit;

    query = query.limit(limit).skip(skip);
    // const gatitos = await Gatito.find(queryObj);

    const gatitos = await query;

    res.json({
      status: "Success",
      data: gatitos,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: err.message,
    });
  }
  // fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
  //   const dataJSON = JSON.parse(data);

  //   res.json({
  //     status: "Success",
  //     data: dataJSON,
  //   });
  // });
};

const getGatito = async (req, res) => {
  // obtener los parámetros que indicó el usuario
  console.log(req.params);

  try {
    const gatito = await Gatito.findById(req.params.id);

    res.status(201).json({
      status: "Success",
      data: gatito,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: "Gatito no encontrado",
    });
  }

  // Recibir una petición
  // fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
  //   if (err) {
  //     return res.status(500).json({
  //       status: "error",
  //       message: "Ocurrió un error",
  //     });
  //   }
  //   const gatos = JSON.parse(data);
  //   const id = Number(req.params.id);
  //   const gatosFiltrados = gatos.filter((gato) => gato.id === id);

  //   if (!gatosFiltrados.length) {
  //     res.status(404).json({
  //       status: "fail",
  //       message: "Gato no encontrado",
  //     });
  //   }
  //   res.json({
  //     status: "Success",
  //     data: gatosFiltrados,
  //   });
  // });
};

const postGatito = async (req, res) => {
  try {
    // const gatito = await Gatito(req.body);
    // await gatito.save();

    const gatito = await Gatito.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        gatito,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err: err,
    });
  }
};

// const postGatito = (req, res) => {
//   const gatito = new Gatito({
//     nombre: "una de la segunda",
//     edad: 19,
//   });
//   gatito
//     .save()
//     .then((doc) => {
//       return res.status(200).json({
//         status: "success",
//         data: doc,
//       });
//     })
//     .catch((err) =>
//       res.status(500).json({
//         status: "fail",
//         err: err,
//       })
//     );

// // Primero determino toda la info a agregar
// fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
//   //   Obtengo lo que ya existe
//   const dataJSON = JSON.parse(data);
//   // Asigno a una variable lo que envía el post
//   const nuevoGato = req.body;
//   //   Le asigno un ID de acuerdo al lenght de lo que ya tengo
//   nuevoGato.id = dataJSON.length;
//   //   Le sumo mi nuevoGato a lo que ya tengo
//   dataJSON.push(nuevoGato);

//   // Ahora agrego la data
//   fs.writeFile(
//     `${__dirname}/../assets/cats.json`,
//     JSON.stringify(dataJSON),
//     (err) => {
//       // Éxito al grabar? 201
//       res.status(201).json({
//         status: "success",
//         data: {
//           nuevoGato,
//           createdAt: new Date(),
//         },
//       });
//     }
//   );
// });
// };

const putGatito = async (req, res) => {
  try {
    await Gatito.replaceOne({ _id: req.params.id }, req.body);

    res.status(200).json({
      status: "success",
      data: req.body,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }

  // fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
  //   const dataJSON = JSON.parse(data);
  //   const nuevoGato = req.body;
  //   const id = Number(req.params.id);

  //   if (dataJSON.map((gatito) => gatito.id).includes(id)) {
  //     fs.writeFile(
  //       `${__dirname}/assets/cats.json`,
  //       JSON.stringify(dataJSON),
  //       (err) => {
  //         const index = dataJSON.map((gatito) => gatito.id).indexOf(id);

  //         const nuevoGatoConId = { id: id, ...nuevoGato };
  //         dataJSON.splice(index, 1, nuevoGatoConId);

  //         res.json({
  //           status: "Success",
  //           data: nuevoGatoConId,
  //         });
  //       }
  //     );
  //   } else {
  //     res.status(404).json({
  //       status: "fail",
  //       message: "Gato no encontrado",
  //     });
  //   }
  // });
};
const deleteGatito = async (req, res) => {
  try {
    await Gatito.findByIdAndDelete(req.params.id); // --> Mongoose
    // await Gatito.deleteOne({ _id: req.params.id }); --> Mongo
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Gato no encontrado",
    });
  }

  // fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
  //   const dataJSON = JSON.parse(data);
  //   const id = Number(req.params.id);

  //   if (dataJSON.map((gatito) => gatito.id).includes(id)) {
  //     fs.writeFile(
  //       `${__dirname}/assets/cats.json`,
  //       JSON.stringify(dataJSON),
  //       (err) => {
  //         const index = dataJSON.map((gatito) => gatito.id).indexOf(id);

  //         dataJSON.splice(index, 1);

  //         res.json({
  //           status: "Success",
  //           data: dataJSON,
  //         });
  //       }
  //     );
  //   } else {
  //     res.status(404).json({
  //       status: "fail",
  //       message: "Gato no encontrado",
  //     });
  //   }
  // });
};

module.exports = { getGatitos, getGatito, postGatito, putGatito, deleteGatito };
