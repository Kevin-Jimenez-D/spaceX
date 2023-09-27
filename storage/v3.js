//En este caso se obtendran todas las imagenes, o all launches, este link aparece en el readme->API V3->Launches->All launches 
//"https://docs.spacexdata.com/#5fc4c846-c373-43df-a10a-e9faf80a8b0a"
export const getAllImgMis = async()=>{
    //Este es el link que aparece para copiar del readme readme->API V3-> "https://docs.spacexdata.com/" ->Launches->All launches
    let res = await (await fetch("https://api.spacexdata.com/v3/launches")).json();

    //Ese link da muchos datos repetidos, por lo tanto se hace map
    //EN el JSON, se accede en el siguiente orden "links"->"mission_patch" y "mission_patch_small" y retorna esos datos, se eligió esas 2 porque sí, era libre cual tomar y que sean imágenes
    let img = res.map(element =>{
        let {mission_patch:img, mission_patch_small:img_small} = element.links;
        return {img, img_small};
    })
    //Trae el elemento img que dentro tiene "mission_patch" y "mission_patch_small"
    return img;
}