const Shelter = require("../models/shelters");

const getShelters = async (req, res) => {
  try {
    const shelters = await Shelter.find();

    res.json({
      status: "Success",
      data: shelters,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: "Refugios no encontrados",
    });
  }
};

const getShelter = async (req, res) => {
  // obtener los parámetros que indicó el usuario

  try {
    const shelter = await Shelter.findById(req.params.id);

    res.status(201).json({
      status: "Success",
      data: shelter,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: "Refugio no encontrado",
    });
  }
};

const postShelter = async (req, res) => {
  try {
    const shelter = await Shelter.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        shelter,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err: err,
    });
  }
};

const putShelter = async (req, res) => {
  try {
    await Shelter.replaceOne({ _id: req.params.id }, req.body);

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
};

const deleteShelter = async (req, res) => {
  try {
    await Shelter.findByIdAndDelete(req.params.id); // --> Mongoose
    // await Gatito.deleteOne({ _id: req.params.id }); --> Mongo
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Refugio no encontrado",
    });
  }
};

module.exports = {
  getShelters,
  getShelter,
  putShelter,
  postShelter,
  deleteShelter,
};
