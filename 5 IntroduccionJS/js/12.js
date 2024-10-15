// Objects Model
// use strict sirve para que exija buenas practicas
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

// Freeze no permite agregar mas propiedades y seal es igual pero si permite modificar las propiedades existentes
Object.freeze(producto)
producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto)