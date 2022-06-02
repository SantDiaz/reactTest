import { getUser, getUsuarioActivo } from "../../base/05-funciones";

import '@testing-library/jest-dom';

describe('Pruebas de funciones', () => { 
    
    test('getUser debe retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            userName: 'El_Papi1502',
        }
        const user = getUser();
        // console.log (user);
        expect(user).toEqual(userTest)

     })

     test('getUsuarioActivo debe retornar un objeto', () => { 
    
            const nombre = 'axel';
            const user = getUsuarioActivo(nombre);

        expect(user).toEqual({      //Podemos definir el objeto dentro
            uid: 'ABC567',
            userName : nombre 

        })

     })
 })
