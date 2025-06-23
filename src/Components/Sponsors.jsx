import React from 'react'
import Grazac from '../assets/Grazac.png'
import Hack from '../assets/Hack.png' 
import Huxxle from '../assets/Huxxle.png'
import Ogun from '../assets/Ogun.png'   
import Correct from '../assets/correct.png'
import Location from '../assets/location.png' 
import Todo from '../assets/todo.png'

const Sponsors = () => {
  return (
    <div>
         <div className="flex flex-col my-[20px] justify-center items-center">
        <p className="font-[700] font-poppins text-[40px] leading-[48px] text-center mb-[32px] text-[#333333] ">
          {" "}
          How It Works{" "}
        </p>

        <p className="font-[400] w-[346px]  font-poppins text-[14px] leading-[24px] text-center mb-[50px] text-[#333333] ">
          Simple steps to report and resolve infrastructure <br /> issues
        </p>
      </div>
      <div className="flex flex-col sm:flex-row w-full px-[16px] rounded gap-[32px]  ">
        <div
          className="  mx-auto border border-white rounded-[16px]  h-[213px] w-[392px] pb-[16px]  bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center "
          style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
        >
          <img className="pt-[24px]" src={Todo} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>

      

        <div
          className=" p-[24px]  flex flex-col items-center justify-center rounded-[16px]  h-[213px] w-[392px] pb-[16px]  bg-[#fbfbfb]]"
          style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
        >
          <img src={Location} alt="" />
          <div className="text-center">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px">
              Report an Issue
            </p>
            <p>
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>
        <div
          className="p-[24px]  flex flex-col items-center justify-center rounded-[16px]  h-[213px] w-[392px] pb-[16px]  bg-[#fbfbfb]]"
          style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
        >
          <img src={Correct} alt="" />
          <div className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px">
              Report an Issue
            </p>
            <p>
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="justify-center flex font-poppins text-[24px] my-[40px]">
          Our Trusted Partners
        </p>
        <div className=" flex flex-wrap sm:justify-between w-full sm:flex  mx-auto ">
          <img src={Grazac} alt="" />
          <img src={Hack} alt="" />
          <img src={Huxxle} alt="" />
          <img src={Ogun} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sponsors