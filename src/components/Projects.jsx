import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id='project' className=' max-w-5xl mx-auto flex flex-col gap-3 items-center mt-32 '>
      <div className="flex flex-col items-center">
        <h2 className='text-[#484E53] text-2xl font-bold'>Projects</h2>
        <span className=' bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent text-sm'>Some of my Works</span>
      </div>
      <div className='flex flex-col gap-2 mt-10 sm:flex sm:flex-row sm:gap-3'>
        <ProjectCard title='Book Store' desc='The Book Store is a dynamic web application built using the MERN stack (MongoDB, Express.js, React, Node.js) and TailwindCSS. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The application features an intuitive user interface for browsing, adding, updating, and deleting book records, ensuring a seamless and efficient user experience.' link="https://github.com/harshil412/BookStore" />
        <ProjectCard title='MERN Blog' desc='MERN Blog is a full-featured web application developed using the MERN stack (MongoDB, Express.js, React, Node.js) and TailwindCSS. It includes sign-in and sign-out pages with robust authentication. Users can create, like, and comment on posts, fostering interactive engagement. Additionally, the project features an admin panel for managing content and users, ensuring smooth operation and control. The application combines a seamless user experience with a powerful backend, showcasing comprehensive CRUD operations and user interaction capabilities.

' link='https://github.com/harshil412/mern-blog' />
      </div>
    </section>
  )
}

export default Projects