// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnE3NfZ2fS8pOqJDB72r7sgMpvtFzpidE",
  authDomain: "uploadingfile-78291.firebaseapp.com",
  projectId: "uploadingfile-78291",
  storageBucket: "uploadingfile-78291.appspot.com",
  messagingSenderId: "254732356822",
  appId: "1:254732356822:web:7ce3e3fbaf7a3500ec0d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)