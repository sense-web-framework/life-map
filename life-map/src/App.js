import './App.css';
import './NavBar.js';
import Nav from './NavBar.js';
import Main from './Main.js';
import Question from './pages/Question.js';
import SignUp from './SignUp.js';
import Footer from './pages/Footer.js';
import { BrowserRouter, Route, Routes} from "react-router-dom"

/*function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}*/

function App() {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Nav />
        <div className='Body'>
          <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/question" element={<Question/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
