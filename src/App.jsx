import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FooterSection from './components/FooterSection'
import { motion } from "framer-motion"


function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FooterSection />
    </React.Fragment>
  )
}

export default App