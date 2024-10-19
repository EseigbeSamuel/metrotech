import React from "react";
import { FaCartShopping, FaPerson } from "react-icons/fa6";

export default function Desktop() {
  return (
    <div className="flex w-full h-full justify-between items-center">
      <div className="w-[10%]">
        <h1 className="text-[20px]">METROTECH</h1>
      </div>
      <div className="w-[20%]">
        <ul className="flex justify-between w-full capitalize  font-medium ">
          <li>about us</li>
          <li>trade-in</li>
          <li>help</li>
        </ul>
      </div>
      <div className="w-[40%]">
        <input
          type="search"
          name=""
          id=""
          className="w-full outline-none border-2 rounded-md"
        />
      </div>

      <div className="flex">
        <FaPerson />
        <FaCartShopping />
      </div>
    </div>
  );
}