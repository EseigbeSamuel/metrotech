import React from "react";
import banner from "../images/Annotation 2024-03-06 104710.png";

export default function ImageSlider() {
  // const slides = [
  //   { url: "../images/intel core.svg" },
  //   { url: "../images/rtx 2080.svg" },
  //   { url: "http://../images/intel core.svg" },
  // ];
  return (
    <div className="w-full h-[150px] lg:h-[300px]   m-auto ">
      {/* <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className="h-full w-full bg-center bg-cover rounded-2xl duration-500 "
        ></div> */}

      <img
        src={banner}
        alt=""
        className="h-full w-full bg-center bg-contain "
      />
    </div>
  );
}
