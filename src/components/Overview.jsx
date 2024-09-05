import React from "react";
import Doctor from "../assets/dr_jenny.png";
import Time from "./Time";
const Overview = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 py-10 mb-20">
    {/* Left Section */}
    <div className="flex gap-8">
      {/* Vertical Section */}
      <div className="w-[269px] bg-white rounded-md p-4 shadow-lg">
        <h2 className="font-bold text-blue-color text-[18px] mb-4">
          Doctor's Details
        </h2>
        {/* Doctor Details */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex items-center mb-4 space-x-4 border-b pb-2"
          >
            <div className="w-[34px] h-[34px] border border-btn-color rounded-full overflow-hidden">
              <img src={Doctor} alt="Doctor" />
            </div>
            <div>
              <h2 className="font-semibold text-[16px]">Dr. Jenny Wilson</h2>
              <h2 className="text-grey-color opacity-70">Dental Surgeon</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className="flex flex-col w-[234px] gap-4">
        <h2 className="font-bold text-blue-color text-[18px]">Progress</h2>
        <div className="flex items-end justify-between w-full h-[150px]">
          {[60, 80, 120, 100, 70, 150, 40].map((height, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-[10px] bg-gradient-to-t from-black to-blue-400"
                style={{ height: `${height}px` }}
              ></div>
              <span className="text-sm">{`0${index + 1}`}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Time Component */}
      <div>
        <Time />
      </div>
    </div>

    {/* Right Section */}
    <div className="max-w-[580px] text-center lg:text-left">
      <h2 className="font-bold text-[36px] mb-4">Overview</h2>
      <p className="text-grey-color mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </p>
      <button className="w-full lg:w-[315px] h-[60px] text-white rounded-md bg-blue-color text-[24px]">
        Learn more about us
      </button>
    </div>
  </div>
  );
};

export default Overview;
