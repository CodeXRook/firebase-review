import React from 'react';
import Image from '../components/image';
import ImageService from '../services/images';

export default class Home extends React.Component{

    constructor(props){
        super(props);

        ImageService.init();
        const imagesArray = ImageService.getImages();

        this.state = {
            images: imagesArray
        }
    }
    render(){
        
    }
    
}