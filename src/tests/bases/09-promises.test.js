import { getHeroeByIdAsync } from "../../bases/09-promises";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

    test('Debe retornar un heroe async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                done()
                expect( heroe ).toBe( heroes[0] )
            })
    });

    test('Debe retornar un error si el heroe no existe', ( done ) => {

        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error => {
                expect(error).toBe('No se pudo encontrar')
                done()
            })


    });
})