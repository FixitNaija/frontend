import React from "react";
import Grazac from "../assets/Grazac.png";
import Hack from "../assets/Hack.png";
import Huxxle from "../assets/Huxxle.png";
import Ogun from "../assets/Ogun.png";
import Correct from "../assets/correct.png";
import Location from "../assets/location.png";
import Todo from "../assets/todo.png";
import { Link } from 'react-router'

const Join = () => {
  return (
    <div>
      
      <div className='relative bg-[url("../src/assets/bg2.jpg")] bg-center bg-cover  bg-no-repeat w-full h-[460px] mt-[20px] bg-opacity-60 z-10'>
        {/* overlay  */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative z-50">
          <div className="pt-[100px] text-center font-poppins text-white align-middle">
            <p className="text-white font-poppins text-[40px] mb-[16px] font-bold leading-[36px] sm:leading-[48px]  ">
              Join the Movement for Better Infrastructure
            </p>
            <p className="font-poppins text-[16px] sm:mb-[26px]">
              Be part of the solution by reporting issues in your community and
              tracking their <br />
              resolution.
            </p>

            <div className="flex gap-[5px] sm:gap-[16px] justify-center mb[20px] px-[8px] sm:px-[16px]">
              <Link to='/news'>
              <button className="text-white bg-[#15803D]  hover:bg-[#A1EEAF] mt-[24px] rounded-[8px] h-[48px] w-[159px] sm:w-[200px] p-[5px] mb-[100px] cursor-pointer">
                {" "}
                Join Community{" "}
              </button>
              </Link>
            
              <Link to='/signup'>
              <button className="text-black bg-[#ffff] hover:bg-[#A1EEAF] mt-[24px] rounded-[8px] h-[48px] w-[159px] sm:w-[200px] p-[5px] mb-[100px] cursor-pointer">
                {" "}
                Report Issue{" "}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Join;
