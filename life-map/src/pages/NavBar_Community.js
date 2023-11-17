import { Link, useLocation } from 'react-router-dom';
import '../css/NavBar_Community.css';

function NavBar_Community() {
  const location = useLocation();

  // 현재 URL이 링크의 to 속성과 일치하는지 확인하여 클래스를 동적으로 지정
  const getLinkClass = (tab) => {
    return `nav_${tab}_Community ${location.pathname === `/community/${tab.toLowerCase()}_community` ? 'click' : ''}`;
  };

  return (
    <div className="NavBar_Commnunity">
      <div className="navbar_nav">
        <Link className={getLinkClass('Bucket')} to={'/community/bucket_community'}>
          <span>버킷리스트</span>
        </Link>
        <Link className={getLinkClass('Lounge')} to={'/community/lounge_community'}>
          <span>라운지</span>
        </Link>
        <Link className={getLinkClass('Together')} to={'/community/together_community'}>
          <span>함께해요</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar_Community;
