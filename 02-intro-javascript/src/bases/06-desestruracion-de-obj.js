const persona = {
    nombre: 'tony',
    edad: 20,
    clave: 'heart'
};
//Manera 1

// const { edad, clave, nombre } = persona;
// console.log ( edad );
// console.log ( clave );
// console.log ( nombre );


//Manera 2 desectructurada

// const retornaPersona = ( { nombre, edad}) => {
//     console.log ( edad, nombre);
// };

// retornaPersona (persona);

//Manera 3

// const retornaPersona = ( { nombre, edad}) => {
//     return {
//          nombreClave : nombre,
//          anios : edad,
//     }

// };

// const {nombreClave, anios} = retornaPersona (persona);
// console.log(nombreClave, anios)

//Manera 4, objeto dentro de otro objeto

const retornaPersona = ( { nombre, edad}) => {
    return {
         nombreClave : nombre,
         anios : edad,
         lating : {
             lat: 12.214,
             ing: -124.23
         }
    }

};

const {nombreClave, anios, lating : {lat, ing} } = retornaPersona (persona);
console.log(nombreClave, anios, lat, ing)