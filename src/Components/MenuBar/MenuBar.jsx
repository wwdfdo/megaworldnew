import { transform } from "framer-motion";
import React, { useState } from "react";
import "./MenuBar.css";
import { motion } from "framer-motion";

const MenuBar = () => {
  const [click, setClick] = useState(false);

  return (
    <motion.div
      className={`transition-all ease-in delay-300 absolute  flex justify-center items-center w-[100vw] z-[6] ${
        click === false ? "top-[-4rem]" : "top-0"
      }`}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.1,
        delay: 0.1,
      }}
    >
      <ul className=" relative h-[4rem] bg-[black] text-white w-[100%] py-0 px-[10rem] flex justify-around items-center">
        <li
          className="menuBtn list-none w-[17rem] h-[2.6rem] flex justify-center items-center font-semibold text-xl uppercase cursor-pointer"
          onClick={() => setClick(!click)}
        >
          Menu
        </li>
        <li className="menuItems">Home</li>
        <li className="menuItems">Home</li>
        <li className="menuItems">Home</li>
        <li className="menuItems">Home</li>
        <li className="menuItems">Home</li>
      </ul>
    </motion.div>
  );
};

export default MenuBar;
