import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../firebase";


const auth = getAuth(app)

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(value => alert("Login successfully"))
            .catch(err => console.log(err))
    }

    return (
        <div className="signin-page">
            <h1>Sign in</h1>
            <label>Enter your email</label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="Enter your email address"
            />
            <label>Enter your password</label>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder="Enter your password"
            />
            <button onClick={signinUser}>Login</button>
        </div>
    )
}

export default Signin