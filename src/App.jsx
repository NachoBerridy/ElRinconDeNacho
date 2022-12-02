import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import SideBar from './Components/Organisms/SideBar/SideBar'
import LanguageButton from './Components/Atoms/Buttons/Language/LanguageButton'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App absolute top-0 left-0 w-screen h-screen grid grid-cols-12 grid-rows-6">
      <div className="row-span-full col-span-2 relative col-start-0 bg-sideBg">
        <SideBar />
      </div>
      <div className="fixed top-4 right-4">
        <LanguageButton />
      </div>
      <div className='col-start-3 h-full row-span-full col-span-full '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
