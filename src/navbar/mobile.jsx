import React from "react";
import { FaBars } from "react-icons/fa";
import { FaCartShopping, FaPerson, FaXmark } from "react-icons/fa6";
import { useNavClickContext } from "../context/navContext";
import { Link, useNavigate } from "react-router-dom";

export default function Mobile() {
  const navigate = useNavigate();

  const { click, handleClose, handleToggle } = useNavClickContext();
  return (
    <div className=" w-full h-full justify-center flex flex-col py-4 ">
      <div className="flex justify-between items-center text-xl ">
        <div onClick={handleToggle}>
          <FaBars />
        </div>
        <Link to={"/"}>
          {" "}
          <div>
            <h1 className="text-2xl">METROTECH</h1>
          </div>
        </Link>

        <div className="flex">
          <FaPerson />
          <Link to={"/cart"}>
            {" "}
            <FaCartShopping />
          </Link>
        </div>
      </div>

      <div className="border-gray-500 border-2 p-1 rounded-md outline-none">
        <form
          action=""
          onSubmit={() => {
            navigate("/product");
          }}
        >
          {" "}
          <input type="search" name="" id="" className="outline-none w-full " />
        </form>
      </div>

      <div
        className={
          click ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
        onClick={handleClose}
      >
        <div
          className={`w-[70%] h-[100vh] flex bg-white  top-0 flex-col absolute  p-4  ease-in duration-300 ${
            click ? "right-[30%]" : "right-[100%]"
          }  `}
        >
          <div className="flex justify-between">
            <h1 className="text-[20px]">metrotech</h1>
            <div onClick={handleClose}>
              <FaXmark />
            </div>
          </div>
          <ul className="flex flex-col justify-center items-center ">
            <li>about us</li>
            <li>trade-in</li>
            <li>help</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
