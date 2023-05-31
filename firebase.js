import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "xxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxx"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app); 