
import * as React from "react";


// 


const UserInfo = () => {


    // ==== Step 1: Get Code ==== //
    const queryParams = new URLSearchParams(window.location.search)
    //code 是一次性的！
    const code = queryParams.get("code")

    // ==== Step 2: Get Access Token === //
    // const reqBody = {
    //     grant_type: 'authorization_code',
    //     code: code,
    //     redirect_uri: process.env.REDIRECT_URI,
    //     client_id: clientID,
    //     client_secret: clientSecret
    // };
    // const reqConfig = {
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // }


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
