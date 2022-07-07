
import * as React from "react";
import { useState, useEffect } from "react";
import qs from 'qs';
import axios from "axios";


// 


const UserInfo = () => {

    // ===== useState Variable ==== //
    const [idToken, setIdToken] = useState(null);

    const getToken = () => {
      // ==== Step 1: Get Code ==== //
      const queryParams = new URLSearchParams(window.location.search)
      const code = queryParams.get("code") //code can only be used one time

    // ==== Step 2: Get Access Token === //
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

  axios.post(
        'https://api.line.me/oauth2/v2.1/token',
        qs.stringify(reqBody),
        reqConfig
      )
      .then((res) => {
        try {
          setIdToken(res.data.id_token);
          console.log(idToken);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }

    useEffect(() => {
      getToken();
    }, [])


  

    return (
        <>
            <h1>After LOGIN page</h1>
        </>
    )
}


export default UserInfo
