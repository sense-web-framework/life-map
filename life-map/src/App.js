import './App.css';
import './NavBar.js';
import Nav from './NavBar.js';
import Main from './Main.js';
import SignUp from './SignUp.js';
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
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/main" element={<Main/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
