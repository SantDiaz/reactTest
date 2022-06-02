const persona = {
    nombre: 'Rafael',
    apellido: 'Diaz',
    edad: 1,
    direccion: {
        ciudad: 'San juanistan',
        zip:342532,
        lat:23423,
    }
};

//console.table ( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';


console.log ( persona );
console.log ( persona2 );