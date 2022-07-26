import { getSaludo } from "../../bases/02-template-string"
import '@testing-library/jest-dom';

describe('pruebas en template.string.test.js', () => {

    test('get saludo debe retornar hola nombre', () => {

        const nombre = 'Vanessa'

        const saludo = getSaludo( nombre )

        expect( saludo ).toBe(`Hola ${nombre}`)
    })

    test('get saludo debe retornar holacarlos si no hay argumento', () => {

        const saludo = getSaludo()

        expect( saludo ).toBe(`Hola Carlos`)
    })
})