import React from 'react'
import { AiOutlinePicture } from "react-icons/ai";

const ReportIssue = () => {
    return (
        <div className='bg-[#F9FAFB]'>
            <h1 className='font-poppins font-bold text-[24px] leading-[36px] flex justify-center align-center mt-[84px] '>Report Issue</h1>
            <p className='font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center mt-[]'>Help improve your community by reporting infrastructure problems</p>
            <section className='w-full flex-col justify-center items-center bg-[#FFFFFF]'>
                <div >
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[100px] mt-[48px] mb-[4px]'>Issue Title</p>
                    <input type='text' placeholder='E.g., Broken Street Light, Pothole, etc.' className='border font-poppins font-normal text-[16px] leading-[24px] w-[727px] h-[42px] rounded-[6px] ml-[100px] pl-[14px] py-[9px]'/>
                </div>
                <div>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[100px] pt-[29px] mb-[4px]'>Category</p>
                    <select className='border font-poppins w-[727px] h-[42px] text-[16px] rounded-[6px] font-normal leading-[24px] ml-[100px] py-[8px] pl-[16px]'>
                        <option>Select a Category</option>
                        <option>Road Damage</option>
                        <option>Electricity</option>
                        <option>Waste Management</option>
                        <option>Water Supply</option>
                        <option>Drainage</option>
                        <option>Others</option>
                    </select>
                </div>
                <div className=''>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[100px] pt-[29px] mb-[4px]'>Description</p>
                    <input type='text' placeholder='Provide details about the issue...' className='border font-poppins rounded-[6px] w-[727px] h-[118px] font-normal text-[16px] leading-[24px] ml-[100px] pl-[16px] pt-[-10px]'/>
                </div>
                <div>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[100px] pt-[29px] mb-[4px]'>Location</p>
                    <input type='text' placeholder='Address or landmark' className='border font-poppins rounded-[6px] w-[727px] h-[42px] font-normal text-[16px] leading-[24px] ml-[100px] pl-[16px] py-[8px]'/>
                </div>
                <div className='flex items-center pl-[100px] gap-[16px] pt-[29px]'>
                    <div>
                        <p className='font-poppins font-medium text-14px leading-[18px] mb-[4px]'>State</p>
                        <input type='text' className='border rounded-[6px] w-[356px] h-[42px]'/>
                    </div>
                    <div>
                         <p className='font-poppins font-medium text-14px leading-[18px] mb-[4px]'>Local Government</p>
                        <input type='text' className='border rounded-[6px] w-[356px] h-[42px]'/>
                    </div>
                </div>
                <div>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[100px] pt-[29px] mb-[4px]'>Upload Image</p>
                    <input type='file' placeholder=' <AiOutlinePicture /> Click to upload an image' className='border rounded-[6px] w-[727px] h-[42px] font-poppins font-normal text-[16px] leading-[24px] ml-[100px] mb-[16px] py-[8px] pl-[16px]'/>
                </div>
            </section>
        </div>
    )
}

export default ReportIssue 