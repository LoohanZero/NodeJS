const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const gatitoRouter = require("./routes/gatitosRoutes");
const shelterRouter = require("./routes/shelterRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// app.get("/", (req, res) => {
// //   res.send("Hola");
// res.json({
//     Estado: 'Tu pedido fue exitoso',
// })
// });

// app.post("/", (req, res) => {
//   res.send("me hiciste un post");
// });

// app.post("/hola", (req, res) => {
//     res.send("me hiciste un post en la ruta hola");
//   });

const getApi = (req, res) => {
  res.json({
    Estado: "Bienvenido a mi API",
  });
};

app.use("/usuarios", userRouter);
app.use("/gatitos", gatitoRouter);
app.use("/refugios", shelterRouter);

module.exports = app;
