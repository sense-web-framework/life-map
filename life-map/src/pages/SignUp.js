import { useState } from 'react';
import NavBar from './NavBar.js';

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

    const SignUpHandler = () => {
        if(!id || !password || !confirmPassword){
            setAlert('모든 필드를 입력하세요.');
        } else {
            setAlert('');
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
                    <input type='text' placeholder="  Enter yout ID"value={id} className='signUp-box-id-input'></input>
                    <div className='signUp-box-id-alert'>{alertId}</div>
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