import React from 'react';
import * as firebase from 'firebase';// * AS FIRE BASE IS IMPORTANT LOWER CASE 
import ImageService from '../services/images';


 // Initialize Firebase

 const config = {
    apiKey: "AIzaSyDnX-V1IEQDlgNv1XwraQA9jXi3pE8Yomk",
    authDomain: "success-uploader.firebaseapp.com",
    databaseURL: "https://success-uploader.firebaseio.com",
    projectId: "success-uploader",
    storageBucket: "success-uploader.appspot.com",
    messagingSenderId: "370924651634"
 };
 firebase.initializeApp(config);

 export default class Home extends React.Component{

    saveImage = (url) => {
        const date = Date();

        ImagesService.saveImage(url,date);
    }

    handleFileInput = async (e) =>{
        const firstFile = e.target.files[0];

        
    }
 }
