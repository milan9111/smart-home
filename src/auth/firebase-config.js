import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCsSYXXsD0LZ3W56ATSYVqGgZsMg3uyRGA",
    authDomain: "authentication-test-jenko.firebaseapp.com",
    projectId: "authentication-test-jenko",
    storageBucket: "authentication-test-jenko.appspot.com",
    messagingSenderId: "222379897632",
    appId: "1:222379897632:web:760789c31f2f8853dbdd45",
    measurementId: "G-YGQ9BJNHCG"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);