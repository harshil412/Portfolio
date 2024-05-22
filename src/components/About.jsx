import { Button } from 'flowbite-react'
import React from 'react'
import resume from '../assets/resume.pdf'

function About() {
  return (
    <section id='about' className=' max-w-5xl h-auto mx-auto mt-10 mb-32'>
        <div className='flex flex-col gap-2 items-center  p-4 m-4'>

        <h1 className='text-[#2B2B2B] font-bold text-3xl'>About Me</h1>
        <span className='text-sm bg-gradient-to-r from-[#4FC3F7] to-[#050505] bg-clip-text text-transparent font-semibold mb-2'>Get to know me</span>
        <p className='text-[#1C1E53] my-2 text-center'>Hello! I'm Harshil Patel, a passionate MERN stack developer with a knack for crafting dynamic and responsive web applications. My expertise lies in MongoDB, Express.js, React, TailwindCSS and Node.js, which enables me to build full-stack solutions that are both efficient and scalable.</p>
        <p className='text-[#1C1E53] my-2 text-center'>With a strong focus on creating seamless user experiences and robust backend systems, I am committed to delivering top-notch software solutions. I stay updated with the latest trends and technologies to ensure my work is innovative and effective.</p>
        <p className='text-[#1C1E53] my-2 text-center'>When I'm not coding, I enjoy exploring new technologies, try to contributing to open-source projects, and engaging with the developer community. Let's connect and transform ideas into impactful digital experiences!</p>
        <a href={resume} download='Harshil Resume' ><Button outline pill className='my-4'>Download Resume</Button></a>
        </div>
    </section>
  )
}

export default About