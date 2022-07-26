const nombre = 'Vanessa';

const apellido = 'Quero';

//const nombreCompleto = nombre + ' ' + apellido;


const nombreCompleto = `${ nombre } ${apellido}`

export function getSaludo(nombre = 'Carlos')
{
    return 'Hola ' + nombre
}
