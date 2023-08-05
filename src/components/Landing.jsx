import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Product from './Product'

const Landing = () => {
  return (
    <BrowserRouter>
        <Nav/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Landing