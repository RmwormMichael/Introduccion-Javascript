// Promises
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth) {
        resolve('Usuario autenticado'); // el promise se cumple
    } else {
        reject(' no se pudo iniciar sesion');   // el reject no se cumple
    }
});

usuarioAutenticado
    .then( (resultado) => console.log(resultado))
    .catch( (error) => console.log(error));
    

// en los promises existen tres valores 
// pending: no se ha cumplido pero tampoco se ha rechazado
// fulfielled: quiere decir que se cumplio el promise
// reject: no ha rechazado o no se pudo cumplir

