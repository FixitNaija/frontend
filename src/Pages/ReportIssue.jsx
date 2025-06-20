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
            <h1 className='font-poppins font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[36px] flex justify-center align-center mt-[84px] '>Report Issue</h1>
            <p className='font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center mt-[]'>Help improve your community by reporting infrastructure problems</p>
            <form onSubmit={handleSubmit}>
            <section className='flex flex-col justify-center align-center bg-[#FFFFFF] mt-[29px]  ml-[180px] pt-[12px] w-[820px]'>
                <div className='w-full flex flex-col items-center mb-4'>
                    <label className='font-poppins font-medium text-[14px] leading-[18px] w-full max-w-[500px] text-left mb-2'>Issue Title</label>
                    <input name='title' value={form.title} onChange={handleChange} type='text' placeholder='E.g., Broken Street Light, Pothole, etc.' className='border font-poppins font-normal text-[16px] leading-[24px] w-full max-w-[500px] h-[42px] rounded-[6px] pl-[14px] py-[9px] mx-auto'/>
                    {errors.title && <p className='text-red-500 text-xs w-full max-w-[500px] text-left'>{errors.title}</p>}
                </div>
                <div className='w-full flex flex-col items-center mb-4'>
                    <label className='font-poppins font-medium text-[14px] leading-[18px] w-full max-w-[500px] text-left mb-2'>Category</label>
                    <select name='category' value={form.category} onChange={handleChange} className='border font-poppins w-full max-w-[500px] h-[42px] text-[16px] rounded-[6px] font-normal leading-[24px] py-[8px] pl-[16px] mx-auto'>
                        <option>Select a Category</option>
                        <option>Road Damage</option>
                        <option>Electricity</option>
                        <option>Waste Management</option>
                        <option>Water Supply</option>
                        <option>Drainage</option>
                        <option>Others</option>
                    </select>
                    {errors.category && <p className='text-red-500 text-xs w-full max-w-[500px] text-left'>{errors.category}</p>}
                </div>
                <div className='w-full flex flex-col items-center mb-4'>
                    <label className='font-poppins font-medium text-[14px] leading-[18px] w-full max-w-[500px] text-left mb-2'>Description</label>
                    <textarea name='description' value={form.description} onChange={handleChange} placeholder='Provide details about the issue...' className='border font-poppins rounded-[6px] w-full max-w-[500px] h-[118px] font-normal text-[16px] leading-[24px] pl-[16px] py-2 resize-none mx-auto'/>
                    {errors.description && <p className='text-red-500 text-xs w-full max-w-[500px] text-left'>{errors.description}</p>}
                </div>
                <div className='w-full flex flex-col items-center mb-4'>
                    <label className='font-poppins font-medium text-[14px] leading-[18px] w-full max-w-[500px] text-left mb-2'>Location</label>
                    <input name='location' value={form.location} onChange={handleChange} type='text' placeholder='Address or landmark' className='border font-poppins rounded-[6px] w-full max-w-[500px] h-[42px] font-normal text-[16px] leading-[24px] pl-[16px] py-[8px] mx-auto'/>
                    {errors.location && <p className='text-red-500 text-xs w-full max-w-[500px] text-left'>{errors.location}</p>}
                </div>
                <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-4'>
                    <div className='w-full max-w-[245px] flex flex-col items-center'>
                        <label className='font-poppins font-medium text-14px leading-[18px] w-full text-left mb-2'>State</label>
                        <input name='state' value={form.state} onChange={handleChange} type='text' className='border rounded-[6px] w-full h-[42px]'/>
                        {errors.state && <p className='text-red-500 text-xs w-full text-left'>{errors.state}</p>}
                    </div>
                    <div className='w-full max-w-[245px] flex flex-col items-center'>
                        <label className='font-poppins font-medium text-14px leading-[18px] w-full text-left mb-2'>Local Government</label>
                        <input name='lga' value={form.lga} onChange={handleChange} type='text' className='border rounded-[6px] w-full h-[42px]'/>
                        {errors.lga && <p className='text-red-500 text-xs w-full text-left'>{errors.lga}</p>}
                    </div>
                </div>
                <div className='w-full flex flex-col items-center mb-4'>
                    <label className='font-poppins font-medium text-[14px] leading-[18px] w-full max-w-[500px] text-left mb-2'>Upload Image</label>
                    <input name='image' onChange={handleChange} type='file' className='border rounded-[6px] w-full max-w-[500px] h-[42px] font-poppins font-normal text-[16px] leading-[24px] mb-[16px] py-[8px] pl-[16px] mx-auto'/>
                    {errors.image && <p className='text-red-500 text-xs w-full max-w-[500px] text-left'>{errors.image}</p>}
                </div>
                <div className='flex items-center justify-center'>
                  <button type='submit' className='flex justify-center items-center bg-[#15803D] text-white font-poppins w-[500px] h-[42px] rounded-[8px] px-8 py-2 mt-4 mb-9'> <LiaTelegram />Submit Report</button>
                </div>
            </section>
            </form>
        </div>
    )
}

export default ReportIssue