import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar className="Navbar">
      <Container>
        <Navbar.Brand href="./Main.js" className='Lifemap'>
          <img src={require("./img/LIFEMAP.png")}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Question" className='Question'>
            <img src={require("./img/QUESTION.png")}></img>
            </Nav.Link>
            <Nav.Link href="#BucketList" className='Bucketlist'>
            <img src={require("./img/BUCKETLIST.png")}></img>
            </Nav.Link>
            <Nav.Link href="#Community" className='Community'>
            <img src={require("./img/COMMUNITY.png")}></img>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#SignIn" className='Signin'>
            <img src={require("./img/로그인.png")}></img>
            </Nav.Link>
            <Nav.Link href="/SignUp" className='Signup'>
            <img src={require("./img/회원가입.png")} ></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;