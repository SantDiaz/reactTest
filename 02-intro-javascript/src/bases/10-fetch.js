const apiKey = 'J6BLxGjaU9HM0bJYSJpJiZDzFSsBP70h'

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//Manera1
// peticion
// .then ( resp => resp.json () )
// .then ( ( { data } )=> {
//     console.log (data.images.original.url)
// })
// .catch (console.warn)


//Manera2 con desestructuracion
peticion
.then ( resp => resp.json () )
.then ( ( { data } )=> {
    const {url} = data.images.original;
    const img = document.createElement ('img');
    img.src = url;
    document.body.append ( img );
})
.catch (console.warn)
