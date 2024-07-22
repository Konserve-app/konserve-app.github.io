import React from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'

const Heropage = () => {
  return (
    <div className='mx-10 md:mx-44'>
        <div className='text-center mt-24'>
            <h1 className='font-bold text-[32px]'>Reduce, Reuse, <span className='text-[#006225]'>Konserve.</span></h1>
            <p className='font-medium text-[24px]'>Get paid for your Plastics, Bottles and Metals</p>
        </div>
        <div className='flex mt-5 gap-10 justify-center'>
        <div className='rounded'>
        <img src={image1} alt="img" className=" w-80" />
        </div>
        <div className='rounded'>
        <img src={image2} alt="img" className=" w-80" />
        </div>
        
        </div>
        

    </div>
  )
}

export default Heropage
