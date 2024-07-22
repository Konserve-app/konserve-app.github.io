import { useState } from 'react';
import React  from 'react'
import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Button from './Button';



const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='flex md:justify-center items-center'>
      <div className='mt-2 flex md:m-5'>
          <div className='gap-36 md:mx-70 flex'>
            <div className='flex md:ml-[-160px]'>
            <a href='/'> <img src={logo} alt="Logo" className="w-8 h-8 ml-20 cursor-pointer" /></a>
            <a href='/'><h1 className='font-bold text-xl text-[#006225] cursor-pointer ml-2'>Konserve</h1></a>
            </div>

            <div className=' hidden md:flex text-[#006225] font-bold ml-96 pt-1'>
              <ul className='hidden md:flex flex-row gap-14 cursor-pointer' >
                <li> <Link to='/service'> Services</Link></li>
                <li><Link to='/Digital'> About </Link></li>
                <li>Contact</li>
                <li> <Link to='/LoginPage'><Button>Register/Login</Button></Link></li>
              </ul>
            </div>

            <div className='flex md:hidden'>
              <button onClick={toggleNavbar} className=''>
                {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
              </button>
            </div>

            <div className= {isOpen ? 'fixed left-0 top-2 w-[60%] h-[50%] border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
              <ul className='flex flex-col gap-10 text-white pl-5 border-b-' >
                <li className='p-3 border-b border-green-600'> <Link to='/service'> Services</Link></li>
                <li className='p-3 border-b border-green-600'><Link to='/Digital'> About </Link></li>
                <li className='p-3 border-b border-green-600'>Contact</li>
                <li className='p-3 border-b border-green-600'> <Link to='/LoginPage'><Button>Register/Login</Button></Link></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
