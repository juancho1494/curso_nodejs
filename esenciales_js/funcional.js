// Programacion funcional

// 1. Inmutabilidad - valores
var a = [1,2,3,4];
//a[0] = 10; // No es funcional (altero el arreglo)

var b = a.map((x) => x*2); // Esto si es funaional (un resultado nuevo basado en arreglo "a")
console.log(a,b);

// 2. Funciones como parametros, funciones que regresan Funciones
// - reutilizacion de codigo
var  suma = ((a,b) => a+b)
console.log(suma(2,2));

var suma2 = ((a) => ((b) => a+b));
console.log(suma2(2)(3))

// Aca reutilizo Suma 2 para sumar 10
var sumar10 = suma2(10);
console.log(sumar10(7

  var f = function(callback){
    // ejecucion de una secuencia de codigo
    if (typeof callback == 'function')
      return callback();
  }

// 3. En programacion funcional siempre se debe regresar un resultado unico
// raiz cuadrada de 4 = 2, = -2 (Esto no es funcional ya que tiene 2 resultados posibles)
