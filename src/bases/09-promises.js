//promesa
import {getHeroeById} from './08-imports'

export const getHeroeByIdAsync = (id) => {

    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            
            const heroe = getHeroeById(id)

            if( heroe ) resolve( heroe )
            else reject( 'No se pudo encontrar')

        }, 1500 );
    });
    
}