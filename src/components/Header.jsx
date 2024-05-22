import { Banner, Button, Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import resume from '../assets/resume.pdf'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
function Header() {
  
  
  const [isOpen, setIsOpen] = useState(false)
  return (
    
    <Navbar  rounded className=' shadow-md overflow-auto bg-[#E0E8F6]' >
      <Navbar.Brand>
        <span className=' self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Harshil Patel</span>
      </Navbar.Brand>

      <div className="flex gap-4 md:order-2">
        <a href="#contact">
          <Button outline  >Contact</Button>
        </a>
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse>
        <Navbar.Link active href='#'>Home</Navbar.Link>
        <Navbar.Link href='#about'>About</Navbar.Link>
        <Navbar.Link href='#skill'>Skills</Navbar.Link>
        <Navbar.Link href='#project'>Projects</Navbar.Link>
        <Navbar.Link href={resume} download="Harshil Resume">Resume</Navbar.Link>
      </Navbar.Collapse>
    
    
    </Navbar>
    
    
  )
}

export default Header