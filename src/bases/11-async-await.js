export const getImagen = async () => {

    try{
        const apiKey = 'AYlRHHwVyW0YhaewevaOv3T43s3UpOWy';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const {data} = await resp.json();

        const { url } = data.images.original

        return url;
    }
    catch(error){

        return 'No existe';
    }
    

}

getImagen()

