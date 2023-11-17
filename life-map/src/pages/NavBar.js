import { useState } from 'react';
import '../css/NavBar.css';
import {Link} from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function NavBar() {
  const item=localStorage.getItem("key");

  async function SignOut() {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.removeItem('key');
      window.location.replace('/main');
    }
     catch (error) {
      console.error('로그아웃 실패: ', error);
    }
  }
  
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
          <button type="button" className='Mypage'>MY PAGE</button>
        </Link>
        <button type="button" className='SignOut' onClick={SignOut}>SIGN OUT</button>
        </>
        // <>
        // <Link to={'/sign-in'}>
        //   <button type="button" className="Signin">SIGN IN</button>
        // </Link>
        // <Link to={'/sign-up'}>
        //   <button type="button" className="Signup">SIGN UP</button>
        // </Link>
        // </>
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