import './App.css';
import './NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main.js';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

/*function App() {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path="/SignUp" component={SignUp} />
      </Routes>
    </BrowserRouter>
  );
}*/

export default App;
