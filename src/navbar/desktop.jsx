import React from "react";
import { FaCartShopping, FaPerson } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useFilterContext } from "../context/filterContext";

export default function Desktop() {
  const navigate = useNavigate();
  const { searchQuery, updateSearchQuery } = useFilterContext();

  return (
    <div className="flex w-full h-full justify-between items-center">
      <Link to={"/"}>
        {" "}
        <div className="w-[10%]">
          <h1 className="text-[20px]">METROTECH</h1>
        </div>
      </Link>
      <div className="w-[20%]">
        <ul className="flex justify-between w-full capitalize  font-medium ">
          <li>about us</li>
          <li>trade-in</li>
          <li>help</li>
        </ul>
      </div>
      <div className="w-[40%] border-gray-500 border-2 p-1 rounded-lg outline-none">
        <form>
          {" "}
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => {
              updateSearchQuery(e.target.value);
              navigate("/product");
            }}
            id=""
            className="w-full outline-none "
          />
        </form>
      </div>

      <div className="flex">
        <FaPerson />
        <Link to={"/cart"}>
          {" "}
          <FaCartShopping />
        </Link>
      </div>
    </div>
  );
}
