//EN el readme, si tratamos de buscar en v3 "https://docs.spacexdata.com/" ->Rockets -> All rockets y buscar en el JSON (view more) images, no aparece nada, entonces se mira en v4

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