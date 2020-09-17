const fs = require("fs");

const getGatitos = (req, res) => {
  fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
    const dataJSON = JSON.parse(data);

    res.json({
      status: "Success",
      data: dataJSON,
    });
  });
};

const getGatito = (req, res) => {
  // obtener los parámetros que indicó el usuario
  console.log(req.params);
  // Recibir una petición
  fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: "Ocurrió un error",
      });
    }
    const gatos = JSON.parse(data);
    const id = Number(req.params.id);
    const gatosFiltrados = gatos.filter((gato) => gato.id === id);
    if (!gatosFiltrados.length) {
      res.status(404).json({
        status: "fail",
        message: "Gato no encontrado",
      });
    }
    res.json({
      status: "Success",
      data: gatosFiltrados,
    });
  });
};

const postGatito = (req, res) => {
  // Primero determino toda la info a agregar
  fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
    //   Obtengo lo que ya existe
    const dataJSON = JSON.parse(data);
    // Asigno a una variable lo que envía el post
    const nuevoGato = req.body;
    //   Le asigno un ID de acuerdo al lenght de lo que ya tengo
    nuevoGato.id = dataJSON.length;
    //   Le sumo mi nuevoGato a lo que ya tengo
    dataJSON.push(nuevoGato);

    // Ahora agrego la data
    fs.writeFile(
      `${__dirname}/../assets/cats.json`,
      JSON.stringify(dataJSON),
      (err) => {
        // Éxito al grabar? 201
        res.status(201).json({
          status: "success",
          data: {
            nuevoGato,
            createdAt: new Date(),
          },
        });
      }
    );
  });
};

const putGatito = (req, res) => {
  fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
    const dataJSON = JSON.parse(data);
    const nuevoGato = req.body;
    const id = Number(req.params.id);

    if (dataJSON.map((gatito) => gatito.id).includes(id)) {
      fs.writeFile(
        `${__dirname}/assets/cats.json`,
        JSON.stringify(dataJSON),
        (err) => {
          const index = dataJSON.map((gatito) => gatito.id).indexOf(id);

          const nuevoGatoConId = { id: id, ...nuevoGato };
          dataJSON.splice(index, 1, nuevoGatoConId);

          res.json({
            status: "Success",
            data: nuevoGatoConId,
          });
        }
      );
    } else {
      res.status(404).json({
        status: "fail",
        message: "Gato no encontrado",
      });
    }
  });
};
const deleteGatito = (req, res) => {
  fs.readFile(`${__dirname}/../assets/cats.json`, (err, data) => {
    const dataJSON = JSON.parse(data);
    const id = Number(req.params.id);

    if (dataJSON.map((gatito) => gatito.id).includes(id)) {
      fs.writeFile(
        `${__dirname}/assets/cats.json`,
        JSON.stringify(dataJSON),
        (err) => {
          const index = dataJSON.map((gatito) => gatito.id).indexOf(id);

          dataJSON.splice(index, 1);

          res.json({
            status: "Success",
            data: dataJSON,
          });
        }
      );
    } else {
      res.status(404).json({
        status: "fail",
        message: "Gato no encontrado",
      });
    }
  });
};

module.exports = { getGatitos, getGatito, postGatito, putGatito, deleteGatito };
