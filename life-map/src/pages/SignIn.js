import NavBar from './NavBar.js';

function SignIn(){
    return (
        <div className="SignIn">
            <NavBar/>
            <div className='Sign-bg'>
                <div className='signIn-box'>
                    <div className='signIn-box-title'>SIGN IN</div>
                    <div className='signIn-box-id'>ID</div>
                    <input type='text' className='signIn-box-id-input'></input>
                    <div className='signIn-box-password'>PASSWORD</div>
                    <input type='text' className='signIn-box-password-input'></input>
                    <button type="button" className='signIn-box-button'>SIGN IN</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;