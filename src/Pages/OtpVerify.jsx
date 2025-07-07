import React, { useState, useEffect } from "react";
import Logo from "../assets/Fixitlogo.png";
// import { FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation, Link } from "react-router";
import Cookies from 'js-cookie';
import axios from "axios";
import cookies from "js-cookie";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const location = useLocation();

  const navigate = useNavigate();
  const inputsRef = useRef([]);
  

  // Get email from location state or fallback
  const params = new URLSearchParams(location.search);
  const userEmail = params.get("email") || "example203@gmail.com";
  console.log(userEmail);
  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (!value) return;
    const newOtp = [...otp];
    newOtp[idx] = value[value.length - 1];
    setOtp(newOtp);
    if (idx < 5 && value) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      if (otp[idx]) {
        const newOtp = [...otp];
        newOtp[idx] = "";
        setOtp(newOtp);
      } else if (idx > 0) {
        inputsRef.current[idx - 1].focus();
      }
    }
  };

  useEffect(() => {
    let savedEmail = cookies.get("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handlePaste = (e) => {
    const paste = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 6);
    if (paste.length === 6) {
      setOtp(paste.split(""));
      inputsRef.current[5].focus();
    }
  };

   useEffect(() => {
          let savedEmail = Cookies.get('email')
          if(savedEmail){
              setEmail(savedEmail)
          }
      }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (!otpValue || otpValue.length < 6) {
      toast.error("Please enter the 6-digit OTP code.");
      return;
    }
    setLoading(true);
    try {
      // Replace with your backend endpoint
      const res = await axios.get(
        "https://fixitbackend-7zrf.onrender.com/api/v1/user/verify",
        {
          email: userEmail,
          otp: otpValue,
        }
      );
      toast.success(res.data.message || "OTP verified successfully!");
      setTimeout(() => {
        navigate("/UserPage");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    try {
      // Replace with your backend endpoint for resending OTP
      await axios.get(
        "https://fixitbackend-7zrf.onrender.com/api/v1/user/verify",
        {
          email: userEmail,
        }
      );
      toast.success("OTP resent to your email.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-Poppins mt-[60px] flex flex-col items-center min-h-screen bg-[#FCFCFC]">
      <ToastContainer />
      <div className="sm:px-[60px] md:px-[70px] lg:px-[90px] w-full">
        <img src={Logo} alt="fixit-logo" className="pt-[16px]  pl-[12px]" />
      </div>
      <section className="w-full flex flex-col items-center">
        {/* <div className="flex items-center justify-center my-[40px] sm:mt-0">
          <FaEnvelope className="w-[134px] h-[107px] text-[#34A853]" />
        </div> */}
        <div className="items-center flex flex-col justify-center">
          <div className="font-Poppins items-center">
            <h2 className="font-[700] text-[24px] leading-[28px] text-[#333333] my-[32px] text-center">
              Enter OTP Code
            </h2>
            <p className="w-[310px] text-center font-Poppins font-[500] text-[16px] mb-[16px] leading-[24px] text-[#333333]">
              We sent a 6-digit code to{" "}
              <span className="text-[#259A48]">{email}</span>. Please enter it
              below to verify your account.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
            <div
              className="flex gap-2 justify-center mb-4"
              onPaste={handlePaste}
            >
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  ref={(el) => (inputsRef.current[idx] = el)}
                  className="w-10 h-12 text-center border rounded-md text-xl bg-white focus:border-green-600 outline-none"
                  disabled={loading}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-[220px] h-[48px] bg-[#15803D] rounded-[16px] text-white mt-6 hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </form>
          <p className="mt-4">
            Didn't receive the code?{" "}
            <span
              className="text-[#259A48] underline cursor-pointer"
              onClick={handleResend}
            >
              Resend OTP
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/Signup">
            <button className="text-[#259A48] font-Poppins font-[500] text-[16px] rounded-[12px] bg-[#F7F7F7] mt-[24px] w-[172px] h-[46px] mb-[27px] cursor-pointer">
              Back Log in
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OtpVerify;
