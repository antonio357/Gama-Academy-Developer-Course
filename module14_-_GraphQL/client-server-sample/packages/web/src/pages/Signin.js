import React, { useState } from 'react'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:8000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, 
                password
            })
        }).then((response) => {response.json()}).then((data) => {console.log(`success ${data}`)})
    }
    const handleEmail = (event) => setEmail(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input id="email" value={email} type="email" inputMode="email" autoComplete="username" onChange={handleEmail} />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input id="password" value={password} type="password" autoComplete="current-password" onChange={handlePassword} />
            </fieldset>
            <button type="submit">Sign-in</button>
        </form>
    )
}
    
