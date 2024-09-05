import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import WaterIcon from "../assets/Watericon.png";

const Carousal = () => {
  const items = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: WaterIcon,
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      icon: WaterIcon,
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets.",
      icon: WaterIcon,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(items.length / 2)
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Carousal  */}
      <div className="w-full py-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-2">How Our Platform Works</h2>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="carousel-container flex items-center justify-center overflow-hidden relative">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item transition-all duration-500 transform ${
                currentIndex === index
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-50"
              }`}
              style={{ width: "300px", height: "210px" }}
            >
              <div className="flex flex-col items-center justify-center mx-4">
                <div className="bg-blue-color w-[50px] h-[50px] rounded-full flex items-center justify-center mb-2">
                  <img src={item.icon} alt="icon" className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-6 gap-4">
          {/* Left Arrow */}
          <div
            className="bg-blue-color w-[60px] h-[40px] rounded-md flex items-center justify-center"
            onClick={handlePrev}
          >
            <button className=" text-2xl text-white" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
          </div>
          {/* Right Arrow */}
          <div
            className="bg-blue-color w-[60px] h-[40px] rounded-md flex items-center justify-center"
            onClick={handleNext}
          >
            <button
              className="flex items-center justify-center text-2xl text-white"
              onClick={handleNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
