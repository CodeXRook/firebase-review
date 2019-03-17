const ImageService = {} //EMPTY OBJECT

//GETS IMAGES AND PLACES THEM INTO AN ARRAY
ImageService.init = () => {
    if (localStorage.getItem('images') === null) {
        localStorage.setItem('images', JSON.stringify([]));
 }                                    //UNDERSTAND STRINGIFY WITH JSON
}

export default ImageService;