import React from "react";
import Gradient from "../assets/Gradient.png";
import RightGradient from "../assets/RightGradient.png";
import Playstore from "../assets/PlayStore.png";
const PlayStore = () => {
  return (
    <div>
      {/* Google play store  */}
      <div className="w-full h-[289px] my-20 flex justify-between">
        <img src={Gradient} />
        <div className="flex gap-20 justify-center items-center">
          <div className="w-[262px] h-[112px]">
            <h2 className="font-bold text-[24px]">Get the app</h2>
            <p className="font-semibold text-[20px]">
              Download App On Demand to see a doctor in minutes
            </p>
          </div>
          <img src={Playstore} className="w-[525px] h-[165px]" />
        </div>
        <img src={RightGradient} />
      </div>
    </div>
  );
};

export default PlayStore;
