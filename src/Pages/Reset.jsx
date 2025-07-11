import { React, useState } from "react";
import Logo from "../assets/Fixitlogo.png";
import Caution from "../assets/Caution.png";
import Lock from "../assets/lock.png";
import { Link , useNavigate} from "react-router";
import axios from "axios";


function Reset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
  try {
    await axios.post("https://fixitbackend-7zrf.onrender.com/api/v1/user/resetpassword",{ email});
    alert("a mail has been sent into your mailbox");
    navigate("/OtpVerify");
    } 
    
    catch (error) {
      console.error("Error sending reset password request:", error);
      setError("Failed to send reset password request. Please try again.");
    }
    
  };

  const handleEmailChange = (e) => {
    // Validate email format
    let email = e.target.value;
    if (!email) {
      setError("Email is required");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
    } else {
      setError(true);
    }

    setEmail(email);
  };
  return (
    <div className="font-Poppins mt-[48px]">
      <div className="sm:px-[60px] md:px-[70px] lg:px-[90px] w-full">
        <img src={Logo} alt="fixit-logo" className="pt-[16px]  pl-[12px] " />
      </div>
      <section>
        <div className=" flex items-center justify-center my-[40px] sm:mt-0 ">
          {/* <div className="flex  flex-row justify-center items-center   bg-[#FF6D001A] w-[310px] h-[44px]">
            <img src={Caution} alt="" />
            <h1 className="text-[#FF6D00] font-[500] text-[14px] leading[17px]">
              {" "}
              Please provide a valid email address.
            </h1>
          </div> */}
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
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-[16px]  pt-[24px]">
              <label htmlFor="email">Email address </label>
              <input
                onChange={handleEmailChange}
                type="email"
                id="email"
                placeholder="Email"
                className=" w-[288px] sm:w-[540px]  rounded-[6px] pl-[13px] h-[46px] border border-[#D2D9E9]"
                value={email}
              />
             
               {typeof error === "string" && (
      <span className="text-red-500 text-sm mt-1">{error}</span>
      )}
             
              <button
              onSuccess={handleSubmit} 
              disabled={typeof error === "string" && error !== ""}
              type="submit" className="text-[#FFFFFF] font-Poppins font-[500] text-[16px] rounded-[12px] bg-[#15803D] mt-[24px] sm:mt-[38px] w-[288px] sm:w-[540px] h-[46px] cursor-pointer">
              
                Reset Password
              </button>
            </div>
          </form>
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
