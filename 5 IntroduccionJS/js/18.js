// Funciones con parametros y argumnetos
// los parametros van dentro de los parentesis
// Declaracion de la funcion con valor por default
function  sumar(numero1 = 0, numero2 = 0) { // estos son los parametros los que estan entre parentesis. los numeros por default se ponen con = a 0 por si hace falta un numero automaticamente se asigna el valor por default
    console.log(numero1 + numero2)
}

sumar(10, 10); // estos son los argumentos o valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1);

// Expresion de la funcion
const sumar2 = function(n1, n2){
    console.log(n1 + n2)
}
sumar2(5, 10);