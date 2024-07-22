import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Service = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-56 mt-5 w-[900px] h-[350px] border rounded'>
        <div className='text-center text-white bg-[#006225] rounded '>
              <h1 className='text-[20px]'>Service</h1>   
        </div>
        <div className='flex mx-10'>
          <div className=' m-10 w-[300px] h-[250px] border-4 border-[#006225] rounded bg-white'>
            <div className='mx-3 mt-2'>
              <h1 className='text-xl font-bold text-center'>Collection</h1> <hr />
              <p><span className='font-semibold text-left mt-2'>Curbside Pickup:</span><br />
              Regularly scheduled pickup of recyclable 
              materials from residential, commercial, and 
              industrial locations
              </p>
              <p><span className='font-semibold text-left'>Bulk Pickup:</span> <br />
              Collection of large quantities of recyclables, 
              such as from construction sites or large events.
              </p>
            </div>
          </div>


          <div className=' m-10 w-[300px] h-[250px] border-4 border-[#006225]  rounded bg-white'>
            <div className='mx-3 mt-2'>
              <h1 className='text-xl font-bold text-center'>Drop-off Services</h1> <hr />
              <p><span className='font-semibold text-left mt-2'>Drop-off Centers:</span><br />
              Locations where individuals can bring their recyclables
              </p>
              <p><span className='font-semibold text-left'>E-waste Drop-off:</span> <br />
               Specialized drop-off points for electronic waste
              </p>
            </div>
          </div>
          
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Service
