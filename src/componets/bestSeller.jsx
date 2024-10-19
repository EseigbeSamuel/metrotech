import React from "react";
import { FaStar } from "react-icons/fa";
import gpu from "../images/RTX 4090.jpg";

export default function BestSeller() {
  return (
    <div className="bg-white p-3 w-[45%] lg:w-[20%] h-[300px] lg:h-[330px] rounded-md shadow-lg flex flex-col gap-1 ">
      <h2 className="bg-zinc-200 px-[1px] w-[70px] rounded-sm">bestseller</h2>
      <div className="flex flex-col justify-between">
        <div className="h-[70%]  ">
          <img src={gpu} alt="" className="w-full h-full bg-contain " />
        </div>
        <div className="flex flex-col justify-between ">
          <h1 className="text-xl">name of product</h1>
          <div>
            <FaStar />
          </div>
          <div>
            <p>starting at</p>
            <h1>$</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
