    import React from "react";
    import Logo from "../assets/Fixitlogo.png";
    import { FaEnvelope } from "react-icons/fa";
    import { Link, useLocation } from "react-router";
    // import cookie from "js-cookie";



// {response.data.email || 'User'}




    const Verify = () => {
        const location = useLocation();
        const userEmail = location.state?.email || "example203@gmail.com"; // fallback if not passed



        
    return (
        <div className="font-Poppins mt-[60px]">
        <div className="sm:px-[60px] md:px-[70px] lg:px-[90px] w-full">
            <img src={Logo} alt="fixit-logo" className="pt-[16px]  pl-[12px] " />
        </div>
        <section>
            <div className=" flex items-center justify-center my-[40px] sm:mt-0 ">
            <div className="flex  flex-row justify-center items-center  mt-[60px]  ">
                <FaEnvelope className="w-[134px] h-[107px] text-[#34A853]  " />
            </div>
            </div>

            <div className="items-center flex flex-col justify-center">
            <div className="font-Poppins items-center">
                <h2 className="font-[700] text-[24px] leading-[28px]  text-[#333333] my-[32px] text-center">
                Verify your email
                </h2>
                <p className="w-[310px] text-center font-Poppins font-[500] text-[16px] mb-[16px] leading-[24px] text-[#333333]">
                To keep a trusted and safe community we’ve sent an email to{" "}
                <span className="text-[#259A48] ">{userEmail} </span>for
                verification.
                </p>
            </div>
            <p>
                Did not receive?{" "}
                <span className="text-[#259A48] "> Resend Mail </span>
            </p>
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
    };

    export default Verify;
