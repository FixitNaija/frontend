import React, { useState } from 'react'
import { AiOutlinePicture } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";

const ReportIssue = () => {
    const [form, setForm] = useState({
        title: '',
        category: '',
        description: '',
        location: '',
        state: '',
        lga: '',
        image: null
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.title) newErrors.title = 'Title is required';
        if (!form.category || form.category === 'Select a Category') newErrors.category = 'Category is required';
        if (!form.description) newErrors.description = 'Description is required';
        if (!form.location) newErrors.location = 'Location is required';
        if (!form.state) newErrors.state = 'State is required';
        if (!form.lga) newErrors.lga = 'Local Government is required';
        if (!form.image) newErrors.image = 'Image is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Submit logic here
            alert('Form submitted!');
        }
    };

    return (
        <div className='bg-[#F9FAFB]'>
            <h1 className='font-poppins font-bold text-[24px] leading-[36px] flex justify-center align-center mt-[84px] '>Report Issue</h1>
            <p className='font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center mt-[]'>Help improve your community by reporting infrastructure problems</p>
            <form onSubmit={handleSubmit}>
            <section className='w-full flex-col justify-center items-center bg-[#FFFFFF]'>
                <div >
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[120px] mt-[48px] mb-[4px]'>Issue Title</p>
                    <input name='title' value={form.title} onChange={handleChange} type='text' placeholder='E.g., Broken Street Light, Pothole, etc.' className='border font-poppins font-normal text-[16px] leading-[24px] w-[727px] h-[42px] rounded-[6px] ml-[120px] pl-[14px] py-[9px]'/>
                    {errors.title && <p className='text-red-500 text-xs ml-[120px]'>{errors.title}</p>}
                </div>
                <div>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[120px] pt-[29px] mb-[4px]'>Category</p>
                    <select name='category' value={form.category} onChange={handleChange} className='border font-poppins w-[727px] h-[42px] text-[16px] rounded-[6px] font-normal leading-[24px] ml-[120px] py-[8px] pl-[16px]'>
                        <option>Select a Category</option>
                        <option>Road Damage</option>
                        <option>Electricity</option>
                        <option>Waste Management</option>
                        <option>Water Supply</option>
                        <option>Drainage</option>
                        <option>Others</option>
                    </select>
                    {errors.category && <p className='text-red-500 text-xs ml-[120px]'>{errors.category}</p>}
                </div>
                <div className=''>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[120px] pt-[29px] mb-[4px]'>Description</p>
                    <input name='description' value={form.description} onChange={handleChange} type='text' placeholder='Provide details about the issue...' className='border font-poppins rounded-[6px] w-[727px] h-[118px] font-normal text-[16px] leading-[24px] ml-[120px] pl-[16px] pt-[-10px]'/>
                    {errors.description && <p className='text-red-500 text-xs ml-[120px]'>{errors.description}</p>}
                </div>
                <div>
                    <p className='font-poppins font-medium text-[14px] leading-[18px] pl-[120px] pt-[29px] mb-[4px]'>Location</p>
                    <input name='location' value={form.location} onChange={handleChange} type='text' placeholder='Address or landmark' className='border font-poppins rounded-[6px] w-[727px] h-[42px] font-normal text-[16px] leading-[24px] ml-[120px] pl-[16px] py-[8px]'/>
                    {errors.location && <p className='text-red-500 text-xs ml-[120px]'>{errors.location}</p>}
                </div>
                <div className='flex items-center pl-[120px] gap-[16px] pt-[29px]'>
                    <div>
                        <p className='font-poppins font-medium text-14px leading-[18px] mb-[4px]'>State</p>
                        <input name='state' value={form.state} onChange={handleChange} type='text' className='border rounded-[6px] w-[356px] h-[42px]'/>
                        {errors.state && <p className='text-red-500 text-xs'>{errors.state}</p>}
                    </div>
                    <div>
                        <p className='font-poppins font-medium text-14px leading-[18px] mb-[4px]'>Local Government</p>
                        <input name='lga' value={form.lga} onChange={handleChange} type='text' className='border rounded-[6px] w-[356px] h-[42px]'/>
                        {errors.lga && <p className='text-red-500 text-xs'>{errors.lga}</p>}
                    </div>
                </div>
                <div>
                    <p className='font-poppin s font-medium text-[14px] leading-[18px] pl-[120px] pt-[29px] mb-[4px]'>Upload Image</p>
                    <input name='image' onChange={handleChange} type='file' className='border rounded-[6px] w-[727px] h-[42px] font-poppins font-normal text-[16px] leading-[24px] ml-[120px] mb-[16px] py-[8px] pl-[16px]'/>
                    {errors.image && <p className='text-red-500 text-xs ml-[120px]'>{errors.image}</p>}
                </div>
                <div className='flex items-center pl-[120px]'>
                <button type='submit' className='flex justify-center items-center bg-[#15803D] text-white font-poppins w-[727px] h-[42px] rounded-[8px] px-8 py-2 mt-4 mb-9'> <LiaTelegram />Submit Report</button>
                </div>
            </section>
            </form>
        </div>
    )
}

export default ReportIssue