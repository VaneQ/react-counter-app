import { getUser, getUsuarioActivo } from "../../bases/05-funciones"

describe('Pruebas 05-dfunciones.test.js', () => {

    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC1234',
            username: 'LaMamu'
        }

        const user = getUser();

        expect( user ).toEqual( userTest )
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC1234',
            username: 'LaMamu'
        }

        const user = getUsuarioActivo( userTest.username );

        expect( user ).toEqual( userTest )
    })
})