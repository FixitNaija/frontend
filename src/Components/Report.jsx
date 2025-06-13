import React from 'react'
import { useState } from 'react'
import Drainage from '../assets/Wusedrainage.jpg'
import Dumping from '../assets/Dumping.jpg'
import Holes from '../assets/Potholes.jpg'
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import Profile from '../assets/Image.png'

const Report = () => {
  const [drainage, setDrainage] = useState(true)
  const [dumping, setDumping] = useState(false)
  const [holes, setHoles] = useState(false)

  const firstPicture = () => {
    setDrainage(true)
    setDumping(false)
    setHoles(false)
  }
  const secondPicture = () => {
    setDrainage(false)
    setDumping(true)
    setHoles(false)
  }
  const thirdPicture = () => {
    setDrainage(false)
    setDumping(false)
    setHoles(true)
  }
  return (
    <div className='bg-[#ffffff] min-h-screen px-2 sm:px-0'>
      <div className="flex justify-center items-center ">
        <p className="font-poppins font-bold text-[32px] sm:text-[40px] px-[8px] sm:px-[17px] pt-[24px] pb-[16px] text-center leading-[40px] sm:leading-[48px]">
          Recent Happenings
        </p>
      </div>
      <div className='flex justify-center items-center mb-[16px] sm:mb-[24px]'>
<<<<<<< HEAD
        <p className='font-poppins font-[400] text-[15px] sm:text-[16px] w-full max-w-[358px] p-[5px] md:text-[18px] sm:font-normal leading-[22px] sm:leading-[24px] text-center'>Each report brings us one step closer to action and change.</p>
=======
        <p className='font-poppins font-[400] text-[15px] sm:text-[16px] w-full max-w-[358px] p-[5px] sm:text-[18px] sm:font-normal leading-[22px] sm:leading-[24px] text-center'>Each report brings us one step closer to action and change.</p>
>>>>>>> HERITAGE
      </div>

      {/* Section 1 */}
      <section className='flex flex-col lg:flex-row justify-between items-center gap-[24px] m-[10px] sm:m-[40px] lg:m-[100px] mt-[32px] sm:mt-[64px]'>
        <div className='relative w-full max-w-[358px] sm:max-w-[509px] h-[220px] sm:h-[312px] lg:h-[409px] rounded-[12px] mb-4 lg:mb-0'>
          {drainage && <img src={Drainage} alt='drainage' className='w-full h-full object-cover rounded-[12px]' />}
          {dumping && <img src={Dumping} alt='dumping' className='w-full h-full object-cover rounded-[12px]' />}
          {holes && <img src={Holes} alt='holes' className='w-full h-full object-cover rounded-[12px]' />}
          <div className='absolute inset-0 flex flex-col gap-[8px] sm:gap-[12px] pt-[10px]'>
            <img onClick={firstPicture} src={Drainage} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${drainage ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
            <img onClick={firstPicture} src={Drainage} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${dumping ? 'border-[2px] border-[#15803D]' : ' border-[2px] border-[#fff]'} `} />
            <img onClick={firstPicture} src={Drainage} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${holes ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
          </div>
        </div>
        <div className='w-full max-w-[707px]'>
          <div className='flex flex-col sm:flex-row justify-between gap-2 font-poppins'>
            <p className='w-full sm:w-[216px] h-[38px] font-[600] text-[20px] sm:text-[24px] leading-[28px]'>Blocked Drainage</p>
            <p className='font-poppins font-normal text-[14px] sm:text-[16px] leading-[16px] bg-[#DCFCE7] text-[#15803D] w-fit sm:w-[104px] h-[28px] sm:h-[32px] px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[9999px] mt-2 sm:mt-0'> Resolved </p>
          </div>
          <p className='flex items-center text-[#15803D] font-poppins font-normal text-[13px] sm:text-[14px] leading-[18px] mb-[16px] sm:mb-[24px] '> <CiLocationOn /> 123, Business Street, Municipal, Kano State</p>
          <p className='font-poppins font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] '>I noticed the drainage on my street was blocked, and water flooded the road. It was
            <br className='hidden sm:block' /> causing trouble for people walking and driving the smell has gotten worse , and its
            <br className='hidden sm:block' /> starting to attract mosquitoes and flies. I decided ....</p>
          <div className='flex flex-col sm:flex-row gap-[8px] mt-[16px] sm:mt-[24px]'>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <AiOutlineLike />256.1k Upvotes</button>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <FaRegComments />Comments</button>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <GoShareAndroid />Share</button>
          </div>
          <hr className='mt-[16px] sm:mt-[24px] mb-[16px] sm:mb-[24px]' />
          <div className='w-full max-w-[707px] h-auto sm:h-[128px] rounded-[24px] p-[12px] sm:p-[16px] border'>
            <div className='flex flex-col sm:flex-row justify-between'>
              <div className='flex gap-[8px] '>
                <img src={Profile} className='w-[32px] h-[32px] sm:w-auto sm:h-auto' />
                <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[24px] mt-[8px]'> Gabriel Omotayo</p>
              </div>
              <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[24px] italic'>2days ago</p>
            </div>
            <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px]' >Thank you for speaking up about this ,we have the seen issue on our street,  it really affecting everyone, hope the authorities respond quickly,,</p>
            <div className='flex justify-center items-center mt-[-20px] sm:mt-[-40px]'>
              <button className='border pt-[8px] pb-[8px] pr-[16px] pl-[16px] text-[#15803D] border-[#34A853] flex justify-center items-center bg-[#fffff0] rounded-[12px] text-[13px] sm:text-[16px]'> Join Conversation </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className='flex flex-col lg:flex-row justify-between items-center gap-[24px] m-[10px] sm:m-[40px] lg:m-[100px] mt-[32px] sm:mt-[64px]'>
        <div className='relative w-full max-w-[358px] sm:max-w-[509px] h-[220px] sm:h-[312px] lg:h-[409px] rounded-[12px] mb-4 lg:mb-0'>
          {drainage && <img src={Drainage} alt='drainage' className='w-full h-full object-cover rounded-[12px]' />}
          {dumping && <img src={Dumping} alt='dumping' className='w-full h-full object-cover rounded-[12px]' />}
          {holes && <img src={Holes} alt='holes' className='w-full h-full object-cover rounded-[12px]' />}
          <div className='absolute inset-0 flex flex-col gap-[8px] sm:gap-[12px] pt-[10px]'>
            <img onClick={secondPicture} src={Dumping} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${drainage ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
            <img onClick={secondPicture} src={Dumping} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${dumping ? 'border-[2px] border-[#15803D]' : ' border-[2px] border-[#fff]'} `} />
            <img onClick={secondPicture} src={Dumping} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${holes ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
          </div>
        </div>
        <div className='w-full max-w-[707px]'>
          <div className='flex flex-col sm:flex-row justify-between mb-[8px] sm:mb-[12px]'>
            <p className='font-poppins font-semibold text-[22px] sm:text-[32px] leading-[24px] sm:leading-[28px]' >Illegal Dumpings</p>
            <p className='font-poppins font-normal text-[14px] sm:text-[16px] leading-[16px] bg-[#DBEAFE] text-[#1E40AF] w-fit sm:w-[120px] h-[28px] sm:h-[32px] px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[9999px] mt-2 sm:mt-0'> In Progress </p>
          </div>
          <p className='flex items-center text-[#15803D] font-poppins font-normal text-[13px] sm:text-[14px] leading-[18px] mb-[16px] sm:mb-[24px] '> <CiLocationOn /> 25,Niran Adegoke Street, Ipamesan Sango Ota, Ogun State. </p>
          <p className='font-poppins font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] '>People have been dumping waste illegally near the junction , it started with few bags
            <br className='hidden sm:block' /> but now the area is full of trash and its getting worse, i’m reporting here so the right
            <br className='hidden sm:block' /> people can take action before it becomes health h ....</p>
          <div className='flex flex-col sm:flex-row gap-[8px] mt-[16px] sm:mt-[24px]'>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <AiOutlineLike />256.1k Upvotes</button>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <FaRegComments />Comments</button>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <GoShareAndroid />Share</button>
          </div>
          <hr className='mt-[16px] sm:mt-[24px] mb-[16px] sm:mb-[24px]' />
          <div className='w-full max-w-[707px] h-auto sm:h-[128px] rounded-[24px] p-[12px] sm:p-[16px] border'>
            <div className='flex flex-col sm:flex-row justify-between'>
              <div className='flex gap-[8px] '>
                <img src={Profile} className='w-[32px] h-[32px] sm:w-auto sm:h-auto' />
                <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[24px] mt-[8px]'> Victor Adeleye</p>
              </div>
              <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[24px] italic'>2days ago</p>
            </div>
            <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px]' >Appreciate you reporting it-hoping for a quick clean p..</p>
            <div className='bg-[#fffff0] flex justify-center items-center mt-[-20px] sm:mt-[-40px]'>
              <button className='border pt-[8px] pb-[8px] pr-[16px] bg-[#fffff0] pl-[16px] text-[#15803D] border-[#34A853] flex justify-center items-center rounded-[12px] text-[13px] sm:text-[16px]'> Join Conversation </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className='flex flex-col lg:flex-row justify-between items-center gap-[24px] m-[10px] sm:m-[40px] lg:m-[100px] mt-[32px] sm:mt-[64px]'>
        <div className='relative w-full max-w-[358px] sm:max-w-[509px] h-[220px] sm:h-[312px] lg:h-[409px] rounded-[12px] mb-4 lg:mb-0'>
          {drainage && <img src={Drainage} alt='drainage' className='w-full h-full object-cover rounded-[12px]' />}
          {dumping && <img src={Dumping} alt='dumping' className='w-full h-full object-cover rounded-[12px]' />}
          {holes && <img src={Holes} alt='holes' className='w-full h-full object-cover rounded-[12px]' />}
          <div className='absolute inset-0 flex flex-col gap-[8px] sm:gap-[12px] pt-[10px]'>
            <img onClick={thirdPicture} src={Holes} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${drainage ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
            <img onClick={thirdPicture} src={Holes} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${dumping ? 'border-[2px] border-[#15803D]' : ' border-[2px] border-[#fff]'} `} />
            <img onClick={thirdPicture} src={Holes} alt='drainage' className={`w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] rounded-[12px] ml-[4px] sm:ml-[12px] ${holes ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
          </div>
        </div>
        <div className='w-full max-w-[707px]'>
          <div className='flex flex-col sm:flex-row justify-between mb-[8px] sm:mb-[12px]'>
            <p className='font-poppins font-semibold text-[22px] sm:text-[32px] leading-[24px] sm:leading-[28px]' >Potholes on Main Road</p>
            <p className='font-poppins font-normal text-[14px] sm:text-[16px] leading-[16px] bg-[#DCFCE7] text-[#15803D] w-fit sm:w-[104px] h-[28px] sm:h-[32px] px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[9999px] mt-2 sm:mt-0'> Reported </p>
          </div>
          <p className='flex items-center text-[#15803D] font-poppins font-normal text-[13px] sm:text-[14px] leading-[18px] mb-[16px] sm:mb-[24px] '> <CiLocationOn /> 23, Anuoluwapo Street, Leme Abeokuta, Ogun State</p>
          <p className='font-poppins font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] '>The road leading to my area is full of potholes ,drivers now try to avoid them and its
            <br className='hidden sm:block' /> causes traffic and accidents, on rainy days it is always filled with water making them
            <br className='hidden sm:block' /> harder to see and more dangerous. Im reporting ....</p>
          <div className='flex flex-col sm:flex-row gap-[8px] mt-[16px] sm:mt-[24px]'>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <AiOutlineLike />256.1k Upvotes</button>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <FaRegComments />Comments</button>
            <button className='border w-full sm:w-[150px] h-[40px] font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] flex justify-center items-center rounded-[8px] p-[8px]'> <GoShareAndroid />Share</button>
          </div>
          <hr className='mt-[16px] sm:mt-[24px] mb-[16px] sm:mb-[24px]' />
          <div className='w-full max-w-[707px] h-auto sm:h-[128px] rounded-[24px] p-[12px] sm:p-[16px] border'>
            <div className='flex flex-col sm:flex-row justify-between'>
              <div className='flex gap-[8px] '>
                <img src={Profile} className='w-[32px] h-[32px] sm:w-auto sm:h-auto' />
                <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[24px] mt-[8px]'> Ishola Yunus</p>
              </div>
              <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[24px] italic'>2days ago</p>
            </div>
            <p className='font-normal font-poppins text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px]' >I pass this road every day -those problems are really bad, thanks for reporting it ,we need more people to speak to the government can fix it</p>
            <div className='flex justify-center items-center mt-[-20px] sm:mt-[-40px]'>
              <button className='border pt-[8px] pb-[8px] bg-[#fffff0] pr-[16px] pl-[16px] text-[#15803D] border-[#34A853] flex justify-center items-center rounded-[12px] text-[13px] sm:text-[16px]'> Join Conversation </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Report
