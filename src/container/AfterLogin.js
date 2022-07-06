
import * as React from "react";
// import { useState } from "react";
import qs from 'qs';
import axios from "axios";

// 


const UserInfo = () => {



    // ==== Step 1: Get Code ==== //
    const queryParams = new URLSearchParams(window.location.search)
    //code 是一次性的！
    const code = queryParams.get("code")

    // ==== Step 2: Get Access Token === //
    const reqBody = {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.redirect_uri,
        client_id: process.env.client_id,
        client_secret: process.env.client_secret
    };
    const reqConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    axios
        .post(
          'https://api.line.me/oauth2/v2.1/token',
          qs.stringify(reqBody),
          reqConfig
        )
        .then((res) => {
        //   if (setPayload) setPayload(res.data);
        console.log(res.data);

        //   try {
        //     const decodedIdToken = jwt.verify(res.data.id_token, clientSecret, {
        //       algorithms: ['HS256'],
        //       audience: clientID.toString(),
        //       issuer: 'https://access.line.me',
        //       nonce: nonce
        //     });

        //     if (setIdToken) setIdToken(decodedIdToken);
        //   } catch (err) {
        //     // If token is invalid.
        //     console.log(err);
        //   }
        })
        .catch((err) => {
          console.log(err);
        });


    //get id token from code

    //get profile information from id token
  

    return (
        <>
            <h1>After LOGIN page</h1>
            <p>Code is {code}</p>
        </>
    )
}


export default UserInfo
