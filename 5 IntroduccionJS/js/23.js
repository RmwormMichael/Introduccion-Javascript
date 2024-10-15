// switch

const metodoPago = "tarjeta";

switch(metodoPago){
    case 'tarjeta':
        console.log("pagaste con tarjeta");
        break;
    case 'cheque':
        console.log("El usuario va a apgar con cheque, vamos a revisar los fondos");
        break;
    case 'efectivo':
        console.log("pagaste con efectivo");
        break;
    default:
        console.log("aun no has pagado")
        break;
}