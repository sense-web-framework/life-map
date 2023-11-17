import './App.css';
import './pages/NavBar.js';
import './css/Main.css';
import './css/SignIn.css';
import './css/SignUp.css';
import './css/MyPage.css';
import NavBar from './pages/NavBar.js';
import Main from './pages/Main.js';
import Question from './pages/Question.js';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';
import Footer from './pages/Footer.js';
import BucketList from './pages/BucketList.js';
import MyPage from './pages/MyPage.js';
import BucketCommunity from './pages/Bucket_Community.js';
import LoungeCommunity from './pages/Lounge_Community.js';
import TogetherCommunity from './pages/Together_Community.js';
import AddTogether from './pages/Add_Together.js'
import { BrowserRouter, Route, Routes} from "react-router-dom"
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

  return (
    <div className='Main'>
      <BrowserRouter>
        <NavBar/>
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
          <Route path="/community" element={<BucketCommunity/>}></Route>
          <Route path="/community/bucket_community" element={<BucketCommunity/>}></Route>
          <Route path="/community/lounge_community" element={<LoungeCommunity/>}></Route>
          <Route path="/community/together_community" element={<TogetherCommunity/>}></Route>
          <Route path="/community/together_community/add_Together" element={<AddTogether/>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;