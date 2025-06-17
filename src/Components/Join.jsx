import React from "react";
import Grazac from "../assets/Grazac.png";
import Hack from "../assets/Hack.png";
import Huxxle from "../assets/Huxxle.png";
import Ogun from "../assets/Ogun.png";
import Correct from "../assets/correct.png";
import Location from "../assets/location.png";
import Todo from "../assets/todo.png";

const Join = () => {
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
      <div className='relative bg-[url("../src/assets/bg2.jpg")] bg-center bg-cover  bg-no-repeat w-full h-[460px] mt-[20px] bg-opacity-60'>
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

            <div className="flex gap-[16px] justify-center mb[20px] px-[16px]">
              <button className="text-white bg-[#15803D] hover:bg-[#A1EEAF] mt-[24px] rounded-[8px] h-[48px] w-[200px] p-[5px] mb-[100px] cursor-pointer">
                {" "}
                Join Community{" "}
              </button>
              <button className="text-black bg-[#ffff] hover:bg-[#A1EEAF] mt-[24px] rounded-[8px] h-[48px] w-[200px] p-[5px] mb-[100px] cursor-pointer">
                {" "}
                Report Issue{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Join;
// import React from "react";
// import Grazac from "../assets/Grazac.png";
// import Hack from "../assets/Hack.png";
// import Huxxle from "../assets/Huxxle.png";
// import Ogun from "../assets/Ogun.png";
// import Correct from "../assets/correct.png";
// import Location from "../assets/location.png";
// import Todo from "../assets/todo.png";

// const Join = () => {
//   return (
//     <div>
//       <div className="flex flex-col my-[20px] justify-center items-center">
//         <p className="font-[700] font-poppins text-[40px] leading-[48px] text-center my-[32px] text-[#333333] ">
//           {" "}
//           How It Works{" "}
//         </p>

//         <p className="font-[400] w-[346px]  font-poppins text-[14px] leading-[24px] text-center mb-[50px] text-[#333333] ">
//           Simple steps to report and resolve infrastructure <br /> issues
//         </p>
//       </div>
//       <div className="flex flex-col sm:flex-row w-full px-[16px]  gap-[32px]  ">
//         <div
//           className="  mx-auto border hover:bg-amber-400 border-white rounded-[16px] h-[233px] sm:h-[213px] w-[320px] sm:w-[392px] pb-[16px]  bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center "
//           style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
//         >
//           <img className="pt-[24px] " src={Todo} alt="" />
//           <div className="text-center font-poppins">
//             <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[12px] ">
//               Report an Issue
//             </p>
//             <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
//               Submit details about infrastructure problems in your area with
//               photos and location.
//             </p>
//           </div>
//         </div>

//         <div
//           className=" p-[24px] m-auto flex flex-col items-center justify-center rounded-[16px]  h-[233px]  sm:h-[213px] w-[320px] sm:w-[392px] pb-[16px]  bg-[#fbfbfb]"
//           style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
//         >
//           <img src={Location} alt="" />
//           <div className="text-center">
//             <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[12px]">
//               Track Progress
//             </p>
//             <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
//               Follow the status of reported issues and receive updates as
//               they’re addressed.
//             </p>
//           </div>
//         </div>
//         <div
//           className="p-[24px] m-auto  flex flex-col items-center justify-center rounded-[16px]pb-[16px]  h-[233px]  sm:h-[213px] w-[320px] sm:w-[392px] bg-[#fbfbfb] rounded-[16px]"
//           style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
//         >
//           <img src={Correct} alt="" />
//           <div className="text-center">
//             <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[12px]">
//               See Results
//             </p>
//             <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
//               View analytics on issue resolution and impact on your community.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <p className="justify-center flex font-poppins text-[24px] my-[40px]">
//           Our Trusted Partners
//         </p>
//         <div className=" flex flex-1/2 sm:justify-between w-full sm:flex sm:flex-row  mx-auto ">
//           <div>
//             <img src={Grazac} alt="" />
//           </div>
//           <div>
//             <img src={Hack} alt="" />
//           </div>
//           <div>
//             <img src={Ogun} alt="" />
//           </div>
//           <div>
//             <img src={Huxxle} alt="" />
//           </div>
//         </div>
//       </div>
//       <div className='relative bg-[url("../src/assets/bg2.jpg")] bg-center bg-cover  bg-no-repeat w-full h-[460px] mt-[20px] bg-opacity-60'>
//         {/* overlay  */}
//         <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
//         <div className="relative z-50">
//           <div className="pt-[100px] text-center font-poppins text-white align-middle">
//             <p className="text-white font-poppins text-[40px] mb-[16px] font-bold leading-[36px] sm:leading-[48px]  ">
//               Join the Movement for Better Infrastructure
//             </p>
//             <p className="font-poppins text-[16px] sm:mb-[26px]">
//               Be part of the solution by reporting issues in your community and
//               tracking their <br />
//               resolution.
//             </p>

//             <div className="flex gap-[16px] justify-center mb[20px] px-[16px]">
//               <button className="text-white bg-[#15803D] hover:bg-[#A1EEAF] mt-[24px] rounded-[8px] h-[48px] w-[200px] p-[5px] mb-[100px] cursor-pointer">
//                 {" "}
//                 Join Community{" "}
//               </button>
//               <button className="text-black bg-[#ffff] hover:bg-[#A1EEAF] mt-[24px] rounded-[8px] h-[48px] w-[200px] p-[5px] mb-[100px] cursor-pointer">
//                 {" "}
//                 Report Issue{" "}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Join;
