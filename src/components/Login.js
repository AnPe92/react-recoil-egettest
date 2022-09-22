import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')



    async function handleLogin() {
        console.log(username)
        console.log(typeof password)

        let response = await fetch('http://localhost:8123/login/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
        });
        return response.json();

        // let response = await fetch('http://localhost:8123/login/user', {
        //     method: 'PUT',
        //     Headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(body)
        // })

        // console.log(response)
    }

    return (
        <div>
            <input placeholder='Username' onChange={event => setUsername(event.target.value)}></input>
            <input placeholder='Password' type={'password'} onChange={event => setPassword(event.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login