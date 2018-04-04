var arr = [6,-23,12,45,-9,0,1,4,95];

// for - Iterador
for(var i = 0; i< arr.length; i++){
  console.log(arr[i]);
}

// forEach - Iterador
// imprime el indice y el valor del arreglo
arr.forEach(function(a,b){
  console.log(a,b);
});

//forEach con flecha
arr.forEach((a,b) => console.log(a,b));


// filter toma como parametros una funcion y los filtra
var resultado = arr.filter((valor) => valor < 0);
console.log(resultado);
console.log(arr);

//Manipulacion de datos
var resultado2 = arr.map(function(valor){
  return valor*valor; // eleva al cuadrado cada elemento
}).filter((x) => x > 2000);
console.log(resultado2);

//Reduce - reducir a un resultado unico basado en el arreglo
// 6 , -23, 12... etc.
// arranca en el valor 0 por que eso le dijimos
var resultado3 = arr.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(resultado3);

var resultado4 = arr.reduce((acumulador, valor) => {
  acumulador.valor = acumulador.valor + valor;
  return acumulador;
}, {valor:0});

console.log(resultado4);
