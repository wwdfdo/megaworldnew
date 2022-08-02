import React from "react";
import ViewportVideo from "../../Assets/mw-bg.mp4";
import "./ViewPortVideo.css";
// import { motion } from "framer-motion";

// const titleVarient = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//   },
//   show: {
//     opacity: 1,
//     pathLength: 1,

//     transition: {
//       duration: 2,
//       ease: "easeInOut",
//     },
//   },
// };

const ViewPortVideo = () => {
  return (
    <section className="w-full h-[100vh] relative">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[1] bg-[#234506a8]"></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[5] flex flex-col justify-center items-center text-white  font-bold drop-shadow-2xl">
        <div
          className="flex uppercase"
          // varients={titleVarient}
          // initial="hidden"
          // animate="show"
        >
          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.25"
            data-scroll-speed="4"
          >
            M
          </h1>
          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.18"
            data-scroll-speed="4"
          >
            e
          </h1>
          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.16"
            data-scroll-speed="4"
          >
            g
          </h1>
          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.14"
            data-scroll-speed="4"
          >
            a
          </h1>

          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="4"
          >
            W
          </h1>
          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed="4"
          >
            o
          </h1>
          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.08"
            data-scroll-speed="4"
          >
            r
          </h1>
          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            l
          </h1>
          <h1
            className="title text-8xl leading-loose"
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            d
          </h1>
        </div>
        <h2
          className="text-6xl"
          data-scroll
          data-scroll-delay="0.02"
          data-scroll-speed="2"
        >
          The Metaverse
        </h2>
      </div>
      <video
        src={ViewportVideo}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="w-[100%] h-[100vh] object-cover"
      ></video>
    </section>
  );
};

export default ViewPortVideo;
