import React from 'react'
import { AiOutlinePicture } from "react-icons/ai";

const ReportIssue = () => {
    return (
        <div className='bg-[#F9FAFB] justify-center items-center w-full h-full'>
            <div className=' block justify-center align-middle items-center text-center '>
            <h1 className='font-poppins font-bold text-[24px] leading-[36px]  pt-[24px] '>Report Issue</h1>
            <p className='font-poppins font-normal text-[16px] leading-[24px] '>Help improve your community by reporting infrastructure problems</p>
            </div>
            <section className='w-full flex-col justify-center align-middle items-center  '>
                <div className='flex flex-col justify-center items-center '>
                <div>
                    <p className='font-poppins font-medium text-[14px] leading-[18px]  mt-[48px] mb-[4px]'>Issue Title</p>
                    <input type='text' placeholder='E.g., Broken Street Light, Pothole, etc.' className='border font-poppins font-normal text-[16px] leading-[24px] pl-[20px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px] rounded-[6px]'/>
                </div>
                </div>
                
                <div className='flex justify-center items-center '>
                <div className='mt-[24px]'>
                    <p className='font-poppins font-medium text-[14px] leading-[18px]  mb-[4px]'>Category</p>
                       <select className='border font-poppins h-[42px] text-[16px] rounded-[6px] font-normal leading-[24px] w-[310px] sm:w-[620px] lg:w-[720px] '>
                        <option>Select a Category</option>
                        <option>Road Damage</option>
                        <option>Electricity</option>
                        <option>Waste Management</option>
                        <option>Water Supply</option>
                        <option>Drainage</option>
                        <option>Others</option>
                    </select>
                     </div>
                </div>


                <div className='flex justify-center items-center '>

                <div className='flex flex-col justify-center items-center bg-[#F9FAFB]'>
                   <div className=''>
                    <p className='font-poppins font-medium text-[14px] leading-[18px]  pt-[29px] mb-[4px]'>Description</p>
                    <input type='text' placeholder='Provide details about the issue...' className='border font-poppins rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[118px] font-normal text-[16px] leading-[24px]  pl-[16px]'/>
                </div>
                
                <div className='block justify-center items-center '>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pt-[29px] mb-[4px]'>Location</p>
                    <input type='text' placeholder='Address or landmark' className='border font-poppins rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px] font-normal text-[16px] leading-[24px] pl-[16px] py-[8px]'/>
                </div>
                <div className='block items-center  pt-[24px]'>
                    <div>
                        <p className='font-poppins font-medium text-14px leading-[18px] mb-[4px]'>State</p>
                        <input type='text' className='border rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px]'/>
                    </div>
                    <div className='pt-[24px]'>
                        <p className='font-poppins font-medium text-[14px] leading-[18px] mb-[4px]'>Local Government</p>
                        <input type='text' className='border rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px]'/>
                    </div>
                </div>
                <div className='block items-center '>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pt-[29px] mb-[4px]'>Upload Image</p>
                    <input type='file' placeholder=' <AiOutlinePicture /> Click to upload an image' className='border rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px] font-poppins font-normal text-[16px] leading-[24px]  mb-[16px] py-[8px] pl-[16px]'/>
                </div>
                </div>
                </div>
            
            </section>
        </div>
    )
}

export default ReportIssue 