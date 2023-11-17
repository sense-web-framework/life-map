import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar.js';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function SignIn(){
    const [id, setId] = useState("");
    const [alertId, setAlertId] = useState("");
    const [password, setPassword] = useState("");
    const [alertPassword, setAlertPassword] = useState("");
    const [alertSignIn, setAlertSignIn] = useState("");
    const navigate = useNavigate();
    var item;

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

    const idChangeHandler = (e) => {
        setId(e.target.value);
        if (!e.target.value) {
            setAlertId('아이디를 입력해주세요.');
        }  else {
            setAlertId('');
        } 
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
        if (!e.target.value) {
            setAlertPassword('비밀번호를 입력해주세요.');
        } else {
            setAlertPassword('');
        } 
    }

    const SignInHandler = (e) => {
        try {
            signInWithEmailAndPassword(auth, id, password);
            localStorage.setItem('key',id);
            item=localStorage.getItem('key');
            //setUser(item);
            //setUser(userData);
            //console.log("userData:"+ userData);
            setAlertSignIn('');
            navigate('/main');
        } catch (error) {
            console.error('Firebase 로그인 오류:', error);
            setAlertSignIn('아이디나 비밀번호가 올바르지 않습니다.');
        }
      };
    
    return (
        <div className="SignIn">
            <NavBar/>
            <div className='Sign-bg'>
                <div className='signIn-box'>
                    <div className='signIn-box-title'>SIGN IN</div>
                    <div className='signIn-box-alert'>{alertSignIn}</div>
                    <div className='signIn-box-id'>ID</div>
                    <input type='id' value={id} onChange={idChangeHandler} placeholder="  Enter your ID" className='signIn-box-id-input'></input>
                    <div className='signIn-box-id-alert'>{alertId}</div>
                    <div className='signIn-box-password'>PASSWORD</div>
                    <input type='password' value={password} onChange={passwordChangeHandler} placeholder="  Enter your Password" className='signIn-box-password-input'></input>
                    <div className='signIn-box-password-alert'>{alertPassword}</div>
                    <button type="button" onClick={SignInHandler} className='signIn-box-button'>SIGN IN</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;