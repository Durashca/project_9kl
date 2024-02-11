/*"module"*/
// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAajT5UbThkqpNNL0nvCaCzozK5l3BQoeE",
    authDomain: "project9kl.firebaseapp.com",
    projectId: "project9kl",
    storageBucket: "project9kl.appspot.com",
    messagingSenderId: "713449286951",
    appId: "1:713449286951:web:01c19cdf5674a793ac8d02",
    measurementId: "G-KMDR2748RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
