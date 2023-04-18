import React from 'react';
import { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Routing/Home';
import Contact from './Routing/Contact';
import About from './Routing/About';
import Navbar from './Routing/Navbar';
import Profile from './Routing/Profile';
import './index.css';
import Protected from './Routing/Protected';
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
  setisLoggedIn(true);
  };
  const logOut = () => {
  setisLoggedIn(false);
  };
  return (
     <>
     

     
      <BrowserRouter>
      <Navbar/>
      {isLoggedIn ? (<button onClick={logOut}>Logout</button>):(<button onClick={logIn}>Login</button>)}
         <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Profile' element={<Protected isLoggedIn={isLoggedIn}> <Profile/> </Protected>}/>
          </Routes>
       </BrowserRouter>
     </>
  );
}
export default App;