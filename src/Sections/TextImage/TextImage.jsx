import React from "react";
import img1 from "../../Assets/images/exploredog.jpg";
import umbrella from "../../Assets/images/umbrella.png";
import beer from "../../Assets/images/beer.png";
import icecream from "../../Assets/images/icecream.png";
import craft from "../../Assets/images/craft.png";
import glue from "../../Assets/images/glue.png";
import textile from "../../Assets/images/textiles.png";
import nails from "../../Assets/images/nails.png";

const TextImage = () => {
  return (
    <section className="relative min-h-[100vh]  w-full mx-auto flex flex-col bg-OpenPlatform bg-cover bg-no-repeat py-40  ">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[1] bg-[#234506a8]"></div>
      <div className="w-[80vw] mx-auto flex justify-between items-center py-20">
        <div className="w-[50%] relative flex justify-start z-[5]">
          <img src={img1} className=" h-auto" alt="" />
          <img
            src={umbrella}
            className="absolute w-[40%] right-0 -top-5 "
            alt=""
            data-scroll
            data-scroll-speed="-2"
          />
          <img
            src={beer}
            alt=""
            className="absolute right-10 -bottom-24"
            data-scroll
            data-scroll-speed="-2"
          />
          <img
            src={icecream}
            alt=""
            className="absolute -left-10 bottom-40"
            data-scroll
            data-scroll-speed="-2"
          />
        </div>

        <div className="w-[50%] relative z-[5] flex flex-col justify-start gap-8 ">
          <h1
            className="text-8xl font-semibold  z-[5]"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            TextImage
          </h1>
          <p className="text-3xl font-semibold">
            New realm for everyone — from casual visitors to ambitious
            entrepreneurs.
          </p>
          <ul className="text-3xl font-bold flex flex-col gap-5">
            <li>User-generated gaming map</li>
            <li>Daily interactive quests</li>
            <li>Thousands of Citizens</li>
            <li>Unlimited strategies</li>
          </ul>
          <p className="text-3xl font-bold">Just take a stroll.</p>
        </div>
      </div>
      <div className="w-[80vw] mx-auto flex justify-between items-center  py-20">
        <div className="w-[50%] relative z-[5] flex flex-col justify-start gap-8">
          <h1
            className="text-8xl font-semibold  z-[5]"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            TextImage
          </h1>
          <p className="text-3xl font-semibold">
            New realm for everyone — from casual visitors to ambitious
            entrepreneurs.
          </p>
          <ul className="text-3xl font-bold flex flex-col gap-5">
            <li>User-generated gaming map</li>
            <li>Daily interactive quests</li>
            <li>Thousands of Citizens</li>
            <li>Unlimited strategies</li>
          </ul>
          <p className="text-3xl font-bold">Just take a stroll.</p>
        </div>
        <div className="w-[50%] relative flex justify-start z-[5]">
          <img src={craft} alt="" />
          <img
            src={nails}
            alt=""
            className="absolute -top-10 left-[50%]"
            data-scroll
            data-scroll-speed="-2"
          />
          <img
            src={glue}
            alt=""
            className="absolute top-[30%] -right-20"
            data-scroll
            data-scroll-speed="-2"
          />
          <img
            src={textile}
            alt=""
            className="absolute -bottom-20 -left-20"
            data-scroll
            data-scroll-speed="-2"
          />
        </div>
      </div>
    </section>
  );
};

export default TextImage;
