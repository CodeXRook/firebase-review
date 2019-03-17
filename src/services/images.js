const ImageService = {} //EMPTY OBJECT

//GETS IMAGES FROM LOCAL STORAGE?
ImageService.init = () => {
    if (localStorage.getItem('images') === null) {
        localStorage.setItem('images', JSON.stringify([]));
 }                                    //UNDERSTAND STRINGIFY WITH JSON
}

//GET IMAGES AND PLACES THEM INTO AN ARRAY
ImageService.getImages = () => {
    const imageArrayString = localStorage.getItem('images');
    const imageArray = JSON.parse(imageArrayString);
    return imageArray;
}

export default ImageService;