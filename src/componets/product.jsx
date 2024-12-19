import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Product({ title, image, price, id, oldprice, rating }) {
  return (
    <Link
      to={`/Product/${id}`}
      className="w-full h-[200px] flex md:flex-col md:h-[350px] shadow-md duration-500 ease-in-out rounded-lg  hover:shadow-2xl "
    >
      <div className="h-[60%]  md:w-[30%]">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col p-3 gap-1">
        <h1>{title}</h1>
        <div className="flex items-center gap-1">
          <div className="flex">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="text-[10px]"> {rating.rate} </div>
          <div>
            <p className="text-[10px] ">( {rating.view} reviews)</p>
          </div>
        </div>
        <div>
          <p>starting at</p>
          <h1>${price}</h1>
        </div>
        <del className="text-">${oldprice}new</del>
      </div>
    </Link>
  );
}
