import { getHeroeById, getHeroesByOwner } from "../../bases/08-imports";
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Heroes', () => {
     
    test('debe de retornar un heroes por id', () => {

        const id = 3;

        const heroe = getHeroeById( id )

        const heroeData = heroes.find( heroe => heroe.id === id)

        expect( heroe ).toEqual( heroeData )

    })

    test('debe de retornar un undefined', () => {

        const id = 10;

        const heroe = getHeroeById( id )

        expect( heroe ).toBe(undefined)

    })

    test('debe de retornar un heroe segun owner DC', () => {

        const owner = 'DC';

        const heroe = getHeroesByOwner( owner )

        const heroesArr = heroes.filter( heroe => heroe.owner == owner );
        
        expect( heroe ).toEqual( heroesArr)

    })

    test('debe de retornar un heroe segun owner marvel y length 2', () => {

        const owner = 'Marvel';

        const heroe = getHeroesByOwner( owner )

        const heroesArr = heroes.filter( heroe => heroe.owner == owner );
        
        expect( heroe.length ).toBe( heroesArr.length )

    })
})