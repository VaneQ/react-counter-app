//desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = personajes

export const retornaArreglo = () => {
    return ['ABC', 123]
}

//const [ letras, numeros ] = retornaArreglo();


const usingState = ( nombre ) => {
    return [ nombre, () => { console.log('Hola mundo ')}]
}
