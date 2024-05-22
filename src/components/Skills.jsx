
import React from 'react'
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
import Cards from './Cards'
import { icon, title } from '../utils/user'


function Skills() {
  return (
    <section id='skill' className=' p-4 max-w-5xl mx-auto mt-10 flex flex-col items-center gap-2'>
        <div className='flex flex-col gap-2 mb-10 items-center '>
            <h1 className='text-[#484E53] text-3xl font-bold'>What I do</h1>
            <span className=' bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent'>My Skill</span>
        </div>
        <div className=' grid grid-cols-2 gap-2 md:grid-cols-3'>
            <Cards Cardicon={<FaHtml5 />} title="HTML" desc='Markup language for creating web pages' />
            <Cards Cardicon={<FaCss3 />} title="CSS" desc='Styling language for web pages' />
            <Cards Cardicon={<RiTailwindCssFill />} title="Tailwind CSS" desc='Utility-first CSS framework for building responsive web designs' />
            <Cards Cardicon={<IoLogoJavascript />} title="Javascript" desc='Programming language for web development' />
            <Cards Cardicon={<FaReact />} title="React" desc='JavaScript library for building user interfaces' />
            <Cards Cardicon={<SiExpress />} title="Express" desc='Javascript Framework' />
            <Cards Cardicon={<FaNodeJs />} title="NodeJS" desc='JavaScript runtime for server-side development' />
            <Cards Cardicon={<SiMongodb />} title="MongoDB" desc='No SQL Database' />
        </div>
    </section>
  )
}

export default Skills