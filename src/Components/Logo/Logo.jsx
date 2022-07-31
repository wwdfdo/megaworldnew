import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="absolute top-[1rem] left-[1rem] width-[100%] text-white z-[5] ">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
          className="w-[4rem] h-auto overflow-visible"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
