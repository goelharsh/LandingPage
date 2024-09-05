import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Overview from "../components/Overview";
import Benefits from "../components/Benefits";
import Carousal from "../components/Carousal";
import PlayStore from "../components/PlayStore";
import TheEnd from "../components/TheEnd";
import About from "../components/About";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <Overview />
        <Benefits
          position={"lg:flex-row"}
          className="top-[1280px] left-[36px]"
        />
      </div>

      <div className="w-full h-auto">
        <Benefits
          position={"lg:flex-row-reverse"}
          className="top-[2560px] left-[72px]"
        />
      </div>
      <Carousal />
      <PlayStore />
      <About />
      <Faq />
      <TheEnd />
    </div>
  );
};

export default Home;
