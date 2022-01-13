import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/LoginPage.css'
import { auth } from '../firebase'

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(
            (auth) => {
                console.log(auth)
                if (auth) {
                    navigate('/')
                }
            }
        ).catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then(
            (auth) => {
                // console.log(auth)
                if (auth) {
                    navigate('/')
                }
            }
        ).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} className='login__signInButton' type='submit'>Sign in</button>
                </form>
                <p>By signing-in you agree to Amazon clone conditions and terms
                    and of use and sale, our cookies notice and our interest-based ads notice
                </p>
                <button onClick={register} className='login__registerButton' type="submit">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default LoginPage
