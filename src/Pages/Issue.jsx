import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { AiOutlinePicture } from "react-icons/ai";
import { issue } from '../api/data';
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

const ReportIssue = () => {
    const [form, setForm] = useState({
        title: '',
        category: '',
        description: '',
        location: '',
        state: '',
        localGovernment: '',
        images: null
    });
    const [errors, setErrors] = useState({});
    const [token, setToken] = useState()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        let savedToken = Cookies.get('token')
        if (savedToken) {
            setToken(savedToken)
        }
    }, [])
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
        if (!form.localGovernment) newErrors.localGovernment = 'Local Government is required';
        if (!form.images) newErrors.images = 'Image is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        if (validate()) {
            setLoading(true)
            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => {
                formData.append(key, value);

            });
            await issue(formData, token)
                .then(response => {
                    console.log('Issue reported successfully:', response);
                    toast.success(response.data.message)
                    setTimeout(() => {
                        navigate('/ReportSubmit')                       
                    }, 2000);
                })
                .catch(error => {
                    console.error('Error reporting issue:', error || error.message);
                    toast.error('Issue not reported successfully');
                })
                .finally(() => {
                    setLoading(false);
                })
            // alert('Issue reported successfully!');
            // setForm({
            //     title: '',
            //     category: '',
            //     description: '',
            //     location: '',
            //     state: '',
            //     lga: '',
            //     image: null
            // });
            // setErrors({});
        }
    };

    return (
        <div className='bg-[#F9FAFB] justify-center items-center w-full h-full'>
            <div className=' block justify-center align-middle items-center text-center '>
                <h1 className='font-poppins font-bold text-[24px] leading-[36px]  pt-[24px] '>Report Issue</h1>
                <p className='font-poppins font-normal text-[16px] leading-[24px] '>Help improve your community by reporting infrastructure problems</p>
            </div>
            <form onSubmit={handleSubmit}>
                <section className='w-full flex-col justify-center align-middle items-center  '>
                    <div className='flex flex-col justify-center items-center '>
                        <div>
                            <p className='font-poppins font-medium text-[14px] leading-[18px]  mt-[48px] mb-[4px]'>Issue Title</p>
                            <input name='title' value={form.title} onChange={handleChange} type='text' placeholder='E.g., Broken Street Light, Pothole, etc.' className='border font-poppins font-normal text-[16px] leading-[24px] pl-[20px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px] rounded-[6px]' />
                            {errors.title && <p className='text-red-500 text-xs text-left'>{errors.title}</p>}
                        </div>
                    </div>

                    <div className='flex justify-center items-center '>
                        <div className='mt-[24px]'>
                            <p className='font-poppins font-medium text-[14px] leading-[18px]  mb-[4px]'>Category</p>
                            <select name='category' value={form.category} onChange={handleChange} className='border font-poppins h-[42px] text-[16px] rounded-[6px] font-normal leading-[24px] w-[310px] sm:w-[620px] lg:w-[720px] '>
                                <option>Select a Category</option>
                                <option>Road Damage</option>
                                <option>Electricity</option>
                                <option>Waste Management</option>
                                <option>Water Supply</option>
                                <option>Drainage</option>
                                <option>Others</option>
                            </select>
                            {errors.category && <p className='text-red-500 text-xs text-left'>{errors.category}</p>}
                        </div>
                    </div>


                    <div className='flex justify-center items-center '>

                        <div className='flex flex-col justify-center items-center bg-[#F9FAFB]'>
                            <div className=''>
                                <p className='font-poppins font-medium text-[14px] leading-[18px]  pt-[29px] mb-[4px]'>Description</p>
                                <input name='description' value={form.description} onChange={handleChange} type='text' placeholder='Provide details about the issue...' className='border font-poppins rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[118px] font-normal text-[16px] leading-[24px]  pl-[16px]' />
                                {errors.description && <p className='text-red-500 text-xs text-left'>{errors.description}</p>}
                            </div>

                            <div className='block justify-center items-center '>
                                <p className='font-poppins font-medium text-[14px] leading-[18px] pt-[29px] mb-[4px]'>Location</p>
                                <input name='location' value={form.location} onChange={handleChange} type='text' placeholder='Address or landmark' className='border font-poppins rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px] font-normal text-[16px] leading-[24px] pl-[16px] py-[8px]' />
                                {errors.location && <p className='text-red-500 text-xs text-left'>{errors.location}</p>}
                            </div>
                            <div className='block items-center  pt-[24px]'>
                                <div>
                                    <p className='font-poppins font-medium text-14px leading-[18px] mb-[4px]'>State</p>
                                    <input name='state' value={form.state} onChange={handleChange} type='text' className='border rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px]' />
                                    {errors.state && <p className='text-red-500 text-xs text-left'>{errors.state}</p>}
                                </div>
                                <div className='pt-[24px]'>
                                    <p className='font-poppins font-medium text-[14px] leading-[18px] mb-[4px]'>Local Government</p>
                                    <input name='localGovernment' value={form.localGovernment} onChange={handleChange} type='text' className='border rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px]' />
                                    {errors.localGovernment && <p className='text-red-500 text-xs text-left'>{errors.localGovernment}</p>}
                                </div>
                            </div>
                            <div className='block items-center '>
                                <p className='font-poppins font-medium text-[14px] leading-[18px] pt-[29px] mb-[4px]'>Upload Image</p>
                                <input name='images' onChange={handleChange} type='file' className='border rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px] font-poppins font-normal text-[16px] leading-[24px]  mb-[16px] py-[8px] pl-[16px]' />
                                {errors.images && <p className='text-red-500 text-xs text-left'>{errors.images}</p>}
                            </div>
                            <button type='submit' className='flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#176c3a] transition-colors duration-200 text-white font-poppins font-medium text-[16px] rounded-[6px] w-[310px] sm:w-[620px] lg:w-[720px] h-[42px] mt-6 mb-8'>
                                {loading ?'Loading...':<><AiOutlinePicture className="w-5 h-5" />
                                'Submit Report'</>}
                            </button>
                        </div>
                    </div>

                </section>
            </form>
        </div>
    )
}

export default ReportIssue