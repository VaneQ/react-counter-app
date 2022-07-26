import { retornaArreglo } from "../../bases/07-deses-arr"

describe('Pruebas en 07 desestructuracion', () => {

    test('debe de retornar un string y un numero', () => {

         const [letras, numeros ] = retornaArreglo()

         expect( letras ).toEqual( 'ABC' )
         expect( typeof letras ).toEqual( 'string' )
    })
})