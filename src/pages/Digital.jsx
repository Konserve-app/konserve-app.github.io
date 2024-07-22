import React from 'react'

import image3 from '../assets/images/image3.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Learnmore from '../components/Learnmore.jsx'
import Button from '../components/Button.jsx'

const Digital = () => {
  return (
    <div>
        <Navbar />
       <div className='mx-56 mt-10 border-2 rounded'> 
       <div className='text-center text-white bg-[#006225] rounded '>
              <h1 className='text-[20px]'>About Us</h1>   
        </div>
            <div className='flex w-[700px] h-[350px] gap-10 mx-[56px] pt-10'>
                <div className='w-[700px] h-[300px] rounded'>
                <div className='rounded'>
                    <img src={image3} alt="img"  />
                    </div>
                </div>
                <div className='h-[200px] w-[700px]'>
                    

                    <h1 className='text-[32px] font-bold'>We're a digital marketplace</h1>
                    <p className='font-medium'>
                        Konserve is dedicated to achieving waste scarcity through getting 
                        waste from users  and selling to Recycling Industries.Konserve, you can earn rewards from your recyclable 
                        waste while contributing to a cleaner environment, 
                        all from the comfort of your home.
                    </p>
                    <Button>Learn More</Button>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Digital
