// iteradores: Foor Loop

// for(let i = 0; i <= 10; i++ ) {
//     console.log(i);
// }

// for( let i = 1; i <= 100; i++ ) {
//     if(i % 2 === 0) {
//         console.log(`el numero ${i} es Par`);
//     } else {
//         console.log(`El numero ${i} es impar`)
//     }
// }

const carritoCompras = [
    {nombre: 'monitor 20 pulgadas', precio:500},
    {nombre: 'Television 50 pulgadas', precio:700},
    {nombre: 'tablet', precio:300},
    {nombre: 'Audifonos', precio:200},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Celular', precio:500},
    {nombre: 'Bocinas', precio:300},
    {nombre: 'laptop', precio:800}
];

for(let i = 0; i < carritoCompras.length; i++ ) {
    console.log(carritoCompras[i].nombre);
}

// while loop

// let i = 1; // indice o valor inicial

// while(i <= 100) {  // condicion

//     if(i % 2 === 0){
//         console.log(`el numero ${i}es par`)
//     } else {
//         console.log(`el numero ${i} es impar`)
//     }

//     i++  // incremento
// }

// la diferencia principal entre while o do while 
// while: revisa la condicion y si es verdadera ejecuta el codigo
// do while: primero se ejecuta el codigo y luego evalua si la condicion se cumple

// do while loop

let i = 100; // indice o valor inicial

do {
    console.log(i);

    i++
} while (i = 10);