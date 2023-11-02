import './App.css';
import './pages/NavBar.js';
import './css/Main.css';
import './css/SignIn.css';
import './css/SignUp.css';
import Nav from './pages/NavBar.js';
import Main from './pages/Main.js';
import Question from './pages/Question.js';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';
import Footer from './pages/Footer.js';
import BucketList from './pages/BucketList.js';
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
          <Route path="/bucket-list" element={<BucketList/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
