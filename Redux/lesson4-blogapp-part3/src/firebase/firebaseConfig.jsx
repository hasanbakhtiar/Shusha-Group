import firebase from "firebase/app";
import 'firebase/database'; 


const firebaseConfig = {
    apiKey: "AIzaSyBjQareWB53w_5vUexN40Sdka-5MzZHu7A",
    authDomain: "shusha-db680.firebaseapp.com",
    databaseURL: "https://shusha-db680-default-rtdb.firebaseio.com",
    projectId: "shusha-db680",
    storageBucket: "shusha-db680.appspot.com",
    messagingSenderId: "130721241460",
    appId: "1:130721241460:web:5f0f891ed4da208bb1f421"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}

