import React from 'react'
import { Card } from 'flowbite-react'

function Cards({Cardicon, title, desc}) {
  return (
    <Card className=' shadow-lg hover:shadow-2xl max-w-sm'>
        <div className='flex items-center gap-4 text-2xl font-bold'>
            {Cardicon}
            <span className=''>{title}</span>
        </div>
        <p className='text-[#1C1E53] font-medium'>{desc}</p>
    </Card>
  )
}

export default Cards