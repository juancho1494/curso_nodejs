const fs = require('fs');


// Leer un archivo  (texto.txt)
//archivo = fs.readFileSync('./texto.txt');

// Leer un archivo de manera asincrona
// var archivo;
// fs.readFile('./texto.txt',(err, data) => { // callback async
//   //console.log(data);
//   // node.js inicializa la lectura pero tambien ejecuta el console.log(archivo), por eso el console.log(archivo)
//   // que esta por fuera de readFile esta indefinido
//   archivo = data;
//   console.log(err); // error de lectura por ejemplo
//   console.log(archivo);
// });
//
// console.log(archivo);

const archivo = fs.createWriteStream('escritura.txt', {
  flags:'r+', //sobrescribe ciertas partes del archivo (este archivo ya tenia la palabra hola guardada)
  start: 4 //donde empieza la escritura
});
archivo.write("abcdehi");
archivo.end("---");
