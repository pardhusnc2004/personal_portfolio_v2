import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer className="mt-auto" />
    </div>
  )
}

export default App