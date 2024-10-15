// Metodos para acceder a los strings "indexOf" y "include"

const producto = "Monitor de 20 Pulgadas"; //string o cadena de texto, la mas utilizada
const productoM = "Monitor de 20\""; //Se utiliza \ para poner comillas osino marca error
const producto2 = String('Monitor 30 Pulgadas'); 
const producto3 = new String('Monitor 50 Pulgadas');
const email = 'correo@correo.com';

const productoHd = 'Monitor HD';

console.log(producto)
console.log(producto.length)//es para conocer cuantatos caracteres hay escritos
console.log(producto2)
console.log(producto3)
console.log(productoM)
console.log(productoHd)

// IndexOf (retorna una posicion)
console.log(producto.indexOf('Pulgadas'));
console.log(producto.indexOf('Tablet'));
console.log(producto.indexOf('@'));

// Include (retorna true o false)
console.log(producto.includes('Pulgadas'));
console.log(producto.includes('Tablet'));



