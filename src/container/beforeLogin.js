

const handleClick = () => {
    let client_id = '1657280234';
    let redirect_uri = 'https://piedasing.github.io/line-service-demo/';
    let link = 'https://access.line.me/oauth2/v2.1/authorize?';
    link += 'response_type=code';
    link += '&client_id=' + client_id;
    link += '&redirect_uri=' + redirect_uri;
    link += '&state=login';
    link += '&scope=openid%20profile';
    window.location.href = link;
}


const Login = () => {
    return (
        <>
            <h1>Before LOGIN page</h1>
            <button
                onClick={handleClick}
            >Click here to login</button>
        </>
    )
}


export default Login


// let client_id = '1653311283';
//                 let redirect_uri = 'https://piedasing.github.io/line-service-demo/';
//                 let link = 'https://access.line.me/oauth2/v2.1/authorize?';
//                 link += 'response_type=code';
//                 link += '&client_id=' + client_id;
//                 link += '&redirect_uri=' + redirect_uri;
//                 link += '&state=login';
//                 link += '&scope=openid%20profile';
//                 window.location.href = link;