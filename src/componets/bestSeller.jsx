import React from "react";
// import { FaStar } from "react-icons/fa";
import gpu from "../images/RTX 4090.jpg";
import { Link } from "react-router-dom";

export default function BestSeller({ id, price, title }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white p-3 w-[200px] h-[300px] md:h-[350px]   rounded-md shadow-lg flex flex-col gap-1 ">
        <h2 className="bg-zinc-200 px-[2px]  w-[70px] rounded-sm">
          bestseller
        </h2>
        <div className="flex flex-col justify-between">
          <div className="h-[70%]  ">
            <img src={gpu} alt="" className="w-full h-full bg-contain " />
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className=" text-lg md:text-xl">{title}</h2>
            {/* <div>
            <FaStar />
          </div> */}
            <div>
              <p>starting at</p>
              <h1>${price}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
