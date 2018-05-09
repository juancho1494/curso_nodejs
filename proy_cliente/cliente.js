// Cliente HTTP/HTTPS
// github.com/users/juancho1494

const fs = require('fs');

class Cliente {

  constructor(host, puerto, protocolo){
    this.host = host;
    this.puerto = puerto;
    this.protocolo = protocolo;
    if(protocolo != "http" && protocolo != "https"){
      console.log("ERROR!!!");
    }
    // Directorio termporal para el loggin
    this.logDir = fs.mkdtempSync("/tmp/cliente-http-");
  }

  // Metodo de autenticacion HTTP BASIC
  autenticarBasic(user, pass){
    this.basicAuth = new Buffer(user+ ":" + pass).toString("base64");
  }

  // Procesar HEADERS para mantener session => se realiza en la peticion (request)
  procesarHeaders(){
    var headers = {
      "Accept": "*/*",
      "User-Agent": "Cliente Node.js",
    }
    if (this.basicAuth != undefined){
      headers.Authorization = "Basic "+this.basicAuth;
    }
    return headers;
  }

  // Realizar peticiones HTTP de tipo Get (OBTENER INFORMACION)
  get(uri, callback){
    var opciones = {
        hostname: this.host,
        port: this.puerto,
        method: "GET",
        path: this.protocolo + "://" + this.host + uri, //https://api.github.com/juancho1494
        headers: this.procesarHeaders()
    };
    this.request(opciones, null, callback);
  }

  post(uri, data, callback){
    var opciones = {
        hostname: this.host,
        port: this.puerto,
        method: 'POST',
        path: this.protocolo + "://" + this.host + uri, //https://api.github.com/juancho1494
        headers: this.procesarHeaders()
    };
    this.request(opciones, data, callback);
  }

  // request (manejo de peticiones)
  request(opciones, data, callback){
    // HTTP o HTTPS
    var http = require(this.protocolo); //http, o https
    var respuesta = {
      status: null,
      body: "",
      headers: null
    }
    var peticion = http.request(opciones, (canalRespuesta)=>{
      canalRespuesta.on('data', (chunk)=>{ // los chunk de una peticion http son pedasos del body
        respuesta.body += chunk;
      });
      canalRespuesta.on('end', ()=>{
        respuesta.status = canalRespuesta.statusCode;
        respuesta.headers = canalRespuesta.headers;
        fs.appendFile(this.logDir + "/cliente.log", "lorem ipsun");
        callback(respuesta);
      });
    });
    console.log(opciones);
    console.log("\n\n----------------------------------------- \n\n")
    if (data != undefined && data != null){
      peticion.write(JSON.stringify(data));
    }
    peticion.end();
  }

}
module.exports = Cliente;
