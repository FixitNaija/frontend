import React from 'react'
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
            alert('Form submitted!');
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
            </form>
        </div>
    )
}

export default ReportIssue