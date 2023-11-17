import { useState } from 'react';
import '../css/NavBar.css';
import {Link} from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function NavBar({user}) {
  console.log('User in NavBar:', user);

  const SignOut = async () => {
    const auth = getAuth();

    try {
      const user = await signOut(auth);
      user=user;
    } catch (error) {
      console.error('로그아웃 실패: ', error);
    }
  };
  
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
      <Link className='Community' to={'/community'}>COMMUNITY</Link>
      { {user} ? (
        // <>
        // <Link to={'/my-page'}>
        //   <button type="button" className='MyPage'>My Page</button>
        // </Link>
        // <button type="button" className='SignOut' onClick={SignOut}>Sign Out</button>
        // </>
        <>
        <Link to={'/sign-in'}>
          <button type="button" className="Signin">SIGN IN</button>
        </Link>
        <Link to={'/sign-up'}>
          <button type="button" className="Signup">SIGN UP</button>
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