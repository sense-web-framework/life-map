import './App.css';
import './pages/NavBar.js';
import './css/Main.css';
import './css/SignIn.css';
import './css/SignUp.css';
import NavBar from './pages/NavBar.js';
import Main from './pages/Main.js';
import Question from './pages/Question.js';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';
import Footer from './pages/Footer.js';
import BucketList from './pages/BucketList.js';
import MyPage from './pages/MyPage.js';
import Bucket_Community from './pages/Bucket_Community.js';
import Lounge_Community from './pages/Lounge_Community.js';
import Together_Community from './pages/Together_Community.js';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Community_page from './pages/Community_page';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

/*function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}*/

function App() {

  const [user, setUser] = useState("");

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='Main'>
      <BrowserRouter>
        <NavBar user={user}/>
        <div className='Body'>
          <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/question" element={<Question/>}></Route>
          <Route path="/bucket-list" element={<BucketList/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}>
          </Route>
          <Route path="/my-page" element={<MyPage/>}/>
          <Route path="/community" element={<Bucket_Community></Bucket_Community>}></Route>
          <Route path="/community/bucket_community" element={<Bucket_Community></Bucket_Community>}></Route>
          <Route path="/community/lounge_community" element={<Lounge_Community></Lounge_Community>}></Route>
          <Route path="/community/together_community" element={<Together_Community></Together_Community>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;