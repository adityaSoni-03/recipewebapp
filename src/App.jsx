import { useState } from 'react'
import './App.css'
import Navbar from './components/appNavbar.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/login.jsx'
import Recipe from './pages/recipes.jsx'

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
          <Route path="/recipe/:id" element={< Recipe/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
