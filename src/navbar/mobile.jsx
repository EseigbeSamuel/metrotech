import React from "react";
import { FaBars } from "react-icons/fa";
import { FaCartShopping, FaPerson, FaXmark } from "react-icons/fa6";
import { useNavClickContext } from "../context/navContext";

export default function Mobile() {
  const { click, handleClose, handleToggle } = useNavClickContext();
  return (
    <div className=" w-full h-full justify-center flex flex-col ">
      <div className="flex justify-between items-center text-xl ">
        <div onClick={handleToggle}>
          <FaBars />
        </div>
        <div>
          <h1 className="text-2xl">LOGO</h1>
        </div>

        <div className="flex">
          <FaPerson />
          <FaCartShopping />
        </div>
      </div>

      <div className="border-gray-500 border-2 rounded-md outline-none">
        <input type="search" name="" id="" className="outline-none w-full " />
      </div>

      <div
        className={`w-[70%] h-[100vh] flex bg-white top-4 flex-col absolute p-3 ${
          click ? "left-0" : "left-[100%]"
        } `}
      >
        <div className="flex justify-end" onClick={handleClose}>
          <FaXmark />
        </div>
        <ul className="flex flex-col justify-center items-center ">
          <li>about us</li>
          <li>trade-in</li>
          <li>help</li>
        </ul>
      </div>
    </div>
  );
}
