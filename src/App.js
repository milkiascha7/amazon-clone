import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom'
import Checkout from './components/Checkout'
import LoginPage from './components/LoginPage'
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider'

const App = () => {

    const [{ }, dispatch] = useStateValue()
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('the user is ', authUser)
            if (authUser) {
                // user is logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])
    return (
        <Router>
            <div className='app'>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/checkout" element={<><Header /> <Checkout /></>} />
                    <Route exact path="/" element={<> <Header /> <Home /></>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
