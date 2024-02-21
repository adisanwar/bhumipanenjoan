// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Navbar from "./components/Navbar.tsx"
// import Contact from './routes/Contact.tsx'
import Home from './routes/Home.tsx'
import About from './routes/About.tsx'
import Contact from './routes/Contact.tsx'
import Service from './routes/Service.tsx'
// import { Routes } from 'react-router'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      </Routes>
        {/* <Navbar/> */}
        
        {/* <Contact/> */}
    </div>
  )
}

export default App
