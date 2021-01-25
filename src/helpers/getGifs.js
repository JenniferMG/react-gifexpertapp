export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=`;

    const api_key = 'cwyi0zjuQ7lG2dwzvoC34IxiIR0nLOW8'; 

    const resp = await fetch( url + api_key );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}