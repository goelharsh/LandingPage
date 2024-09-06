import React, { useState } from "react";

const Time = ({padding, width, textSize}) => {
  const [selectedTime, setSelectedTime] = useState("09:00 AM");

  function handleButtonClick(time) {
    setSelectedTime(time);
  }

  return (
    <div className={`${width ? width : 'w-[220px]'} h-auto bg-white p-3 shadow-md round-css ${padding ? padding : 0}`}>
      <div className="mb-2">
        <h2 className={`text-btn-color ${textSize} mb-1`}>Time</h2>
        <div className="flex flex-wrap gap-2">
          {["09:00 AM", "11:00 AM", "03:00 PM"].map((time) => (
            <button
              key={time}
              className={`w-[60px] h-[20px] text-[10px] rounded-md py-[1px] px-[2px] ${
                selectedTime === time ? "bg-[#81E2FD]" : "bg-white"
              }`}
              onClick={() => handleButtonClick(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <button className="text-white bg-blue-color w-full h-[30px] text-[10px] rounded-md flex items-center justify-center">
        Book Appointment
      </button>
    </div>
  );
};

export default Time;
