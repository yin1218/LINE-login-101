// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {useState} from 'react'

import Login from './container/beforeLogin';
import UserInfo from './container/AfterLogin';
function App() {


  // const [isLogin, setIsLogin] = useState(false); //目的：檢測目前是否登入

  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/callback' element={<UserInfo/>}></Route>

      </Routes>
    </BrowserRouter>

  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>Demo of LINE LOGIN</h1>
  //       <button onClick={(()=>{
  //       // 注意這邊導向的Client 以及url須在官方設定
  //       // 因為token要在後端處理會比較好所以callback_url我是給後端的並非前端喔
  //         window.location.replace("https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=請輸入你的ID&redirect_uri=http://localhost:3001/line/token&state=12345abcde&scope=openid%20profile&nonce=09876xyz") ;
  //       }) }>
  //           <h3>test</h3>
  //         </button>
  //     </header>
  //   </div>
  // );
}

export default App;
