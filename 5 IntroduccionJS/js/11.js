// Destructuring de  objetos


//Objeto
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}


// Forma anterios para acceder a una propiedad de una variable
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto)
// console.log(nombreProducto)

// Destructuring Nueva forma

// const {precio} = producto;
// const {nombreProducto} = producto;

// // Destructuring de un solo objeto puedes tener todos en una linea
const {precio, nombreProducto} = producto;



console.log(precio);
console.log(nombreProducto);