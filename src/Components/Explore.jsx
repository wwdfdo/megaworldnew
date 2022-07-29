import React from "react";
import exploredog from "../Assets/images/exploredog.jpg";
import umbrella from "../Assets/images/umbrella.png";
import icecream from "../Assets/images/icecream.png";
import beer from "../Assets/images/beer.png";

const Explore = () => {
  return (
    <section className="relative min-h-[100vh] bg-OpenPlatform bg-no-repeat bg-cover flex flex-col ">
      <div className=" absolute w-full h-full bg-[#296936b8] z-[1]"></div>
      <div className="w-4/5 flex justify-between z-[10] reltive mx-auto">
        <div className="relative flex flex-col justify-around gap-20 ">
          <h2
            className="text-3xl mt-10"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            OPEN PLATFORM. NO OBJECTIVES.
          </h2>
          <div className="realtive">
            <img src={exploredog} alt="" />
            <img className="absolute top-10 -right-40" src={umbrella} alt="" />
            <img className="absolute -left-10 top-32" src={icecream} alt="" />
            <img className="absolute bottom-7" src={beer} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-8xl">title</h1>
        </div>
      </div>
    </section>
  );
};

export default Explore;
