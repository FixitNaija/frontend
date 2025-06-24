import React from "react";
import Footer from "../Components/footer";
import Location from "../assets/location.png";
import Todo from "../assets/todo.png";
import Ppl from "../assets/ppl.png";
import Eye from "../assets/eye.png";
import Correct from "../assets/correct.png";
import Round from "../assets/rounded.png";
import ArrowUp from "../assets/arrowup.png";
import Love from "../assets/love.png";
import Navbar from "../Components/navbar";
import Join from "../Components/Join";

const AboutUs = () => {
  return (
    <div className="bg-[#FFFFFF] md:bg-[#FBFBFB] w-full font-poppins  ">
      <Navbar />
      <div className="bg-[#15803D] flex flex-col sm:w-full sm:h-[364px]  items-center text-center ">
        <h1 className=" text-[#ffffff] font-[700] text-[40px] leading-[48px] justify-center  align-middle w-[344px] pt-[30px] sm:pt-[90px] sm:w-[598px] ">
          Building Better Communities Together{" "}
        </h1>
        <p className=" font-[500] text-[16px] leading-[24px] sm:w-[689px] py-[16px] px-[5px] text-[#DCFCE7] align-middle ">
          FixIt Naija is Nigeria's leading civic technology platform, empowering
          citizens to report infrastructure issues and track their resolution.
          We're building a more responsive and accountable system for all
          Nigerians.
        </p>
      </div>

      <div className="flex flex-col font-poppins items-center text-center  bg-[#FFFFFF] pb-[60px] ">
        <h1 className="font-[700] text-[24px] leading-[36px] text-[#333333] pt-[48px] sm:pt-[60px]">
          Our Mission
        </h1>
        <p className="justify-center text-center w-[325px] sm:w-[628px] font-[400] text-[16px] leading-[29px] font-poppins text-[#4b4b4b] pt-[34px]  ">
          To bridge the gap between Nigerian citizens and their government by
          providing a transparent, efficient platform for reporting and tracking
          infrastructure issues. We believe that when citizens have a voice and
          governments are accountable,communities thrive.
        </p>
        <div className="flex flex-col justify-center  font-poppins bg-[#F3F3F3] mt-[10px] md:w-[770px]   ">
          <h1 className="text-[16px] leading-[28px]  text-left font-[600]  text-[#15803D] px-[24px] py-[16px] ">
            The Problem We're Solving
          </h1>
          <p className="font-Poppins font-[400] text-[14px] leading-[24px] px-[24px] py-[16px] text-left text-[#008435] w-[300px] sm:w-[628px] md:w-[750px] ">
            For too long, Nigerian citizens have struggled with inadequate
            infrastructure and limited channels to report issues to relevant
            authorities. Traditional complaint systems are often slow, opaque,
            and ineffective. FixIt Naija changes this by creating a direct,
            transparent line of communication that benefits everyone.{" "}
          </p>
        </div>
      </div>

      <section className="bg-[#FBFBFB] ">

        <div className=" ">
          <div className="sm:px-[100px] sm:pt-[60px] pb-[16px] border border-[#FFFFFF] ">
            <h1 className="font-poppins font-[700] pt-[16px] text-[24px] leading-[36px] text-center align-middle text-[#333333]">
              {" "}
              Our Impacts{" "}
            </h1>
            <p className=" font-poppins text-[#868686] font-[400] text-[16px] leading-[24px] my-[8px] sm:my-[16px] text-center align-middle  ">
              Real numbers, real change across Nigeria
            </p>
          </div>
        </div>

        <section className="flex flex-col sm:flex-row justify-between gap-[5px] py-[10px] my-[20px] items-center bg-[#FBFBFB]">
          <div className="  mx-auto border border-white rounded-[16px] px-[16px] shadow-[0px 4px 24px 0px #00000014] h-[234px] bg-[#FFFFFF] py-[24px] px-[16px] flex flex-col items-center justify-center   w-[310px] sm:w-[248px]">
            <img className="pt-[24px]" src={Location} alt=" location " />
            <div className="text-center font-poppins py-[10px]">
              <p className="font-Poppins font-[700] text-[24px] leading-[24px] text-center mx-auto  ">
                2,847
              </p>
              <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[8px] text-[#333333] ">
                Issues Reported
              </p>

              <p className="lg:w-[232px] font-[400] text-[14px] leading-[24px] text-center mx-auto">
                Citizens have reported infrastructure issues across Nigeria.
              </p>
            </div>
          </div>
          <div className="  mx-auto border border-white rounded-[16px] px-[16px] shadow-[0px 4px 24px 0px #00000014] h-[234px] bg-[#FFFFFF] py-[24px] px-[16px] flex flex-col items-center justify-center   w-[310px] sm:w-[248px]">
            <img className="pt-[24px]" src={Correct} alt="" />
            <div className="text-center font-poppins py-[10px]">
              <p className="font-Poppins font-[700] text-[24px] leading-[24px] text-center mx-auto  ">
                1,321
              </p>
              <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[8px] text-[#333333] ">
                Issues Resolved
              </p>
              <p className="lg:w-[232px] font-[400] text-[14px] leading-[24px] text-center mx-auto">
                Successfully Resolved through community engagement
              </p>
            </div>
          </div>

          <div className="  mx-auto border border-white rounded-[16px] px-[16px] shadow-[0px 4px 24px 0px #00000014] h-[234px] bg-[#FFFFFF] py-[24px] px-[16px] flex flex-col items-center justify-center   w-[310px] sm:w-[248px]">
            <img className="pt-[24px]" src={Ppl} alt="" />
            <div className="text-center font-poppins py-[10px]">
              <p className="font-Poppins font-[700] text-[24px] leading-[24px] text-center mx-auto  ">
                12,000
              </p>
              <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[8px] text-[#333333] ">
                Active Citizens
              </p>
              <p className="lg:w-[232px] font-[400] text-[14px] leading-[24px] text-center mx-auto">
                Engaged citizens making a difference.
              </p>
            </div>
          </div>

          <div className="  mx-auto border border-white rounded-[16px] px-[16px] shadow-[0px 4px 24px 0px #00000014] h-[234px] bg-[#FFFFFF] py-[24px] px-[16px] flex flex-col items-center justify-center   w-[310px] sm:w-[248px]">
            <img className="pt-[24px]" src={ArrowUp} alt=" increase rate " />
            <div className="text-center font-poppins py-[10px]">
              <p className="font-Poppins font-[700] text-[24px] leading-[24px] text-center mx-auto  ">
                97%
              </p>
              <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[8px] text-[#333333] ">
                Success Rate
              </p>
              <p className="lg:w-[232px] font-[400] text-[14px] leading-[24px] text-center mx-auto">
                Citizens have reported infrastructure issues across Nigeria
              </p>
            </div>
          </div>
        </section>
      </section>
     
<section className=" bg-[#FFFFFF]">
  <div className=" ">
          <div className="sm:px-[100px] sm:py-[32px] py-[16px] border border-[#FFFFFF] ">
            <h1 className="font-poppins font-[700]  text-[24px] leading-[36px] text-center align-middle text-[#333333]">
              {" "}
              Our Values{" "}
            </h1>
            <p className=" font-poppins text-[#868686] font-[400] text-[16px] leading-[24px] my-[8px] sm:my-[16px] text-center align-middle  ">
             The principles that guide everything we do
            </p>
          </div>
        </div>

      <section className="flex flex-col sm:flex-row md:justify-center md:gap-0 justify-between gap-[40px] py-[30px] items-center">

        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center w-[310px] sm:w-[248px]">
          <img className="pt-[24px]" src={Eye} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Transparency
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              We believe in open, transparent processes that build trust between
              citizens and government.
            </p>
          </div>
        </div>
        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center   w-[310px] sm:w-[248px]">
          <img className="pt-[24px]" src={Ppl} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Community First
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Every feature we build is designed to empower communities and
              amplify citizen voices.
            </p>
          </div>
        </div>

        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center   w-[310px] sm:w-[248px]">
          <img className="pt-[24px]" src={Love} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Social Impact
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              We measure success by the positive change we create in Nigerian
              communities
            </p>
          </div>
        </div>

        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center   w-[310px] sm:w-[248px]">
          <img className="pt-[24px]" src={Round} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[10px] ">
              Result Driven
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto ">
              We focus on measurable outcome that improve infrastructure and
              quality of life.
            </p>
          </div>
        </div>
      </section>
      </section>
      <Join/>
      <Footer />
    </div>
  );
};

export default AboutUs;
