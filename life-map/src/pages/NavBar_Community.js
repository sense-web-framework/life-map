import Container from "react-bootstrap/esm/Container";
import {Link} from 'react-router-dom';
import '../css/NavBar_Community.css';
function NavBar_Commnuity(){
    return(
        <div className="NavBar_Commnunity">
            <div class="navbar_nav">
                <Link className='nav_Bucket_Community' to={'/community/bucket_community'}>버킷리스트</Link>
                <Link className='nav_Lounge_Community' to={'/community/lounge_community'}>라운지</Link>
                <Link className='nav_Together_Community' to={'/community/together_community'}>함께해요</Link>
            </div>
        </div>
    );
}
export default NavBar_Commnuity;