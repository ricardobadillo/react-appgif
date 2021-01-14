export const getGifs = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kGkIhvg51VC47UrgHmwao1Gn0W0I4eCG&q=${encodeURI(category)}&limit=5`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    console.log(data);

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })


    // DEVUELVE UNA PROMESA QUE RESUELVE LA COLECCIÓN DE LAS IMÁGENES.
    return gifs;
}