import React from 'react'

function Login() {

    function handleLogin(username, password) {
        fetch()
    }

    return (
        <div>
            <input placeholder='Username'></input>
            <input placeholder='Password' type={'password'}></input>
            <button>Login</button>
        </div>
    )
}

export default Login