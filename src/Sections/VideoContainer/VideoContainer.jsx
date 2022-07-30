// import React from "react";
// import preview from "../../Assets/images/preview.png";
// import building from "../../Assets/images/building.png";
// import car from "../../Assets/images/car.png";
// import dog from "../../Assets/images/dog.png";
// import metal from "../../Assets/images/metal.png";
// import { FaPlay } from "react-icons/fa";
// import "./VideoContainer.css";

import MetaverseAssests from "../../Components/MetaverseAssests";
import VideoSec from "../../Components/VideoSec";

const VideoContainer = () => {
  return (
    <section className="bg-green-500 min-h-[100vh] flex flex-col gap-10 h-auto py-40">
      <MetaverseAssests />
      <VideoSec />
    </section>
  );
};

export default VideoContainer;
