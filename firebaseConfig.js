// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH0mf3bUda3nnMu0NHrDdeT8yTIRWEBLg",
    authDomain: "dkweek10.firebaseapp.com",
    databaseURL: "https://dkweek10-default-rtdb.firebaseio.com",
    projectId: "dkweek10",
    storageBucket: "dkweek10.appspot.com",
    messagingSenderId: "336578987688",
    appId: "1:336578987688:web:347b38922ce183ed38e49d",
    measurementId: "G-Q663658M30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);