//Manera1
// const getImagen = async () => {
 

//     const apiKey = 'J6BLxGjaU9HM0bJYSJpJiZDzFSsBP70h'
//     const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//     const {data} = await resp.json();

    
//     const {url}= data.images.original;
//     const img= document.createElement('img');
//     img.src = url; 
//     document.body.append (img);



      
//      console.log(url)
// }

// getImagen();



//Manera 2 ejecutada con try catch

const getImagen = async () => {
 
try {
    

    const apiKey = 'J6BLxGjaU9HM0bJYSJpJiZDzFSsBP70h'
    const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await resp.json();

    
    const {url}= data.images.original;
    const img= document.createElement('img');
    img.src = url; 
    document.body.append (img);
} catch (error) {
    
     console.error(error)
}
}
getImagen();

