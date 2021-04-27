

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=30&api_key=DlAYItqCSFF2ig0HKLJNIEUwUkFsPEN6`;

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(({id,title,images}) => ({
        id,
        title,
        url: images?.downsized_medium.url
    }))
    return gifs;
}
