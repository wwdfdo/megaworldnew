import React from "react";
import preview from "../Assets/images/preview.png";
import building from "../Assets/images/building.png";
import car from "../Assets/images/car.png";
import dog from "../Assets/images/dog.png";
import metal from "../Assets/images/metal.png";

const VideoSec = () => {
  return (
    <div className="relative">
      <img
        src={building}
        alt=""
        className="absolute right-0 top-0 hidden md:block"
        data-scroll
        data-scroll-delay="0.04"
        data-scroll-speed="4"
      />
      <img
        src={car}
        className="absolute left-[10%]"
        alt=""
        data-scroll
        data-scroll-delay="0.04"
        data-scroll-speed="4"
      />
      <div className="w-3/5 mx-auto ">
        <img src={preview} alt="" className="w-full" />
      </div>
      <img
        src={dog}
        alt=""
        className="absolute bottom-0 left-0 hidden md:block"
        data-scroll
        data-scroll-delay="0.04"
        data-scroll-speed="4"
      />
      <img
        src={metal}
        alt=""
        className="absolute right-[50%] -bottom-10  hidden md:block"
        data-scroll
        data-scroll-delay="0.04"
        data-scroll-speed="4"
      />
    </div>
  );
};

export default VideoSec;
