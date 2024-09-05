import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "Select Service",
    countryCode: "USA", 
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
    <div className="w-full h-[656px] flex items-center gap-16 justify-around space-y-8">
      <div className="w-[655px] h-auto flex flex-col gap-5">
        <h2 className="text-[36px] font-bold">About Us</h2>
        <p className="font-semibold">Lorem Ipsum is simply dummy text of the printing.</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <CustomButton width={"164px"} height={"60px"} text={"Get Started"}/>
      </div>

      <div className="w-[480px] h-[496px] border-[2px] border-blue-color rounded-md p-6 shadow-md bg-white">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h2>

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
  );
};

export default About;