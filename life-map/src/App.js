import './App.css';
import './NavBar.js';
import Main from './Main.js';
import SignUp from './SignUp';
<<<<<<< Updated upstream
import { BrowserRouter, Route, Routes} from "react-router-dom"

/*function App() {
=======
import Community from './Community/Community_page';
function App() {
>>>>>>> Stashed changes
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
