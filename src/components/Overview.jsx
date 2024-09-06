import React from "react";
import Doctor from "../assets/dr_jenny.png";
import Time from "./Time";

const Overview = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto mx-auto flex flex-col lg:flex-row justify-center items-center gap-44 py-10 mb-20">
      {/* Left Section */}
      <div className="flex gap-2">
        {/* Vertical Section */}
        <div className="w-[269px] h-[314px] bg-white rounded-md p-4 shadow-lg bottom-css mt-10">
          <h2 className="font-bold text-[#81E2FD] text-[18px] mb-4">
            Doctors Details
          </h2>
          {/* 1st  */}
          <div className="flex items-center mb-6 space-x-4 pb-2 rounded-md  py-2">
            <div className="w-[34px] h-[34px] border border-btn-color rounded-full overflow-hidden">
              <img src={Doctor} alt="Doctor" />
            </div>
            <div>
              <h2 className="font-semibold text-[16px]">Dr. Jenny Wilson</h2>
              <h2 className="text-grey-color opacity-70">Dental Surgeon</h2>
            </div>
          </div>

          {/* 2nd  */}
          <div className="flex items-center mb-6 space-x-4 pb-2 rounded-md py-2">
            <div className="w-[34px] h-[34px] border border-btn-color rounded-full overflow-hidden">
              <img src={Doctor} alt="Doctor" />
            </div>
            <div>
              <h2 className="font-semibold text-[16px]">Dr. Jenny Wilson</h2>
              <h2 className="text-grey-color opacity-70">Dental Surgeon</h2>
            </div>
          </div>
          {/* 3rd  */}
          <div className="flex items-center mb-6 space-x-4 pb-2 rounded-mdpy-2">
            <div className="w-[34px] h-[34px] border border-btn-color rounded-full overflow-hidden">
              <img src={Doctor} alt="Doctor" />
            </div>
            <div>
              <h2 className="font-semibold text-[16px]">Dr. Jenny Wilson</h2>
              <h2 className="text-grey-color opacity-70">Dental Surgeon</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* Progress Section */}
          <div className="flex flex-col w-[234px] gap-10 round-css">
            <h2 className="font-bold text-[#81E2FD] text-[18px] pl-4">
              Progress
            </h2>
            <div className="flex gap-4 items-end justify-center w-[100%] h-[150px]">
              {[60, 80, 120, 100, 70, 150, 40].map((height, index) => (
                <div
                  key={index}
                  className="flex w-[6px] flex-col items-center gap-2 rounded-full"
                >
                  <div
                    className="w-[6px] gradient3 rounded-full"
                    style={{
                      height: `${height}px`,
                    }}
                  ></div>
                  <span className="font-semibold text-sm">{`0${
                    index + 1
                  }`}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Time Component */}
          <div>
            <Time
              padding={"p-[13px]"}
              width={"w-[234px]"}
              textSize={"text-[18px]"}
            />
          </div>
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
