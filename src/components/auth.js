import {getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDTeeHf0kgaZt-gNKUoh9AcVeqiXMQIVdY",
  authDomain: "react-app-d031c.firebaseapp.com",
  projectId: "react-app-d031c",
  storageBucket: "react-app-d031c.appspot.com",
  messagingSenderId: "638097894706",
  appId: "1:638097894706:web:e41ab76620c9e7b4bebb2b",
  measurementId: "G-Y5FYWWR2GF"
};

initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;