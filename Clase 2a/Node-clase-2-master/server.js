const mongoose = require("mongoose");
const app = require("./app");

// Determino un puerto
const port = 8080;

// mongoose.connect(
//   'mongodb://localhost:27017/', { dbName: 'ada' },
//   err => (err ? console.log(err) : console.log('Connected to database')),
// );

mongoose
  .connect(
    "mongodb+srv://Loohan:kq7vXjJPBkRaNhRs@cluster0.fsbtd.gcp.mongodb.net/ada?retryWrites=true&w=majority"
  )
  .then((con) => console.log(con.connections));

// La variable app va a escuchar a nuestro puerto
app.listen(port, () => {
  console.log(`App corriendo en puerto ${port}`);
});
