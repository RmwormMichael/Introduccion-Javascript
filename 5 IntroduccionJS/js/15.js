// Array Methods

const meses = new Array('enero', 'marzo', 'febrero', 'abril');

const carritoCompras = [
    {nombre: 'monitor 20 pulgadas', precio:500},
    {nombre: 'Television 50 pulgadas', precio:700},
    {nombre: 'tablet', precio:300},
    {nombre: 'Audifonos', precio:200},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Celular', precio:500},
    {nombre: 'Bocinas', precio:300},
    {nombre: 'laptop', precio:800}
]

//forEach

meses.forEach(function(mes){
    if(mes == 'marzo') {
        console.log('marzo si existe');
    }
})

// Includes para saber si un elemento existe dentro de un array
// const resultado = meses.includes('marzo');
// const resultado2 = meses.includes('Celular');
// console.log(resultado)
// console.log(resultado2)

let resultado = meses.includes('marzo');

// Some ideal para arreglo de objetos
resultado = carritoCompras.some(function(producto){
    return producto.nombre === 'Celular'
})

console.log(resultado);

// Arrow Function se cambia la palabra function por una flecha y no se utiliza el return
resultado = carritoCompras.some(producto => producto.nombre === 'Celular'
)
console.log(resultado);

// Reduce toma todos los numeros y te entrega un resultado
resultado = carritoCompras.reduce(function(total, producto){
    return total + producto.precio
},0);

console.log(resultado);

// filter sirve para obtener un elemento o todos menos uno o todos mayor que un numero ej 500, solo se cambia la condicion en el return
resultado = carritoCompras.filter(function(producto){
    return producto.precio > 400
});
console.log(resultado);