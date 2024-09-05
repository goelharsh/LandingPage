import React from "react";
import Mobile from "../assets/mobile.png";
import Vector from "../assets/Vector.png";
import Bill from "../assets/Bills.png";
import User from "../assets/User.png";
import { MdOutlineDone } from "react-icons/md";

const list = [
  {
    title: "Lorem Ipsum",
    desc: "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
    image: Vector
  },
  {
    title: "Lorem Ipsum",
    desc: "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
    image: Bill

  },
  {
    title: "Lorem Ipsum",
    desc: "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
    image: User

  },
  {
    title: "Lorem Ipsum",
    desc: "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
    image: User

  },
];

const Benefits = ({position}) => {
  return (
    <div className={`${position} w-full max-w-[1230px] h-auto mx-auto flex justify-between items-center py-10 px-4 `}>
    {/* left side */}
    <div className="w-[450px] relative">
      <div className="z-10 bg-eclipse rounded-full w-[396px] h-[396px] absolute top-[100px] left-[-30px] opacity-20 "></div>
      <div className="rotate-mobile z-30">
        <img src={Mobile} />

        {/* Regular checkup and happy patients */}
        <div className="flex flex-col">
          <div className="w-[160px] h-[70px] absolute top-[180px] left-[-160px] rounded-md bg-white">
            <div className="w-[130px] h-[60px] rotate-22 flex justify-between items-center m-auto">
              <div className="bg-blue-color rounded-full w-[32px] h-[32px] flex justify-center items-center">
                {" "}
                <MdOutlineDone className="text-white" />{" "}
              </div>

              <h2 className="w-[83px] font-semibold ">Regular Checkup</h2>
            </div>
          </div>

          {/* happy patients */}
          <div className="w-[160px] h-[70px] absolute top-[260px] left-[-160px] rounded-md bg-white">
            <div className="w-[130px] h-[60px] rotate-22 flex justify-between items-center m-auto">
              <div className="bg-blue-color rounded-full w-[32px] h-[32px] flex justify-center items-center">
                {" "}
                <MdOutlineDone className="text-white" />{" "}
              </div>
              <div className="flex flex-col">
                <p className="font-bold mt-0 text-blue-color pt-2">84k+</p>
                <h2 className="w-[83px] font-semibold ">Happy Patients</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* right side */}
    <div className="w-[550px] h-auto">
      <h2 className="font-semibold text-[36px] ">
        The <span className="text-blue-color">Benefits</span> of Utilizing
        Webapp for clinics
      </h2>
      <div className="w-[600px] h-auto mt-6">
        {list.map((item, index) => (
          <div key={index} className="flex gap-3 mb-6">
            <div className="rounded-full bg-blue-color w-[100px] text-white h-[100px] mt-4 flex justify-center items-center shadow-lg shadow-neutral-300">
              <img src={item.image} className="bg-blue-color" />
            </div>
            <div className="mt-4 w-[430px]">
              <h2 className="text-[22px] text-grey-color font-semibold mb-2">
                {item.title}
              </h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Benefits;
