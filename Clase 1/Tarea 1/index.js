// Leyendo archivos
// Crear tres archivos de texto con cualquier contenido.

// Hacer una funcion que muestre en consola el contenido de los archivos. Debe usar fs.readFile, no fs.readFileSync.

// Hacer una funcion que lea uno de los archivos y cree un nuevo archivo con todo el texto del anterior en mayúsculas.

// Hacer una función que lea cada uno de los archivos y finalmente cree un cuarto archivo con el contenido de los tres restantes.

const fs = require("fs");

fs.readFile("./assets/Algo1.txt", "utf-8", (error, data) => {
  console.log(data);
  fs.readFile("./assets/Algo2.txt", "utf-8", (error, data) => {
    console.log(data);
    fs.readFile("./assets/Algo3.txt", "utf-8", (error, data) => {
      console.log(data);
    });
  });
});

fs.readFile("./assets/Algo2.txt", "utf-8", (error, data) => {
  fs.writeFile(
    "./assets/Algo4.txt",
    data.toUpperCase(),
    "utf-8",
    (error, data) => {}
  );
});

fs.readFile("./assets/Algo1.txt", "utf-8", (error, data) => {
  let sumaData = data;

  fs.readFile("./assets/Algo2.txt", "utf-8", (error, data) => {
    sumaData += data;
    fs.readFile("./assets/algo3.txt", "utf-8", (error, data) => {
      sumaData += data;
      fs.writeFile(
        "./assets/todosLosAlgos.txt",
        sumaData,
        "utf-8",
        (error, data) => {}
      );
    });
  });
});

// Utilizando el módulo http, crear un server en el puerto 3030 que retorne en la ruta base / el string "Gatitos!".

// Si el usuario ingresa a la ruta /mostrarGatito, se debe devolver un HTML con un h1 que diga "Gatito!" y la imagen del gatito de tu preferencia.

// Si el usuario ingresa a la ruta /fotosGatitos, se debe devolver este json

// Si el usuario ingresa a cualquier otra ruta, devolver un 404 incluyendo los headers correspondientes.

const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const { pathname } = url.parse(request.url, true);

  if (pathname === "/") {
    response.end("Gatitos!");
  } else if (pathname === "/mostrarGatito") {
    response.writeHead(200, {
      "Content-type": "text/html",
    });
    response.end(`<div>
    <h1>Gatito!</h1>
    <img src="http://placekitten.com/652/652" />
    </div>`);
  } else if (pathname === "/fotosGatito") {
    fs.readFile("./assets/cats.json", "utf-8", (error, data) => {
      response.end(data);
    });
  } else {
    response.writeHead(404);
    response.end("Este camino no lleva a ningún lado");
  }
});

server.listen(3030);

// package.json
// El comando echo en la consola sirve para devolver cualquier cosa que escribamos. Probá escribiendo "echo Hola" en tu terminal o consola.

// Corré el comando npm init en tu proyecto.

// Crear un script en package.json que reciba el comando "saludar". Al correr npm run saludar en la consola, debemos ver "Hola, este es mi primer script!".

//----------------------------------------------------------------------------------------

// calcular Fecha
// Usando el objeto Date podemos saber la fecha actual.

// const fechaActual = new Date();

// O podemos saber una fecha en particular agregando números como argumentos:

// const navidad = new Date(2020,11,25);

// Crear una función en Node que calcule la fecha actual y la muestre en consola.

// Crear una función que muestre en consola cuánto falta para tu cumpleaños (en milisegundos, que es lo que devuelve Date)

// Instalar el paquete de npm pretty-ms. Investigarlo y utilizarlo para mostrar en consola cuántos días faltan para tu cumpleaños.
const prettyMilliseconds = require("pretty-ms");

const getFechaActual = () => {
  return new Date();
};

const diferenciaHoraria = (otraFecha) => {
  return otraFecha - new Date();
};

getFechaActual();
diferenciaHoraria(new Date(2021, 04, 14));

const diferencia = prettyMilliseconds(new Date(2021, 04, 14) - new Date(), {
  verbose: true,
});
console.log(diferencia);

console.log(getFechaActual());
console.log(diferenciaHoraria());
