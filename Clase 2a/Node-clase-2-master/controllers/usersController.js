const User = require("../models/users");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      status: "Success",
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: "Usuarios no encontrados",
    });
  }
};

const getUser = async (req, res) => {
  // obtener los parámetros que indicó el usuario

  try {
    const user = await User.findById(req.params.id);

    res.status(201).json({
      status: "Success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      data: "Usuario no encontrado",
    });
  }
};

const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err: err,
    });
  }
};

const putUser = async (req, res) => {
  try {
    await User.replaceOne({ _id: req.params.id }, req.body);

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

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id); // --> Mongoose
    // await Gatito.deleteOne({ _id: req.params.id }); --> Mongo
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Usuario no encontrado",
    });
  }
};
module.exports = { getUsers, getUser, putUser, postUser, deleteUser };
