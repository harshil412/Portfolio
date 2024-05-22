import React from 'react'
import { Card } from 'flowbite-react'
import { BsArrowUpRight } from 'react-icons/bs'

function ProjectCard({title, link , desc}) {
  return (
    <Card className=' shadow-lg hover:shadow-2xl max-w-sm' >
          <h5 className='text-2xl font-bold text-[#484E53] dark:text-white'>{title}</h5>
          <div className=" flex items-center">
          <p>{desc}</p>
          <a href={link} target='_blank' className='text-xl bg-[#4FC3F7] '>
          <BsArrowUpRight />
          </a>
          </div>
        </Card>
  )
}

export default ProjectCard