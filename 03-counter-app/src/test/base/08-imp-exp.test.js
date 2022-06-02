import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => { 

    test('Debe de retornar un heroe por id', () => { 
        
        const id = 1;
        const heroe= getHeroeById(id);
        const heroeData= heroes.find( heroes => heroes.id === id  );
        expect (heroe).toEqual(heroeData);

     });


     test('Debe de retornar un heroe undefine si heroe no existe', () => { 
        
        const id = 10
        const heroe= getHeroeById(id);
        expect (heroe).toBe(undefined);
     });
    //                                          TAREAS
        
    test('Debe retornar un arreglo con los heroes de DC', () => { 

        const owner = 'DC';
        const heroe=getHeroesByOwner(owner);

        const heroreData = heroe.filter(h => h.owner === 'DC');

        
        expect(heroe).toEqual(heroreData);

     })

     test('Debe retornar un arreglo con los heroes de MARVEL', () => { 

        const owner = 'Marvel';
        const heroe=getHeroesByOwner(owner);
        
        expect(heroe.length).toBe(2);

     })


 });