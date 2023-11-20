import '../css/NavBar.css';
import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import image from '../img/프로필.png';

function NavBar() {
  const [selectedTab, setSelectedTab] = useState('main');
  const location = useLocation();
  const item=localStorage.getItem("key");
  
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.startsWith('/question')) {
      setSelectedTab('question');
    } else if (currentPath.startsWith('/bucket-list')) {
      setSelectedTab('bucket-list');
    } else if (currentPath.startsWith('/community')) {
      setSelectedTab('community');
    }
  
  }, [location.pathname]);

  return (
    <div className='Navbar'>
      <Link className="Lifemap" to={'/main'}>
        <span className='Purple'>L</span>
        IFE
        <span className='Purple'>M</span>
        AP
        </Link>
      <Link className={`Question ${selectedTab === 'question' ? 'selected' : ''}`} to={'/question'} onClick={() => handleTabClick('question')}>QUESTION</Link>
      <Link className={`Bucketlist ${selectedTab === 'bucket-list' ? 'selected' : ''}`} to={'/bucket-list'} onClick={() => handleTabClick('bucket-list')}>BUCKETLIST</Link>
      <Link className={`Community ${selectedTab === 'community' ? 'selected' : ''}`} to={'/community/bucket_community'} onClick={() => handleTabClick('community')}>COMMUNITY</Link>
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