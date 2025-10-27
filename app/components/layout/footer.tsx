import React from "react";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="bg-pink-900 lg:p-5 flex flex-col mt-10 p-2 items-end">
        <div className="lg:grid flex flex-col text-white lg:grid-cols-5 w-full bg-pink-900 lg:p-20">
          <div className="col-span-2 lg:p-5 flex lg:flex-col flex-col">

            <h1 className="lg:text-5xl text-4xl w-74 font-semi-bold mt-10 flex gap-2 px-5 lg:px-0">
              T-Bella
              <span className="border border-white size-5 flex justify-center items-center text-sm rounded-full ">
                R
              </span>
            </h1>

            <p className="lg:text-left text-center leading-snug lg:text-lg font-light font-sans text-stone-300 pt-10">
              We provide quality <br className="lg:hidden" /> services{" "}
              <br className="hidden lg:block" />to all our dear customers
              with plenty 
              <br className="lg:hidden" /> of trust{" "}
              <br className="hidden lg:block" /> and honesty.
            </p>
          

            <div className="lg:flex gap-5 mt-9 text-2xl hidden ">
              <FaTiktok />
              <AiOutlineInstagram />
            </div>
          </div>
          <div className="col-span-1 p-5 flex flex-col lg:text-left text-center">
            <h2 className="text-2xl font-bold">Quick links</h2>
            <ul className="lg:mt-5 mt-2 list-none flex flex-col gap-y-5 text-stone-200 font-light text-lg">
              <li className="group relative">
                Terms & Conditions
                <span className="bg-gradient-to-r from-white to-stone-500 absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li className="group relative">
                Privacy Policy
                <span className="bg-gradient-to-r from-white to-stone-500 absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li className="group relative">
                Contact Us
                <span className="bg-gradient-to-r from-white to-stone-500 absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li className="group relative">
                Terms of Service
                <span className="bg-gradient-to-r from-white to-stone-500 absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
              <li className="group relative ">
                Refund Policy
                <span className="bg-gradient-to-r from-white to-stone-500 absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full"></span>
              </li>
            </ul>
          </div>
          <div className="col-span-2 p-5 flex flex-col ">
            <h2 className="text-2xl font-bold lg:text-left text-center">
              Connect with us
            </h2>
            <p className="w-full text-center lg:text-left leading-snug text-lg font-light font-sans text-stone-200 pt-4">
              Suscribe to out Newsletter to be the first to{" "}
              <br className="hidden lg:block" /> be aware of recent production
              and other <br className="hidden lg:block" />
              production offers.
            </p>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-xl relative mt-10">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter email adress "
                  className="h-full w-full focus:outline-stone-500  focus:outline rounded-xl font-light text-stone-400 bg-zinc-400/30 p-6 hover:border-slate-200"
                />
                <button className="size-8 absolute top-[50%] -translate-y-[50%] right-2 flex justify-center items-center bg-emerald-950 text-stone-400 rounded-lg">
                  <FaArrowRightLong />
                </button>
              </div>
              <div className="flex gap-5 mt-9 mb-5 text-2xl lg:hidden ">
                <FaTiktok className="hover:text-stone-500" />
                <SiWhatsapp className="hover:text-stone-500" />
                <AiOutlineInstagram className="hover:text-stone-500" />
              </div>
            </div>
          </div>
        </div>
        <span className="text-stone-300 font-thin flex items-center ">
          <FaRegCopyright /> T-Bella{" "}
          <span className="font-bold text-stone-400">2025.</span>
        </span>
      </div>
    </>
  );
};

export default Footer;
