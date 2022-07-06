

const handleClick = () => {
    let client_id = process.env.CLIENT_ID;
    let redirect_uri = process.env.REDIRECT_URI;
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