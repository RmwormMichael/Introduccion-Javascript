// Classes en javascrpit

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`
    }

    retornarPrecio() {
        return ` el precio de ${this.nombre} es ${this.precio}`
    }
}

const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('laptop', 300, false);

console.log(producto2);
console.log(producto3);