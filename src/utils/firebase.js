import firebase from 'firebase/app'
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCj5QVbxPFFc97AFBXWK_LYQGkpMEAsldE",
  authDomain: "lms-fire.firebaseapp.com",
  projectId: "lms-fire",
  storageBucket: "lms-fire.appspot.com",
  messagingSenderId: "1073839122458",
  appId: "1:1073839122458:web:76289bbbb0a7560aba09a3"
  };


// Initialize Firebase  
const app = firebase.initializeApp(firebaseConfig);  
  
//exporter notre base de données
export default app; 
//export the auth app
export const auth = app.auth();