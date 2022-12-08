import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
               <Route path='/' element={<LoginForm/>}></Route> 
               <Route path='/home' element={<Home/>}></Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter