import React from "react";
import Banner from "../assets/banner.png";
import Mobile from "../assets/mobile.png";
import Surgeon from "../assets/surgeon.png";
import { FaStar } from "react-icons/fa6";
import Time from "./Time";

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-[1275px] mx-auto flex items-center justify-between py-32 mt-20">
      {/* Left Section */}
      <div className="w-[673px] flex flex-col space-y-6">
        <h1 className="font-semibold text-5xl leading-tight">
          Empowering Clinics to Scale New Heights in{" "}
          <span className="text-blue-color">Healthcare.</span>
        </h1>
        <p className="text-lg text-grey-color font-normal w-[614px]">
          Discover a seamless, efficient, and user-friendly platform designed to
          enhance clinic operations, empower doctors, and provide patients with
          the best care possible. Join us in transforming the future of
          healthcare today.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative w-[500px] h-[345px]">
        {/* Banner and Mobile Images */}
        <img src={Banner} alt="Banner" className="w-full h-auto" />

        <div className="absolute top-[44px] left-[10px] z-10">
          <img src={Mobile} alt="Mobile" className="w-[142px] h-[261px]" />
        </div>

        {/* Star section */}
        <div className="absolute top-[-10px] left-[25px] z-10 rounded-lg flex gap-4 bg-white p-2 py-3 items-center shadow-lg">
          <FaStar className="text-blue-color bg-star-background p-1" />
          <h2>Easy Appointment Booking</h2>
        </div>

        {/* Surgeon section */}
        <div className="flex justify-between gap-3 bg-white rounded-md absolute top-[50px] left-[330px] p-2 pl-7 shadow-lg">
          <div className="bg-cream rounded-md w-[64px] h-[62px] mt-[7px] overflow-hidden">
            <img src={Surgeon} alt="Surgeon" />
          </div>
          <div className="w-[150px] flex flex-col justify-center">
            <h2 className="font-semibold text-[16px]">Dr. Jenny Wilson</h2>
            <h2 className="text-grey-color opacity-70">Dental Surgeon</h2>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-300" />
              <h2>4.8</h2>
            </div>
          </div>
        </div>

        {/* Time Component */}
        <div className="absolute bottom-0 right-0 top-[200px]">
          <Time />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
