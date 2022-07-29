import React from "react";
import Explore from "../Components/Explore";

const FloatingSection = () => {
  return (
    <section className="relative min-h-[100vh] bg-OpenPlatform bg-no-repeat bg-cover flex flex-col ">
      <div className=" absolute w-full h-full bg-[#296936b8] z-[1]"></div>
      <Explore />
    </section>
  );
};

export default FloatingSection;
