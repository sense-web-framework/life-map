import Container from "react-bootstrap/esm/Container";
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavBar_Community.css';
function NavBar_Commnuity(){
    return(
        <Navbar className="NavBar_Commnunity">
            <ul class="navbar_nav">
            <li class="nav-item">
                <Navbar.Brand href="./Bucket_Community.js" className='Bucket_Community'>
                    버킷 리스트
                </Navbar.Brand>
                </li>
                <li class="nav-item">
                <Navbar.Brand href="./Bucket_Lounge.js" className='Bucket_Lounge'>
                    라운지
                </Navbar.Brand>
                </li>
                <li class="nav-item">
                <Navbar.Brand href="./Bucket_Together.js" className='Bucket_Together'>
                    함께해요
                </Navbar.Brand>
                </li>
            </ul>
        </Navbar>
    );
}
export default NavBar_Commnuity;