
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home.tsx'
import About from './routes/About.tsx'
import Contact from './routes/Contact.tsx'
import Service from './routes/Service.tsx'

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
