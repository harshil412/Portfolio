import { Button, Footer } from 'flowbite-react'
import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

function FooterSection() {
  return (
    <Footer className='bg-[#E0E8F6] mt-20' container>
        <div className=' w-full'>
            <div className=' flex justify-between items-center '>
                <div className='text-4xl text-[#282938]'>Let's
                Work Together</div>
                <div className="flex flex-wrap gap-2">

                {/* <Button outline pill > <BiLogoGmail className=' bg-transparent hover:bg-white mr-2 h-5 w-5' /> harshilj.patel65@gmail.com </Button> */}
                </div>
            </div>
            <Footer.Divider />
            <div className=" w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright by='Harshil Patel' year={new Date().getFullYear()} />
            <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                <Footer.Icon href='https://www.instagram.com/harshilpatel_12/' target='_blank' icon={BsInstagram} />
                <Footer.Icon href='https://github.com/harshil412' target='_blank' icon={BsGithub} />
                <Footer.Icon href='https://www.linkedin.com/in/harshil-patel-21a669226/' target='_blank' icon={BsLinkedin} />
            </div>
            </div>
        </div>

    </Footer>
  )
}

export default FooterSection