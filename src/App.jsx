import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { HashRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
