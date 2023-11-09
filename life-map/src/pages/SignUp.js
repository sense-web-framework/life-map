import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar.js';
import "firebase/auth"
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [alertId, setAlertId] = useState("");
    const [alertPassword, setAlertPassword] = useState("");
    const [okPassword, setOkPassword] = useState("");
    const [alertConfirmPassword, setAlertConfirmPassword] = useState("");
    const [okConfirmPassword, setOkConfirmPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [okId, setOkId] = useState("");
    const navigate = useNavigate();

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
            setOkId('');
        }  else {
            setAlertId('');
            setOkId('유효한 아이디입니다.');
        } 
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
        if (!e.target.value) {
            setAlertPassword('비밀번호를 입력해주세요.');
            setOkPassword('');
        } else if (e.target.value.length < 7 || !/^(?=.*[0-9])(?=.*[a-zA-Z])/.test(password)){
            setAlertPassword('비밀번호는 영어와 숫자를 섞어 7자리 이상이어야 합니다.');
            setOkPassword('');
        } else {
            setAlertPassword('');
            setOkPassword('유효한 비밀번호입니다.');
        } 
    }

    const confirmPasswordChangeHandler = (e) => {
        setConfirmPassword(e.target.value);
        if(!e.target.value){
            setAlertConfirmPassword('비밀번호를 다시 한 번 입력해주세요.');
            setOkConfirmPassword('');
        } else if(password !== e.target.value){
            setAlertConfirmPassword('비밀번호가 일치하지 않습니다.');
            setOkConfirmPassword('');
        } else if(e.target.value || password === e.target.value) {
            setAlertConfirmPassword('');
            setOkConfirmPassword('비밀번호가 일치합니다.');
        }  
    }

    const SignUpHandler = async() => {
        try{
            setAlert("");
            const createId=await createUserWithEmailAndPassword(auth, id, password);
            setId("");
            setPassword("");
            setConfirmPassword("");
            navigate("/sign-in");

        }catch(err){
            if(err.code==='auth/email-already-in-use'){
                setAlertId('이미 존재하는 계정입니다.');
                setOkId('');
            }else if(err.code==='auth/invalid-email'){
                setAlertId('잘못된 이메일 주소입니다.');
                setOkId('');
            }

            if(!id || !password || !confirmPassword){
                setAlert('모든 필드를 입력하세요.');
            } else {
                setAlert('');
            }
        }
    }

    return (
        <div className="SignUp">
            <NavBar/>
            <div className='Sign-bg'>
                <div className='signUp-box'>
                    <div className='signUp-box-title'>SIGN UP</div>
                    <div className='signUp-box-alert'>{alert}</div>
                    <div className='signUp-box-id'>ID</div>
                    <input type='text' placeholder="  Enter your ID" value={id} onChange={idChangeHandler} className='signUp-box-id-input'></input>
                    <div className='signUp-box-id-alert'>{alertId}</div>
                    <div className='signUp-box-id-ok'>{okId}</div>
                    <div className='signUp-box-password'>PASSWORD</div>
                    <input type='password' placeholder="  Enter your Password" value={password} onChange={passwordChangeHandler} className='signUp-box-password-input'></input>
                    <div className='signUp-box-password-alert'>{alertPassword}</div>
                    <div className='signUp-box-password-ok'>{okPassword}</div>
                    <div className='signUp-box-confirm'>CONFIRM PASSWORD</div>
                    <input type='password' placeholder="  Check your Password" value={confirmPassword} onChange={confirmPasswordChangeHandler} className='signUp-box-confirm-input'></input>
                    <div className='signUp-box-confirm-alert'>{alertConfirmPassword}</div>
                    <div className='signUp-box-confirm-ok'>{okConfirmPassword}</div>
                    <button type="button" onClick={SignUpHandler} className='signUp-box-button'>CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;