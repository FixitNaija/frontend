import { React } from "react";
import Logo from "../assets/Fixitlogo.png";
import Caution from "../assets/caution.png";
import Lock from "../assets/lock.png";
import { Link } from "react-router";

function Reset() {
  return (
    <div className="font-Poppins mt-[48px]">
      <div className="sm:px-[60px] md:px-[70px] lg:px-[90px] w-full">
        <img src={Logo} alt="fixit-logo" className="pt-[16px]  pl-[12px] " />
      </div>
      <section>
        <div className=" flex items-center justify-center my-[40px] sm:mt-0 ">
          <div className="flex  flex-row justify-center items-center   bg-[#FF6D001A] w-[310px] h-[44px]">
            <img src={Caution} alt="" />
            <h1 className="text-[#FF6D00] font-[500] text-[14px] leading[17px]">
              {" "}
              Please provide a valid email address.
            </h1>
          </div>
        </div>
        <div className="items-center flex flex-col justify-center">
          <div className="font-Poppins items-center">
            <div className="flex justify-center items-center mt-[40px] ">
              <img src={Lock} alt="" className=" " />
            </div>
            <h2 className="font-[700] text-[24px] leading-[28px]  text-[#333333] my-[32px] text-center">
              Reset your password{" "}
            </h2>
            <p className="w-[310px] text-center font-Poppins font-[500] text-[16px] mb-[16px] leading-[24px] text-[#333333]">
              Enter your email address, and we'll send instructions to reset
              your password.
            </p>
          </div>
          <div className="flex flex-col mt-[16px]  pt-[24px]">
            <label htmlFor="email">Email address </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className=" w-[288px] sm:w-[540px]  rounded-[6px] pl-[13px] h-[46px] border border-[#D2D9E9]"
            />
              <button className="text-[#FFFFFF] font-Poppins font-[500] text-[16px] rounded-[12px] bg-[#15803D] mt-[24px] sm:mt-[38px] w-[288px] sm:w-[540px] h-[46px] cursor-pointer">
            <Link to="/Verify">
                Reset Password
            </Link>
              </button>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <Link to="/Signup ">
          <h2 className="cursor-pointer flex justify-center items-center text-[#333333] font-Poppins font-[500] text-[16px] mt-[24px]">
            <button className="text-[#259A48] font-Poppins font-[500] text-[16px] rounded-[12px] bg-[#F7F7F7] mt-[16px]  w-[172px]  h-[46px] mb-[27px] cursor-pointer">
              Back Log in{" "}
            </button>
          </h2>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Reset;
