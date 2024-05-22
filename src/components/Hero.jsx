import React from 'react'
import Profile from '../assets/me.jpg'
import { Button } from 'flowbite-react'
import { motion } from "framer-motion"
import backgroung from '../assets/bg.jpg'

function Hero() {

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ ease:"easeIn", duration: 1}}>
    <main className="max-w-5xl h-auto mt-24  mx-auto mb-36 bg-[url(../assets/bg.jpg)]">
        <div className='flex flex-col  items-center justify-center m-4'>
            <img className=' w-60 h-60 rounded-full' src={Profile} alt="Profile" />
        


            <h2 className=' mt-4 text-3xl font-bold text-[#484E53]'>Harshil Patel</h2>
        
            <h3 className='m-2 text-2xl font-semibold bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent '>Full Stack Developer</h3>
            <p className=' text-[#484E53] my-2 mx-4 text-center'>Hello! I am a proficient MERN stack developer with expertise in MongoDB, Express.js, React, TailwindCSS and Node.js. I specialize in creating dynamic, responsive web applications and am dedicated to delivering high-quality, scalable solutions. Let's connect to bring innovative digital projects to life!</p>
            <a href="#contact">
              <Button className='mt-5' pill outline>Contact Me</Button>
            </a>
        </div>
    </main>
    </motion.div>
  )
}

export default Hero