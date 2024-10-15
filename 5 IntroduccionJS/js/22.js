// Estructruras de control

// if
const puntaje = 1000;

// igual
// if(puntaje === 1000) {
//     console.log("si el puntaje es 1000");
// } else {
//     console.log("no es igual");
// }

// diferente
// igual
// if(puntaje !== 100) {
//     console.log("no es igual");
// } else {
//     console.log("si el puntaje es 1000");
// }

// mayor que o menor que segun la condicion
// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log("el usuario puede pagar");
// } else {
//     console.log("fondos insuficientes");
// }

// else if

const rol = "Administrador";

if(rol === "Administrador" ){
    console.log("tiene acceso a todo el sistema");
} else if (rol === "Editor") {
    console.log("eres editor, puedes entrar pero no puedes hacer mucho");
} else {
    console.log("no tienes acceso");
} 