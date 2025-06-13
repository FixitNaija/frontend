import React from "react";

import { BsFacebook } from "react-icons/bs";
import Logo from "../assets/Fixitlogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router";

function footer() {
  return (
    <div className="w-full px-[11px] py-10 text-white bg-[#0F1419] font-work sm:px-[40px] md:px-[80px] lg:px-[100px] box-border overflow-x-hidden">
      {/* Desktop & Tablet view */}
      <div className="hidden md:block w-full">
        <div className="flex flex-col font-work">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="lg:text-[20px] lg:mt-2 lg:w-[436px] font-work lg:font-[400] lg:justify-center lg:leading-[36px] sm:p-1">
              <img
                className="cursor-pointer max-w-[160px] w-full h-auto"
                src={Logo}
                alt="Fixitnaija Logo"
              />
              <h3 className="pt-2">
                Empowering Nigerians to report, track, and resolve
                infrastructure issues across the country
              </h3>
            </div>
            {/* flex links */}
            <div className="flex flex-col sm:flex-row scroll-smooth leading-[18px] sm:leading-[24px] justify-evenly w-full max-w-3xl text-[14px] font-[400] font-work pb-6 gap-8">
              <div className="min-w-[120px]">
                <h3 className="font-bold mb-2">Get involved</h3>
                <ol className="cursor-pointer space-y-1">
                  <li className="hover:text-[#0011ff]">Contact us</li>
                  <Link to="/AboutUs">
                    <li className="hover:text-[#0011ff]">About us</li>
                  </Link>
                  <li className="hover:text-[#0011ff]">Support</li>
                  <li>
                    <a
                      href="#FAQ"
                      className="hover:text-[#0011ff] block scroll-smooth"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="hover:text-[#0011ff]">Blog</li>
                </ol>
              </div>
              <div>
                <h3 className="font-bold mb-2">Stay updated</h3>
                <ol className="cursor-pointer space-y-1">
                  <li className="hover:text-[#0011ff]">Announcements</li>
                  <li className="hover:text-[#0011ff]">News letter</li>
                  <li className="hover:text-[#0011ff]">Feedback</li>
                  <li className="hover:text-[#0011ff]">Follow us</li>
                  <li className="hover:text-[#0011ff]">Updates</li>
                </ol>
              </div>
              <div className="min-w-[180px]">
                <h3 className="font-bold mb-2">Contact us</h3>
                <ol className="cursor-pointer space-y-1">
                  <li className="hover:text-[#0011ff59] hover:underline">
                    Email: info@fixitnaija.com
                  </li>
                  <li className="hover:text-[#0011ff59]">
                    Phone : 09134029683
                  </li>
                  <li className="hover:text-[#575db059] hover:underline">
                    Whatsapp : 09134029683
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-6 border-t-2 border-white pt-6">
          <div className="flex flex-col md:flex-row gap-4 font-work text-[#FFFFFF]">
            <p>© 2025 Fixitnaija All rights reserved.</p>
            <p className="underline cursor-pointer">Privacy Policy</p>
            <p className="underline cursor-pointer">Terms of Service</p>
            <p className="underline cursor-pointer">Cookies Settings</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <BsFacebook />
            <FaInstagramSquare />
            <RiTwitterXFill />
            <FaLinkedin />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block md:hidden w-full">
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-2 w-full">
            <img
              className="cursor-pointer max-w-[140px] w-full h-auto"
              src={Logo}
              alt="Fixitnaija Logo"
            />
            <h3 className="pt-2 text-[15px]">
              Empowering Nigerians to report, track, and resolve infrastructure
              issues across the country
            </h3>
          </div>
          <div>
            <h3 className="font-bold">Get involved</h3>
            <ol className="cursor-pointer my-4 leading-8 space-y-1">
              <li className="hover:text-[#0011ff]">Contact us</li>
              <li className="hover:text-[#0011ff]">About us</li>
              <li className="hover:text-[#0011ff]">Support</li>
              <li>
                <a
                  href="#FAQ"
                  className="hover:text-[#0011ff] block scroll-smooth"
                >
                  FAQs
                </a>
              </li>
              <li className="hover:text-[#0011ff]">Blog</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold">Stay updated</h3>
            <ol className="cursor-pointer space-y-1">
              <li className="hover:text-[#0011ff]">Announcements</li>
              <li className="hover:text-[#0011ff]">News letter</li>
              <li className="hover:text-[#0011ff]">Feedback</li>
              <li className="hover:text-[#0011ff]">Follow us</li>
              <li className="hover:text-[#0011ff]">Updates</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold">Contact us</h3>
            <ol className="cursor-pointer space-y-1">
              <li className="hover:text-[#0011ff59] hover:underline">
                Email: info@fixitnaija.com
              </li>
              <li className="hover:text-[#0011ff59]">Phone : 09134029683</li>
              <li className="hover:text-[#575db059] hover:underline">
                Whatsapp : 09134029683
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full my-8 border-t-2 border-white"></div>
        <div className="block my-4 pb-8 font-work text-[#FFFFFF] space-y-2">
          <p className="underline cursor-pointer">Privacy Policy</p>
          <p className="underline cursor-pointer">Terms of Service</p>
          <p className="underline cursor-pointer">Cookies Settings</p>
          <p>© 2025 Fixitnaija All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-4 w-[132px]">
          <BsFacebook />
          <FaInstagramSquare />
          <RiTwitterXFill />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}

export default footer;
