import React from 'react'
import Home from './Pages/Home'
import LoginSignUp from './Pages/LoginSignUp'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<LoginSignUp showName={false} authName="Login" showForgotPassword={true} />} />
        <Route path='/signup' element={<LoginSignUp showName={true} authName="Signup" showForgotPassword={false} />} />
      </Routes>
    </HashRouter>
  )
}

export default App
