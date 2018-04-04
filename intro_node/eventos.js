const Eventos = require('events');

class Carro extends Eventos {

  constructor(){
    super();
    this.contador = 0;
  }

  Arrancar(){
    console.log("El auto arranca");
    this.emit('arranco',this.contador); // Tiene el mismo nombre que abajo cuando lo queremos escuchar
    // Tambien se pueden capturar variables.
    this.contador +=1;
  }
}

var carro1 = new Carro();

// Para escuchar eventos, suscribirnos con el metodo on()
carro1.on('arranco', function(c){
    console.log(c, " El evento fue escuchado y la secuencia ejecutada");
})

carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
