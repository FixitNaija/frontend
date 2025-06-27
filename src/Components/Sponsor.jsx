import React from "react";
import Grazac from "../assets/Grazac.png";
import Hack from "../assets/Hack.png";
import Huxxle from "../assets/Huxxle.png";
import Ogun from "../assets/Ogun.png";

const Sponsor = () => {
return (
<div>
    <div className="animation-slideLeft hover:[animation-play-state:paused] whitespace-nowrap">
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
);
};

export default Sponsor;
