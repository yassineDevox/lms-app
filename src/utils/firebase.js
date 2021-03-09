import firebase from 'firebase/app'
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAnwZ7DPu9eDCmQvw_h2-1XrhbTLco_gho",
    authDomain: "lms-project-966cf.firebaseapp.com",
    projectId: "lms-project-966cf",
    storageBucket: "lms-project-966cf.appspot.com",
    messagingSenderId: "874849901753",
    appId: "1:874849901753:web:243346e755c02343090f68"
  };


  // Initialize Firebase  
const app = firebase.initializeApp(firebaseConfig);  
  
//exporter notre base de données
export default fireDB; 
//export the auth app
export const auth = app.auth();