import React from 'react'
import Home from './Pages/Home'
import LoginSignUp from './Pages/LoginSignUp'
import { HashRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route index path='/' element={<LoginSignUp showName={false} authName="Login" showForgotPassword={true} />} />
        <Route path='/signup' element={<LoginSignUp showName={true} authName="Signup" showForgotPassword={false} />} />
      </Routes>
    </HashRouter>
  )
}

export default App
