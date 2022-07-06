// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
require('dotenv').config()


// import {useState} from 'react'

import Login from './container/beforeLogin';
import UserInfo from './container/AfterLogin';
function App() {

  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/callback' element={<UserInfo/>}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App;
