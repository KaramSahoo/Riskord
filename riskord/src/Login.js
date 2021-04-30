import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
    }

    return (
        <div className="login">
            <div className="login__header">
                <h1>Welcome to Riskord</h1>
                <p>This is definitely not a Discord clone unless you actually find out!</p>
            </div>
            <div className="login__button">
                <Button onClick={signIn}>Sign IN</Button>
            </div>
        </div>
    )
}

export default Login
