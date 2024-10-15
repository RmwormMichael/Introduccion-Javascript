// Funciones
// 3 formas de crear funciones: declaracion, exprecion, IIFE.

// Declaracion de la funcion
function  sumar() {
    console.log(10 + 10)
}

sumar();

// Expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3)
}
sumar2();

// IIFE
(function() {
    console.log('esto es una funcion')
})();


// Hoisting 

// Declaracion de la funcion si se pone la funcion primero si sirve
// sumar();
// function  sumar() {
//     console.log(10 + 10)
// }


// Expresion de la funcion si se pone la funcion primero no sirve
// sumar2();
// const sumar2 = function(){
//     console.log(3 + 3)
// };
