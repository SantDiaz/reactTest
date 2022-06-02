//Maneras de declarar funciones en js moderno: 
//Primera
const saludar = function ( nombre ) {
    return `Hola, ${nombre}`;
}
//Segunda
const saludar2 = ( nombre ) => {
    return `hola, ${ nombre }`;
}
//Tercera
const saludar3 = ( nombre ) => `hola, ${ nombre }`;
//Cuarta
const getUser = () => ( { 
        uid : 'juan',
        username : 'pedro',
});



// function getUsuarioActivo ( nombre ) {
//     return {
//       uid: 'AAAAA',
//       username: nombre,
//     }
// };

// const getUsuarioActivo = getUsuarioActivo ( ' Fernandinho ');
// console.log ( UsuarioActivo );
//Tare
//Convertir la funcion de arriba a funcion flecha y que devuelva un objeto implicito

const getPrueba = ( nombre ) => ( { 
 
    uid: 'maribel',
    username: nombre,
 
} );

console.log ( getPrueba ('axel') );
console.log ( saludar ('ramiro') );
console.log ( saludar2 ('santiago') );
console.log ( saludar3 ('wtf') );
console.log ( getUser () );