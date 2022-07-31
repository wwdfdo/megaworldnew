import React from "react";
import MenuBar from "../../Components/MenuBar/MenuBar";
// import Logo from "../../Components/Logo/Logo";
import ViewPortVideo from "../../Components/ViewPortVideo/ViewPortVideo";

const Viewport = () => {
  return (
    <section className=" relative min-h-[200vh] overflow-hidden">
      <ViewPortVideo />
      {/* <Logo /> */}
      <MenuBar />
    </section>
  );
};

export default Viewport;
