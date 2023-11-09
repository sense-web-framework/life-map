import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
const firebaseAuth = getAuth(app);

export { firebaseAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
