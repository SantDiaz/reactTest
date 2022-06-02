import '@testing-library/jest-dom'; // Esto incorpora tanto el describe, el test y los expects
import { getSaludo } from '../../base/02-template-string'; 




describe ( ' pruebas en 02-template-string.js', () => {

 test('getSaludo debe retornar Hola Fernando', () => { 
     
    const nombre = 'Fernando';

    const saludo = getSaludo( nombre );

    expect ( saludo ).toBe( 'Hola ' + nombre + '!');

   
 }) 
 
    test('getSaludo debe retornar Hola Carlos! si no hay argumento en el nombre', () => { 
        
         
        const saludo = getSaludo();
        expect ( saludo ).toBe( 'Hola Carlos!');
    })

})