import React, { useState } from 'react';
import Logo from '../assets/Fixitlogo.png'
import { Link } from 'react-router'
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [hide, setHide] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='scroll-smooth w-full bg-white shadow'>
      <div className='flex justify-between items-center px-4 md:px-[100px] py-4'>
        {/* Logo */}
        <div className='nav-logo'>
          <Link to="/"><img src={Logo} alt="logo" className="h-10" /></Link>
        </div>

        {/* Hamburger Button (visible on small screens) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <RxHamburgerMenu className="w-7 h-7" />
        </button>

        {/* Nav Links (hidden on small screens) */}
        <div className='hidden md:flex nav-links'>
          <ul className='flex gap-8 items-center'>
            <Link to="/"><li className="font-poppins text-base font-medium">Home</li></Link>
            <Link to="/AboutUs"><li className="font-poppins text-base font-medium">About</li></Link>
            <li className='relative'>
              <div className='font-poppins text-base font-medium flex items-center cursor-pointer' onClick={() => setHide(prev => !prev)}>
                Help & Info <IoIosArrowDown />
              </div>
              {hide && (
                <div className='absolute right-0 mt-2 bg-white border rounded shadow z-50'>
                  <a href="#FAQ"><p className="px-4 py-2 hover:bg-gray-100">FAQs</p></a>
                  <p className="px-4 py-2 hover:bg-gray-100">Blog</p>
                  <p className="px-4 py-2 hover:bg-gray-100">Support</p>
                </div>
              )}
            </li>
            <li className='flex gap-2'>
              <Link to='/Signup'>
                <button className='border border-[#15803D] bg-white text-[#15803D] hover:bg-[#A1EEAF] cursor-pointer  rounded-lg px-6 py-2 font-poppins text-base font-medium'>Join Community</button>
              </Link>
              <Link to='/Issue'>
              <button className='border border-[#15803D] bg-[#15803D] text-white rounded-lg px-6 py-2 font-poppins text-base hover:bg-[#A1EEAF] cursor-pointer font-medium'>Report Issue</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens when hamburger is open) */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <ul className='flex flex-col gap-4'>
            <Link to="/"><li className="font-poppins text-base font-medium">Home</li></Link>
            <Link to="/AboutUs"><li className="font-poppins text-base font-medium">About</li></Link>
            <li>
              <div className='font-poppins text-base font-medium flex items-center cursor-pointer' onClick={() => setHide(prev => !prev)}>
                Help & Info <IoIosArrowDown />
              </div>
              {hide && (
                <div className='ml-4 mt-2 bg-white border rounded shadow z-50'>
                  <a href="#FAQ"><p className="px-4 py-2 hover:bg-gray-100">FAQs</p></a>
                  <p className="px-4 py-2 hover:bg-gray-100">Blog</p>
                  <p className="px-4 py-2 hover:bg-gray-100">Support</p>
                </div>
              )}
            </li>
            <li className='flex flex-col gap-2'>
              <Link to='/Signup'>
                <button className='border border-[#15803D] bg-white text-[#15803D] rounded-lg px-6 py-2 font-poppins text-base font-medium'>Join Community</button>
              </Link>
              <button className='border border-[#15803D] bg-[#15803D] text-white rounded-lg px-6 py-2 font-poppins text-base font-medium'>Report Issue</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;