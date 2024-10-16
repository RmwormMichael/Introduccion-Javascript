// this 

const reservacion = {
    nombre : "Michael",
    apellido: "Rubiano",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad de pagar es de ${this.total}`);
    }
}


const reservacion2 = {
    nombre : "Javier",
    apellido: "Rubiano",
    total: 5000,
    pagado: false,
    informacion2: function() {
        console.log(`El cliente ${reservacion2.nombre} reservo y su cantidad de pagar es de ${reservacion2.total}`);
    }
}

console.log(reservacion.informacion);
console.log(reservacion2.informacion2);