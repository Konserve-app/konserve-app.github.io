import React from 'react'
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Forgetpass = () => {
  return (
    <div className=" bg-hero-pattern flex h-screen w-screen justify-center items-center gap-0">
        <div className='flex bg-white border-4 rounded shadow-lg p-10'>
                <div className=" hidden md:flex items-center justify-center">
                    <div className="pr-5">
                        <img src={logo} alt='logo' className="w-40" />
                        <h1 className="text-2xl font-bold mb-4 text-center text-[#006225]">Konserve</h1>
                        <div className='flex justify-center'>
                            <Button>Register</Button>
                        </div>
                        <p className="mt-2 text-center text-[#006225] font-medium">Reduce, Reuse, Konserve.</p>
                    </div>
                </div>
                <div className="w-px bg-gray-300" />
                    <div className="flex items-center justify-center">
                    <div className=" p-6 rounded">
                        <h2 className="text-xl mb-4 font-bold text-center text-[#006225]">Reset Password</h2>
                        <p className="mb-4">Enter Your Email to Reset Password</p>
                        <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="e-mail" />
                        <div className='flex justify-center'>
                            <Link to='/Resetpass'><Button>Submit</Button></Link>
                        </div>
                    </div>
                    </div>
            </div>
    </div>
  )
}

export default Forgetpass