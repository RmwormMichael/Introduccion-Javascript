// metodos de propiedad
// Como crear tus propios metodos 

const reproductor = {
    reproduir : function(id) {
        console.log(`'reproduciendo cancion con el ID: ${id}'`) 
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`'Creando la playlist: ${nombre}'`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`'Reproduciendo la playlist: ${nombre}'`);
    },
}
// Agregar funciones por fuera y en este caso se pone el igual =
reproductor.borrarCancion = function(id) {
    console.log(`'eliminando la cancion: ${id}`)
}

reproductor.reproduir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');