// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrxP_WGx3a2NrN73L3dU-SJoH1KwQEskw",
    authDomain: "movie-store-fb2c5.firebaseapp.com",
    projectId: "movie-store-fb2c5",
    storageBucket: "movie-store-fb2c5.firebasestorage.app",
    messagingSenderId: "613606278230",
    appId: "1:613606278230:web:d46a60a63752ffa24c27f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
