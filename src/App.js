import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrollTriggerProxy from "./Components/ScrollTriggerProxy";
import { useRef } from "react";
import gsap from "gsap";

import { AnimatePresence } from "framer-motion";
import Viewport from "./Sections/Viewport/Viewport";
// import Home from "./Sections/Home";
// import VideoContainer from "./Sections/VideoContainer/VideoContainer";
// import FloatingSection from "./Sections/FloatingSection";
// import Explore from "./Components/Explore";
// import Slider from "./Sections/Slider";

// import Slider from "./Sections/Slider";

function App() {
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTriggerProxy);
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            {/* <Home />
            <VideoContainer />
            <Explore />
            <Explore />
            <Slider /> */}
            <Viewport />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
