// Arrays

const numeros = [10,20,30,40,50,60];

// const meses = new Array('enero', 'febrero', 'abril');

// console.table(meses)

// // const arreglo = ['Hola', 10, true, 'si', null, {nombre: 'juan', trabajo: 'programador'}, [1,2,3]];

// console.log(arreglo)


// Acceder a los valores de un arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);

// Conocer la extension deun arreglo
// console.log(meses.length);

// Recorrer arreglos 
// numeros.forEach( function(numero) {
//     console.log(numero);
// })

// Agregar elementos a un arreglo, en este caso seria en el indice 5 ponemos el numeor 60
// numeros(5) = 60;
// numeros(6) = 70;

// push para agregar al final, pero al dia de hoy la idea es no modificar los arrays originales
// numeros.push(60,70,80);
// unshift para agregar al inicio
// numeros.unshift(60,70,80);
// Pop para  Eliminar el ultimo dato de un arreglo
// numeros.pop();
// Shift eliminar el primer elemento 
// numeros.shift();

// Splice eliminar uno o mas objetos especificos
// numeros.splice(2,1)
 
// console.table(numeros);


const meses = new Array('enero', 'febrero', 'abril');

// rest operator o Spread Operator para agregar elementos sin modificar las arrays
 const nuevoArreglo = [...meses, 'junio'];

 console.log(nuevoArreglo)