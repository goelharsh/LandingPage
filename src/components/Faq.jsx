import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import HalfDoctor from "../assets/half_doctor.png";
import HalfMobile from "../assets/half_mobile.png";
const Faq = () => {
  const faqList = [
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "It is a long established fact that a reader will be distracted by the readable content.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ
  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      {/* faq section  */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex gap-48">
        {/* left  */}
        <div className="w-[50%]">
          <h2 className="text-2xl font-bold text-black mb-2">
            Got Any Questions?
          </h2>
          <p className="text-blue-color font-bold mb-6">
            We have your answers.
          </p>

          <div className="space-y-4">
            {faqList.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-5">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-md text-gray-700">{item.question}</p>
                  {activeIndex === index ? (
                    <FiChevronUp className="text-blue-400" />
                  ) : (
                    <FiChevronDown className="text-blue-400" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* right  */}
        <div className="relative">
          <img src={HalfDoctor} className="relative z-10" />

          <div className="absolute top-28 left-48 w-full h-full flex items-center justify-center">
            <img src={HalfMobile} className="z-20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
