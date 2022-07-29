import React from "react";
import video from "../Assets/mw-bg.mp4";
import megaworldImg from "../Assets/images/logo.png";
import cross from "../Assets/images/cross.svg";
import citizen from "../Assets/images/citizen.png";
import NavBar from "./NavBar/NavBar";

const CoverVideo = () => {
  return (
    <section className="w-[100%] relative  h-[100vh]">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[1] bg-[#234506a8]"></div>
      <NavBar />
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[5] flex justify-center items-center flex-col gap-16">
        <img src={megaworldImg} alt="" data-scroll data-scroll-speed="1" />
        <h2 className="text-3xl text-white" data-scroll data-scroll-speed="1">
          The Metaverse
        </h2>
        <div className="flex justify-center items-center md:gap-16 gap-8 md:text-3xl text-xl md:w-full w-[95%]">
          <h2 className="w-[100px] md:w-[150px] text-center">VIRTUAL CITY</h2>
          <img src={cross} className="w-[80px] text-center" alt="" />
          <h2 className="w-[100px] md:w-[150px] text-center">REAL ECONOMICS</h2>
        </div>

        <div className="md:w-3/5 w-[95%] border-2 bg-white mx-auto rounded-3xl h-[20vh]   text-black flex md:flex-row flex-col md:justify-around gap-6 md:gap-0 py-20 md:py-0  items-center absolute bottom-0 right-0 left-0 z-[5]">
          <div className="md:w-1/3">
            <p>REQUEST EARLY ACCESS</p>
            <p>Claim your invitation to the Mega World metaverse demo today.</p>
          </div>
          <img
            src={citizen}
            className="md:-mt-20 relative -mt-44 md:w-[150px] w-[100px]"
            alt=""
            data-scroll
            data-scroll-speed="1"
          />
          <div className="md:flex gap-3">
            <input
              type="text"
              id="fname"
              name="fname"
              className="border-2 border-black w-full py-2 px-4 rounded-xl"
            ></input>
            <input
              type="submit"
              value="Send"
              className="py-2 px-8 border-2 border-black rounded-xl bg-green-700 md:mt-0 mt-5"
            ></input>
          </div>
        </div>
      </div>

      <video
        src={video}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="w-[100%] h-[100vh] object-cover"
      ></video>
    </section>
  );
};

export default CoverVideo;
