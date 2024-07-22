import React from 'react'
import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const LoginPage = () => {
  return (
    <div className='bg-hero-pattern object-fill'>
       <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-row p-6 bg-white rounded shadow-lg">
            {/* Registration Section */}
            <div className="hidden md:flex flex-col items-center mr-10">
            <img src={logo} alt='logo' className="w-40"/>
            <h2 className="mb-2 text-xl font-bold text-[#006225]">Konserve</h2>
            <div className='mt-6'><Button>Register</Button></div>
            <p className="text-sm text-[#006225] mt-4">Reduce, Reuse, Konserve.</p>
          </div>
        {/* Divider */}
        <div className="w-px bg-gray-300" />
        {/* Login Section */}
        <div className="flex flex-col ml-10">
          <h2 className="mb-3 text-xl font-bold text-[#006225] text-center">Login</h2><hr />
          <label htmlFor="email" className=" mt-5 mb-2 text-sm font-bold text-[#006225] ">E-mail:</label>
          <input id="email" type="email" placeholder="Enter your email" className="mb-4 border rounded shadow appearance-none w-[250px] h-[30px]" />
          <label htmlFor="password" className="mb-2 text-sm font-bold text-[#006225]">Password:</label>
          <input id="password" type="password" placeholder="Enter your password" className="mb-4 border rounded shadow appearance-none h-[30px]" />
          <div className=' flex justify-center'>
          <Link to='/'><Button>Login</Button> </Link>
          </div>
          <Link to='/Forgetpass'><p className="text-sm text-[#006225] text-center hover:underline">Forget password?</p></Link>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoginPage
