import NavBar from './NavBar.js';

function SignUp(){
    return (
        <div className="SignUp">
            <NavBar/>
            <div className='Sign-bg'>
                <div className='signUp-box'>
                    <div className='signUp-box-title'>SIGN UP</div>
                    <div className='signUp-box-id'>ID</div>
                    <input type='text' className='signUp-box-id-input'></input>
                    <div className='signUp-box-password'>PASSWORD</div>
                    <input type='text' className='signUp-box-password-input'></input>
                    <div className='signUp-box-confirm'>CONFIRM PASSWORD</div>
                    <input type='text' className='signUp-box-confirm-input'></input>
                    <button type="button" className='signUp-box-button'>CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;