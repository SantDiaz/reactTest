// Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta.
// Existen 3 metodos para las promesas:
// then: significa que la promesa se hizo correctamente.
// catch: que dio un error o por alguna razon llamamos el reject.
// finally: es algo que se va a ejecutar despues del then o catch, es lo ultimo q se ejectutara.

import { getHeroesById, getHeroesByOwner } from "./bases/08-importaciones-exportaciones";
import { heroes } from "./data/heroes";




// const promesa = new Promise ( ( resolve, reject) => {
//     setTimeout ( () => {
//         resolve();
//     }, 2000)
// });

// promesa.then ( () => {
//     console.log (' Then de la promesa ')
// })


// Resolve
// const promesa = new Promise ( ( resolve, reject) => {
//  setTimeout ( () => {
//   const heroes = getHeroesById (2)
//   resolve(heroes);
// }, 2222);

// });

// promesa.then ( (heroes) => {
//     console.log ('heroes', heroes)
// })


// reject
// const promesa = new Promise ( ( resolve, reject) => {
//  setTimeout ( () => {
//   const heroes = getHeroesById (2)
//   reject(heroes);
// }, 2222);

// });

// promesa.then ( (heroes) => {
//     console.log ('heroes', heroes)
// })
// .catch (err => console.warn ( err ) );


const getHeroesByIdAsync = ( id ) => {
    return new Promise ( ( resolve, reject) => {
        setTimeout ( () => {
         const heroes = getHeroesById (id);
         if ( heroes ){
             resolve ( heroes )
         } else {
            reject('No se pudo encontrar el heroe');    
         }
       }, 2222);
       });
};
//Manera 1
// getHeroesByIdAsync(4)
//     .then (heroes => console.log ('heroes', heroes))
//      .catch (err => console.warn ( err ) )
//Manera 2  
     getHeroesByIdAsync(10)
     .then (console.log)
      .catch (console.warn)