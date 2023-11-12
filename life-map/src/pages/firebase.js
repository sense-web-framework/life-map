import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA6MmGJelK2ElKUJpLSVHpu5HxYb0ENs1Q",
    authDomain: "life-map-aa36c.firebaseapp.com",
    projectId: "life-map-aa36c",
    storageBucket: "life-map-aa36c.appspot.com",
    messagingSenderId: "1041889065341",
    appId: "1:1041889065341:web:6ae5bc11874e2dc35bb414",
    measurementId: "G-DKC1EQL4CB"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;