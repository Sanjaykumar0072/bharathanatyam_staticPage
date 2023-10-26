import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import '../src/assets/style/css/style.css';
import Home from './components/home';
import Playlist from './components/playlist';
import ContactUs from './components/contact';
import About from './components/about';
import Gallery from './components/gallery';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/playlist' element={<Playlist />}/>
          <Route path='/contact' element={<ContactUs />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
