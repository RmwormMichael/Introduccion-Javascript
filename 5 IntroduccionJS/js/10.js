// Objetos 

const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}




console.log(producto.precio) // el mas usado

console.log(producto("precio")); // menos usado

// Modificar objetos

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

console.log(producto);

// Eliminar propiedades

delete producto.disponible