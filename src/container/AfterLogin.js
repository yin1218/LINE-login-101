
import * as React from "react";
import { useSearchParams } from "react-router-dom";



const UserInfo = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    // let params = serializeFormQuery(event.target);
    // setSearchParams(params);
    const queryParams = new URLSearchParams(window.location.search)
    const term = queryParams.get("code")
  

    return (
        <>
            <h1>After LOGIN page</h1>
            <p>Code is {term}</p>
            {/* <button
                onClick={handleClick}
            >Click here to login</button> */}
        </>
    )
}


export default UserInfo
