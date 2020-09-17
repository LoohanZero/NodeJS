const express = require("express");

const morgan = require("morgan");
const app = express();
const userRouter = require("./routes/userRoutes");
const gatitoRouter = require("./routes/gatitosRoutes");
const shelterRouter = require("./routes/shelterRoutes");

// Middleware
app.use(express.json());

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
