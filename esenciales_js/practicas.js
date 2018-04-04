// Programacion orientada a objetos
// ES6 class

var Objeto = function(){

}

Objeto.prototype.Saludar = function(msg){
  console.log("Saludo:", msg)
}

// instanciar objeto
var o = new Objeto()
o.Saludar("Hola mundo")

Objeto.prototype.Despedirse = function(){ console.log("Adios");}

o.Despedirse()
