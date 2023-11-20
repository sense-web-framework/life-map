import { useState } from 'react';
import '../css/NavBar.css';
import {Link} from 'react-router-dom';
import image from '../img/프로필.png';

function NavBar() {
  const item=localStorage.getItem("key");
  
  return (
    <div className='Navbar'>
      <Link className="Lifemap" to={'/main'}>
        <span className='Purple'>L</span>
        IFE
        <span className='Purple'>M</span>
        AP
        </Link>
      <Link className='Question' to={'/question'}>QUESTION</Link>
      <Link className='Bucketlist' to={'/bucket-list'}>BUCKETLIST</Link>
      <Link className='Community' to={'/community/bucket_community'}>COMMUNITY</Link>
      { item ? (
        <>
        <Link to={'/my-page'}>
          <img className='Mypage'src={image}></img>
        </Link>
        </>
      ) : (
        <>
        <Link to={'/sign-in'}>
          <button type="button" className="Signin">SIGN IN</button>
        </Link>
        <Link to={'/sign-up'}>
          <button type="button" className="Signup">SIGN UP</button>
        </Link>
        </>
      )}
    </div>
  );
}

export default NavBar;