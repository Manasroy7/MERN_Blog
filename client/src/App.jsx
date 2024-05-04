import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter className='text-3xl text-red-500'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  )
}
