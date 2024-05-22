import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import React from 'react'

function Contact() {
  return (
    <section id='contact' className='  flex flex-col gap-3 items-center max-w-5xl mx-auto mt-40'>
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl text-[#282938] font-bold'>Get In Touch</h2>
            <span className=' bg-gradient-to-r from-[#4FC3F7] to-[#282938] bg-clip-text text-transparent text-sm'>Lets work Together</span>
        </div>
        <div className=' min-w-96'>
            <form action='mailto:harshilj.patel65@gmail.com' method='post' encType='text/plain' className=' flex flex-col gap-4'>
                <div>
                    <Label className='mb-2 block' value='Name' />
                    <TextInput id='Name' type='text' placeholder='Full Name' required />
                </div>
                <div>
                    <Label className='mb-2 block' value='Email' />
                    <TextInput id='email' type='email' placeholder='abc@gmail.com' required />
                </div>
                <div>
                    <Label className='mb-2 block' value='Service' />
                    <TextInput id='service' type='text' placeholder='Service' required />
                </div>
                <div>
                    <Label className='mb-2 block' value='Message' />
                    <Textarea id='message' rows={4} required />
                </div>
                <Button type='submit' outline pill>Get in Touch</Button>
            </form>
        </div>
        
    </section>
  )
}

export default Contact