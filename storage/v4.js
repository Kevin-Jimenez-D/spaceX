//EN el readme, si tratamos de buscar en v3 "https://docs.spacexdata.com/" ->Rockets -> All rockets y buscar en el JSON (view more) images, no aparece nada, entonces se mira en v4
//https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs esto es el v4, voy a rockets/v4 ->query.md (porque hay esta flickr_images)
//""  flickr_images segun el readme "https://github.com/r-spacex/SpaceX-API/blob/master/docs/rockets/v4/query.md" con el body dice que debe usar options->select para seleccionar y flickr_images
export const getAllImgRoc = async()=>{
    let config = {
        method: "POST", 
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            options: {
                select: {
                    flickr_images: 1
                }
            }
        })
    }
    let res = await (await fetch("https://api.spacexdata.com/v4/rockets/query", config)).json();
    let img = res.docs.map(element=>{
        console.log();
        let {flickr_images:img} = element;
        return {img};
    })
    return img;
}