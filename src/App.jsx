import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <>
    <Header />
    <Home/>
    <About />
    <Services/>
    <Projects />
    <Contact />
    </>
  )
}

export default App
