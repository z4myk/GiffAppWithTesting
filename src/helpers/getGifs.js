export const getGifs = async(category) => {
    const API_KEY = 'J4lgnidS7q6Z2DxgVV7JKIPGOq4Tvcu8'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${10}&offset=0&rating=g&lang=en`;

    const resp = await fetch(url);
    
    const {data} = await resp.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
        ))
        
        
        return gifs;
    }
