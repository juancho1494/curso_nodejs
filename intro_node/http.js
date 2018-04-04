var https = require('https');


// opciones
var opciones = {
  port: 443,
  hostname: "google.com",
  method: "get",
  path: "https://www.google.com.uy/?gws_rd=ssl"
};

var req = https.request(opciones, (respuesta)=> {
  // la respuesta es otro canal (de lectura)
  respuesta.on('data', (chunk)=> {
    console.log(chunk.toString());
  });
  respuesta.on('end', ()=>{
    console.log(respuesta.headers);
  })
});
req.end(); // WriteString: lanza la comunicacion del request
console.log("Peticion lanzada"); // Esto demuestra que efectivamente la ejecucion del codigo
// es asincrono ya que se lanzo esto antes que la peticion
