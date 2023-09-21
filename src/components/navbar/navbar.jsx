import React from 'react'
import {FaSistrix,FaUser,FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '../button/button'
export default function Navbar() {
  return (
    <div>
        <div className='flex justify-around w-full py-5 items-center colorbg'>
            <div>
                <img src='./logo.png' className='h-12' />
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-8'>
                    <li className='mr-4 text-white font-semibold text-lg cursor-pointer hover:text-red-600  transition-all duration-100 ease-in-out'><Link to={'/home'}>Home</Link></li>
                    <li className='mr-4 text-white font-semibold text-lg cursor-pointer  hover:text-red-600 transition-all duration-100 ease-in-out '><Link to={'/about'}>About us</Link></li>
                    <li className='mr-4 text-white font-semibold text-lg cursor-pointer  hover:text-red-600 transition-all duration-100 ease-in-out'><Link to={'/contact'}>Contact us</Link></li>
                    <li className='mr-4 text-white font-semibold text-lg cursor-pointer  hover:text-red-600 transition-all duration-100 ease-in-out'>Blogs</li>
                    <li className='mr-4 text-white font-semibold text-lg cursor-pointer  hover:text-red-600 transition-all duration-100 ease-in-out'>Shop</li>
                </ul>
            </div>
            <div className='block md:hidden'>
                <FaBars color='white' size={24} />
            </div>
            <div className='flex gap-8'>
                <FaSistrix color='white' />
                <FaUser color='white' />
                {/* <div  className=' colorbglogin rounded-lg px-2 text-white font-semibold text-lg cursor-pointer' >
                    <Link to={'/'}>Login</Link>
                    </div> */}
                    <Button name={'Login'} link='/login' color={'colorbglogin'} />
                    <Button name={'Sign up'} link='/' color={'colorbglogin'} />
         
            </div>
        </div>



    </div>
  )
}
