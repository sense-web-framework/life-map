import { useState } from 'react';
import NavBar from './NavBar.js';
import image from '../img/프로필.png';

function MyPage(){

    const [nickname, setNickName] = useState("");
    const [status, setStatus] = useState("");

    const nicknameChangeHandler = (e) => {
        setNickName(e.target.value);
    }

    const statusChangeHandler = (e) => {
        setStatus(e.target.value);
    }

    const SubmitHandler = (e) => {
        try {

        } catch (error) {
        
        }
      };

    return (
        <div className="MyPage">
            <NavBar/>
            <div className='myPage-bg'>
                <div className='myPage-box'>
                    <div className='myPage-box-title'>MY PAGE</div>
                    <div className='myPage-box-image'><img src={image}></img></div>
                    <div className='myPage-box-nickname'>NICKNAME</div>
                    <input type='text' value={nickname} onChange={nicknameChangeHandler} placeholder="  YOUR NICKNAME" className='myPage-box-nickname-input'></input>
                    <div className='myPage-box-status'>STATUS MESSAGE</div>
                    <input type='text' value={status} onChange={statusChangeHandler} placeholder="  Enter your status message" className='myPage-box-status-input'></input>
                    <button type="button" onClick={SubmitHandler} className='myPage-box-button'>SUBMIT</button>
                </div>
            </div>
        </div>
    );
}

export default MyPage;