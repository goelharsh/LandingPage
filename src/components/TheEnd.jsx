import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
const TheEnd = () => {
    
  const list = [
    { value: "Lorem Ipsum" },
    { value: "Lorem Ipsum" },
    { value: "Lorem Ipsum" },
    { value: "Lorem Ipsum" },
    { value: "Lorem Ipsum" },
  ];
  return (
    <>
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

export default TheEnd;
