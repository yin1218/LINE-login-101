
import * as React from "react";
import { useState, useEffect } from "react";
import qs from 'qs';
import axios from "axios";
import styled from 'styled-components';


const Photo = styled.img`
  border-radius: 50%;
`


const UserInfo = () => {

  // ===== useState Variable ==== //
  // const [idToken, setIdToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [userName, setUserName] = useState('');
  const [picUri, setPicUri] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [userId, setUserId] = useState(null);
  const [getData, setGetData] = useState(false)

  const getToken = async () => {
      // ==== Step 1: Get Code ==== //
      const queryParams = new URLSearchParams(window.location.search)
      const code = queryParams.get("code") //code can only be used one time

      console.log("code = ", code)

    // ==== Step 2: Get Access Token from Code === //
  const reqBody = {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET
  };
  const reqConfig = {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  }

  await axios.post(
        'https://api.line.me/oauth2/v2.1/token',
        qs.stringify(reqBody),
        reqConfig
      )
      .then((res) => {
        try {
          setAccessToken(res.data.access_token);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getUserInfo = async () => {

    console.log(accessToken)
    const reqConfig = {
      headers: {
          'Authorization': "Bearer " + accessToken
      }
    }
    await axios.get(
      'https://api.line.me/v2/profile',
      reqConfig)
    .then((res) => {
      console.log(res)
      setUserName(res.data.displayName);
      setPicUri(res.data.pictureUrl);
      setStatusMsg(res.data.statusMessage);
      setUserId(res.data.userId);
      setGetData(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  

  useEffect(() => {
    getToken();
    console.log("finish using useEffect");
    // getUserInfo();
  }, [])


  

  return (
      <>
          <h1>After LOGIN page</h1>
          {
            getData
            ?
            <>
              <Photo
                src={picUri} 
                alt="profile picture"          
              >
              </Photo>
              <h2> {userName}</h2>
              <p> {statusMsg}</p>
            </>
            :
            <button onClick={getUserInfo}>Click to get user Information</button>
          }
      </>
  )
}


export default UserInfo
