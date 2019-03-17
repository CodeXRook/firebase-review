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

        ImageService.saveImage(url,date);
    }

    handleFileInput = async (e) =>{
        const firstFile = e.target.files[0];

        const root = firebase.strong().ref()
        const newImage =root.child(firstFile.name);

        try{
            const snapshot = await newImage.put(firstFile);
            const url = await snapshop.ref.getDownload();
            this.saveImage(url);
        }
        catch(errr) {
            console.log(err);
        }

    }
render(){

    return(
      <div className='container'>
      <div className="input-group mb-3">
      <div className="custom-file">
      <input type="file" className="custom-file-input" OnChange={this.handleFileInput}/> 
      <label className="custom-file-label">Upload Image</label>
       </div>
      </div>
      </div>
    );
  }
}
 
