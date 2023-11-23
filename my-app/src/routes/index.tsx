import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Categories from '../pages/Categories'
import Register from '../pages/Register'
import OneCategory from '../pages/OneCategory'



const index = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/regiter" element={<Register />} />
        <Route path="/OneCategory/:id" element={<OneCategory />} />
      </Routes>
    </div>
  )
}

export default index
