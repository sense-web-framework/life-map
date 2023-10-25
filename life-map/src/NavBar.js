import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {
  
  return (
    <div className='Navbar'>
      <Link className="Lifemap" to={'/Main'}>
        <span className='Purple'>L</span>
        IFE
        <span className='Purple'>M</span>
        AP
        </Link>
      <Link className='Question' to={'/Question'}>QUESTION</Link>
      <Link className='Bucketlist' to={'/BucketList'}>BUCKETLIST</Link>
      <Link className='Community' to={'/Community'}>COMMUNITY</Link>
      <Link className='Signin' to={'/SignIn'}>
      <button type="button" class="btn btn-dark">SIGN IN</button>
      </Link>
      <Link className='Signup' to={'/SignUp'}>
      <button type="button" class="btn btn-dark">SIGN UP</button>
      </Link>
    </div>
  );
}

export default NavBar;