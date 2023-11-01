import './NavBar.css';
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
      <Link className='Bucketlist' to={'/bucketList'}>BUCKETLIST</Link>
      <Link className='Community' to={'/community'}>COMMUNITY</Link>
      <Link className='Signin' to={'/sign-in'}>
      <button type="button" class="btn btn-dark">SIGN IN</button>
      </Link>
      <Link className='Signup' to={'/sign-up'}>
      <button type="button" class="btn btn-dark">SIGN UP</button>
      </Link>
    </div>
  );
}

export default NavBar;