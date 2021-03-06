import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas con promesas', () => { 
    test('debe retornar un heroe async', (done) => {
        
        const id = 1;

        getHeroeByIdAsync (id)
            .then ( heroe => {
                 expect ( heroe ).toBe( heroes[1] );
                 done ();   // se usa para avisar al test que ya termino el proceso
            })

     });

     test('debe de obtener un error si el heroe por id no existe', (done) => {
         
        const id = 10;
        getHeroeByIdAsync ( id )
            .catch ( error => {
                expect (error ).toBe(" no se pudo encontrar el heroe");
                done();
            }); 
     };
 })