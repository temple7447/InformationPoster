import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA6FuGqCYqOaU9ER33pHYSkZnqVlyjVNjM",
    authDomain: "first-project-a5bbf.firebaseapp.com",
    projectId: "first-project-a5bbf",
    storageBucket: "first-project-a5bbf.appspot.com",
    messagingSenderId: "667603075250",
    appId: "1:667603075250:web:045028413ecd16f52709ab",
    measurementId: "G-3XHJNRGVYY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app); 