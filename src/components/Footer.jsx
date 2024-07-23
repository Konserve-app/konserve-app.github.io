import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='mx-10 md:mx-44 mt-5'>
            <div className='w-auto h-auto md:w-[1000px] bg-[#006225]'>
                <div className='mx-10'>
                    <div className='flex space-x-[-10] text-sm md:flex ml-10 gap-32 text-white px-20'>
                        <div className=''>
                            <h1 className=' md:pt-10 pb-5'>Company</h1>
                            <ul className=''>
                                <li>About Us</li>
                                <li>FAQs</li>
                                <li>Reviews</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h1 className=' md:pt-10 pb-5 font-bold'>Legal</h1>
                            <ul className=''>
                                <li>Cookie Policy</li>
                                <li>End User License Agreement</li>
                                <li>Privacy Policy </li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>
                       
                            <div>
                            <h1 className='md:pt-10 pb-5 font-bold'>Contact</h1>
                                <ul className=''>
                                    <li>General-gas Akobo Ibadan</li>
                                    <li>+2348167701033</li>
                                    <li>konserve_@gmail.com</li>
                                </ul>
                            </div>
                       
                        </div>
                            <hr />
                    <div className='text-center text-white mt-2'>
                        <h1>Copyright © 2024 Konserve.</h1>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
