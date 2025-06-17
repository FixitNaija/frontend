// import React, { useState } from 'react';
// import Logo from '../assets/Fixitlogo.png'
// import { Link } from 'react-router'
// import { IoIosArrowDown } from "react-icons/io";
// import { RxHamburgerMenu } from "react-icons/rx";
// // import Poppins from '../Fonts/Poppins-Regular.ttf'
// // import './index.css'

// const Navbar = () => {
//   const [hide, setHide] = useState(false)
//     const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className='scroll-smooth'>


//         {/* Hamburger Button (visible on small screens) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>


//       <navbar id="FAQs" className='flex justify-between items-center mr-[100px] ml-[100px] mt-[16px] mb-[16px]'>
//         <div classname='nav-logo'>
//           <Link to="/"><img src={Logo} alt="logo" /> </Link>
//         </div>
//         <div className='nav-links'>
//           <p></p>
//           <ul className='flex gap-16 justify-center items-center'>
//             <Link to="/"> <li className="font-poppins text-base font-medium width-[156px] height-[48px] flex justify-center items-center">Home</li></Link>
//             <Link to="/AboutUs"><li className="font-poppins text-base font-medium width-[156px] height-[48px] flex justify-center items-center">About</li> </Link>
//             <li className='relative'>
//               <div className='font-poppins text-base font-medium width-[156px] height-[48px] flex justify-center items-center' >
//                 <p  className='flex justify-center items-center ' onClick={()=>setHide(prev=>!prev)}>Help & Info <IoIosArrowDown /></p>
//                 {hide && <div className='absolute right-0 bottom-[-70px] z-100 bg-[#fff] border border-[#fff] pt-[12px] pb-[12px] pl-[12px] pr-[12px] mr-[15px] mt-[40px]'>
//                   <a href="#FAQ" > <p className="font-poppins text-base font-medium" > FAQs </p></a>
//                   <p className="font-poppins text-base font-medium" > Blog </p>
//                   <p className="font-poppins text-base font-medium" > Support </p>
//                 </div>}
//               </div>
//             </li>
//             <li className='gap-[10px] flex '>
//               <Link to='/Signup'>  <button  className='border font-poppins text-base font-medium border-[#15803D] bg-[#fff] text-[#15803D] rounded-lg width-[183px] height[48px] pt-[12px] pb-[12px] pl-[42px] pr-[42px]  '>Join Community</button></Link>
//               <button  className='border font-poppins text-base font-medium border-[#15803D] bg-[#15803D] text-[#fff] rounded-lg width-[183px] height[48px] pt-[12px] pb-[12px] pl-[42px] pr-[42px]  '>Report Issue</button>
//             </li>
//           </ul>
//          {/* <div >
//               <button type='button' className='border border-[#34A853] bg-[#fff] text-[#34A853]'>Join Community</button>
//             </div> */}
//         </div>
//       </navbar>
//     </div>
//   )
// }

// export default Navbar 








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
                <button className='border border-[#15803D] bg-white text-[#15803D] rounded-lg px-6 py-2 font-poppins text-base font-medium'>Join Community</button>
              </Link>
              <button className='border border-[#15803D] bg-[#15803D] text-white rounded-lg px-6 py-2 font-poppins text-base font-medium'>Report Issue</button>
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