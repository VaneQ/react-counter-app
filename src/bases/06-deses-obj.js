//Desestruccturacion en JS
//asignacion desestructurante


const persona = {
    nombre: 'Vanessa',
    edad: 26,
    clave: 'nakama',
    latlng: {
        lat: 14.232323,
        lng: -12.23232
    }
}

const { nombre, edad, clave } = persona;


const usingContext = ( { nombre, edad } ) => {
    //console.log( nombre, edad )

    return {
        nombreClave: nombre,
        anios: edad
    }
}

const { nombreClave, anios, latlng } = usingContext( persona )

console.log( nombreClave, anios, latlng )