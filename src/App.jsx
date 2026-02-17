import { useState } from 'react'
import './App.css'
import Navbar from './components/appNavbar.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/login.jsx'
import Recipe from './pages/recipes.jsx'
import RegisterPage from './pages/register.jsx';
import AddRecipe from './pages/addRecipe.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={< Login/>} />
          <Route path="/recipes/:id" element={< Recipe/>} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/addrecipe' element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
