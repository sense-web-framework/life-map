import '../css/NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {
  
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
      <Link to={'/sign-in'}>
      <button type="button" className="Signin">SIGN IN</button>
      </Link>
      <Link to={'/sign-up'}>
      <button type="button" className="Signup">SIGN UP</button>
      </Link>
    </div>
  );
}

export default NavBar;