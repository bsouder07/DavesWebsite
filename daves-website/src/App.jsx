import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Services, Contact,Portfolio } from './pages'
import Navbar from './components/Navbar'


function App() {

  return (
    <main className="bg-slate-300/20">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </main>
  )
}

export default App
