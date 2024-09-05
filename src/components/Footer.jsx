import React, { useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import HalfDoctor from "../assets/half_doctor.png";
import HalfMobile from "../assets/half_mobile.png";
import Gradient from "../assets/Gradient.png";
import RightGradient from "../assets/RightGradient.png";
import PlayStore from "../assets/PlayStore.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import WaterIcon from "../assets/Watericon.png";
import CustomButton from "./CustomButton";
import Benefits from "./Benefits";
import Overview from "./Overview";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
const Footer = () => {
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

  const list = [
    { value: "Lorem Ipsum" },
    { value: "Lorem Ipsum" },
    { value: "Lorem Ipsum" },
    { value: "Lorem Ipsum" },
    { value: "Lorem Ipsum" },
  ];
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

  const [formData, setFormData] = useState({
    name: "",
    service: "Select Service",
    countryCode: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log(formData);
  };
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Overview/>
        <Benefits position={"lg:flex-row"} className="top-[1280px] left-[36px]" />
        <Benefits position={"flex-row-reverse"}/>
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
          <img src={PlayStore} className="w-[525px] h-[165px]" />
        </div>
        <img src={RightGradient} />
      </div>

      {/* about us  */}
      <div className="w-full h-[656px] flex items-center gap-16 justify-around space-y-12">
        <div className="w-[655px] h-auto flex flex-col gap-5">
          <h2 className="text-[36px] font-bold">About Us</h2>
          <p className="font-semibold">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <CustomButton width={"164px"} height={"60px"} text={"Get Started"} />
        </div>

        <div className="w-[480px] h-[496px] border-[2px] border-blue-color rounded-md p-6 shadow-md bg-white">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 bg-input-color rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-input-color  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Service</option>
              <option value="Lorem Ipsum 1">Lorem Ipsum 1</option>
              <option value="Lorem Ipsum 2">Lorem Ipsum 2</option>
              <option value="Lorem Ipsum 3">Lorem Ipsum 3</option>
              <option value="Lorem Ipsum 4">Lorem Ipsum 4</option>
            </select>

            <div className="flex space-x-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md bg-input-color focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Canda">Canda</option>
                <option value="New York">New York</option>
              </select>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="flex-1 px-4 py-2 border border-gray-300 bg-input-color  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 bg-input-color  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-24 px-4 py-2 border border-gray-300 bg-input-color  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-color rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Details
            </button>
          </form>
        </div>
      </div>

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

      <footer className="w-full py-6">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-start">
            <div className="w-1/4 flex flex-col">
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex gap-x-3 mt-20">
                <div className="flex w-[34px] h-[34px] text-white justify-center items-center bg-blue-color rounded-full">
                  <FaFacebook />
                </div>
                <div className="flex w-[34px] h-[34px] text-white justify-center items-center bg-blue-color rounded-full">
                  <BsTwitter />
                </div>
                <div className="flex w-[34px] h-[34px] text-white justify-center items-center bg-blue-color rounded-full">
                  <BsInstagram />
                </div>
                <div className="flex w-[34px] h-[34px] text-white justify-center items-center bg-blue-color rounded-full">
                  <LiaLinkedin />
                </div>
              </div>
            </div>
            <div className="flex gap-x-36">
              {/* Support */}
              <section className="w-1/4">
                <h2 className="font-bold text-lg mb-2">Support</h2>
                {list.map((item, index) => (
                  <h3 className="text-md my-3" key={index}>
                    {item.value}
                  </h3>
                ))}
              </section>
              {/* Services */}
              <section className="w-1/4">
                <h2 className="font-bold text-lg mb-2">Services</h2>
                {list.map((item, index) => (
                  <h3 className="text-md my-3" key={index}>
                    {item.value}
                  </h3>
                ))}
              </section>
              {/* Legal */}
              <section className="w-1/4">
                <h2 className="font-bold text-lg mb-2">Legal</h2>
                {list.map((item, index) => (
                  <h3 className="text-md my-3" key={index}>
                    {item.value}
                  </h3>
                ))}
              </section>
            </div>
          </div>
        </div>
      </footer>

      {/* last portion  */}
      <div className="w-full">
        <div className="w-[95%] bg-blue-color h-[4px] mx-auto"></div>
        <div className="w-[95%] place-content-end mx-auto mb-6">
          <span className="flex justify-end text-grey-color">
            Webapp 2024 &copy; All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
