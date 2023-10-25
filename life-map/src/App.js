import './App.css';
import './NavBar.js';
import Main from './Main.js';
import SignUp from './SignUp';
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
      <Main />
      <Routes>
      <Route path="/Main" element={<Main/>}></Route>
    
      <Route path="/SignUp" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
