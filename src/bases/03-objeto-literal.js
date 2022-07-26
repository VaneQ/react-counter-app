const persona = {
    nombre : 'Vanessa',
    apellido : 'Quero',
    edad: 26,
    pais: 'Venezuela',
    direccion: {
        ciudad: 'Punto fijo',
        codigo_postal:  4102,
    }
};



const persona2 = { ...persona };
persona2.nombre = 'Miguel'

console.log(  persona )
console.log( persona2 )