import { heroes } from '../data/heroes';
//Manera 1 FIND

// const getHeroesById = (id) => {
//     return heroes.find( ( heroe ) => {
//       if (heroe.id === id ){
//           return true;
//       }
//     });
// }
//console.log ( getHeroesById ( 2 ));

//Manera 2 FIND

 export const getHeroesById = (id) => {
    return heroes.find ( heroe => heroe.id === id);
}
//  console.log( getHeroesById ( 2 ));



// manera 3 FILTRAR
// La funcion filter nos trae todos los elementos del arreglo que cumplan la condicion
// y sea igual a lo pedido en el console.log en este caso console.log(getHeroesByOwner('DC'))

export const getHeroesByOwner = (owner) => heroes.filter((heroes)=> heroes.owner === owner);
// console.log(getHeroesByOwner('DC'))