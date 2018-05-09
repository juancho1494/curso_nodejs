var Cliente = require("./cliente.js");

var clienteGitHub = new Cliente("api.github.com", 443, "https");

console.log(clienteGitHub);

clienteGitHub.autenticarBasic("juancho1494", "g7653709");

// autenticar nuestro cliente...
// clienteGitHub.get("/users/juancho1494", (respuesta) =>{
//   console.log(respuesta);
// });

clienteGitHub.post("/repos/juancho1494/uuid/issues/1/comments",
{
    "body": "Puta bidah"
}, (respuesta) => console.log(respuesta));
