// notificacion API
const boton = document.querySelector('#button');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`el resuldao es: ${resultado}`))
} )


if(Notification.permission == 'garanted') {
    new Notification('esta es una notificacion', {
        icon: 'img/Leonardo_Phoenix_A_serene_and_whimsical_wallpaper_featuring_a_1.jpg',
        body: 'los mejores tutoriales'
    })
}


