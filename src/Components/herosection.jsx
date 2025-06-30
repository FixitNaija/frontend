import React from 'react'
import { Link } from 'react-router'


const Herosection = () => {
    return (
        <div >
            <div className=' bg-[url(../src/assets/Hero.jpg)] bg-cover bg-no-repeat  h-[450px] sm:h-[700px] relative'>
                {/* Underlay for dark overlay */}
                <div className='absolute inset-0 bg-black opacity-60 z-0'></div>
                <div className='relative z-10'>
                    <h1 className='text-[24px] sm:text-[54px] font-poppins font-bold leading-[36px] w-[264px] sm:w-[720px] h-[144px] sm:h-[240px] sm:leading-[80px] text-white  ml-[16px] sm:ml-[50px] mr-[110px] sm:mr-[323px] mb-[16px] pt-[67px] sm:pt-[87px] mt-[20px] '>
                        Empowering Communities  to Report  Infrastructure Issues
                    </h1>
                    <p className='text-[14px] sm:text-[17px] font-poppins font-medium leading-[24px] w-[300px] sm:w-[358px] md:w-[720px] h-[120px] sm:h-[90px] sm:leading-[30px] text-white  ml-[16px] sm:ml-[50px] mr-[110px] sm:mr-[323px] pt-[8px] sm:pt-[52px]'>
                        Welcome to our innovative civic tech platform, where you can easily report and
                        <br /> track public infrastructure problems in your community.Join us in making a
                        <br /> difference by highlighting issues in your community.
                    </p>
                    <Link to='/Issue'>
                    <button  className='border font-poppins  hover:bg-[#A1EEAF] cursor-pointer text-[16px] leading-[24px] sm:text-base font-medium border-[#15803D] bg-[#15803D] text-[#fff] rounded-[8px] sm:rounded-lg w-[170px] sm:w-[183px] h-[48px] pt-[12px] pb-[12px]  pl-[24px] sm:pl-[42px]  pr-[24px] sm:pr-[42px] ml-[16px] sm:ml-[50px]  mr-[110px] sm:mr-[323px] mt-[60px] sm:mt-[84px]'>Report Issue</button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col sm:flex sm:flex-row justify-between align-center md:gap-[0px] items-center  ml-[16px] sm:ml-[0px] sm:mr-[16px] md:mr-0  mt-[24px] sm:mt-[40px]'>
                <div className=' w-[100px] sm:w-[286px] md:w-[180px] h-[148px] block justify-center align-center text-center md:ml-[20px] ml-[-10px] sm:ml-[10px] mt[40px]' >
                    <p className='font-poppins text-[24px] sm:text-[24px] md:text-[48px] font-semibold leading-[28px] sm:leading-[48px] text-[#15803D]'>5,280+</p>
                    <p className='font-poppins font-normal text-[14px] sm:text-[16px] leading-[24px]'>Issues Reported</p>
                </div>
                <div className='w-[100px] sm:w-[286px] md:w-[180px] h-[148px] block justify-center align-center text-center md:ml-[20px]  ml-[-10px] sm:ml-[100px] mt[40px]'>
                    <p className='font-poppins text-[24px] sm:text-[48px] font-semibold leading-[28px] sm:leading-[48px] text-[#15803D]'>3,140+</p>
                    <p className='font-poppins font-normal text-[14px] sm:text-[16px] leading-[24px]'>Issues Resolved</p>
                </div>
                <div className='w-[100px] sm:w-[286px] md:w-[180px] h-[148px] block justify-center align-center text-center md:ml-[20px]  ml-[-10px] sm:ml-[100px] mt[40px]'>
                    <p className='font-poppins text-[24px] sm:text-[48px] font-semibold leading-[28px] sm:leading-[48px] text-[#15803D]'>2,000+</p>
                    <p className='font-poppins font-normal text-[14px] sm:text-[16px] leading-[24px]'>Active Communities</p>
                </div>
                <div className='w-[100px] sm:w-[286px] md:w-[180px] h-[148px] block justify-center align-center text-center md:ml-[20px]  ml-[-40px] sm:ml-[100px] mt[40px]'>
                    <p className='font-poppins text-[24px] sm:text-[48px] font-semibold leading-[28px] sm:leading-[48px] text-[#15803D]'>36</p>
                    <p className='font-poppins font-normal  text-[14px] sm:text-[16px] leading-[24px]'>States Covered</p>
                </div>
            </div>
        </div>
    )
}

export default Herosection


