import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Learnmore = () => {
  return (
    <div>
      <div className=' flex bg-[#006225] rounded w-[120px] h-[40px] text-center text-white'>
        <button className='ml-1'>Learn more </button>
        <FaArrowRight className='mt-3.5 ml-2' />
      </div>
    </div>
  )
}

export default Learnmore
