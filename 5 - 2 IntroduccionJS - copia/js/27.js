// Programacion Orientada a Objetos POO

// object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// object constructor

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('laptop', 300, false);
const producto4 = new Producto('teclado', 200, true);
const producto5 = new Producto('mouse', 100, false);

function formatoProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`
}
//  prototype Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatoProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`
}

const cliente = new Cliente('Michael', 'Rubiano');

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido =apellido;
}

function formatoCliente(cliente) {
    return `El cliente ${this.nombre} tiene un apellido de ${this.apellido}`
}


Producto.prototype.formatoCliente = function() {
    return `El cliente ${this.nombre} tiene un apellido de ${this.apellido}`
}

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(cliente);

console.log( formatoProducto(producto2));
console.log( formatoCliente(cliente));


