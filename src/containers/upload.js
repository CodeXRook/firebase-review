import React from 'react';
import * as firebase from 'firebase';// * AS FIRE BASE IS IMPORTANT LOWER CASE 
import ImageService from '../services/images';


 // Initialize Firebase

 const config = {
    apiKey: "AIzaSyCd75UUcibUnlRsxx0eVwWgJMJeSxVW_bo",
    authDomain: "success-uploader.firebaseapp.com",
    databaseURL: "https://success-uploader.firebaseio.com",
    projectId: "success-uploader",
    storageBucket: "success-uploader.appspot.com",
    messagingSenderId: "1010392252395"
 };
 firebase.initializeApp(config);

 export default class Home extends React.Component {

    saveImage = (url) => {
        const date = Date();

        ImageService.saveImage(url, date);
    }

    handleFileInput = async (e) => {
        const firstFile = e.target.files[0];

        const root = firebase.storage().ref()
        const newImage =root.child(firstFile.name);

        try {
            const snapshot = await newImage.put(firstFile);
            const url = await snapshot.ref.getDownloadURL();
            this.saveImage(url);
        }
        catch(err) {
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
 
