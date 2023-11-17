import { useState } from 'react';
import '../css/NavBar.css';
import {Link} from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function NavBar({user}) {
  console.log('User in NavBar:', user);

  const SignOut = async () => {
    try {
      const auth = getAuth();
      console.log("before:"+user);
      await signOut(auth);
      console.log("before2:"+auth);
      user=null;
      console.log("after:"+user);
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
      <Link className='Community' to={'/community/bucket_community'}>COMMUNITY</Link>
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