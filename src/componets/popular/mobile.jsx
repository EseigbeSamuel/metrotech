import React from "react";
import ipad from "../../images/ipad.jpg";
import iphone from "../../images/iphone 14.jpg";
import macbook from "../../images/macbook.jpg";
import ps5 from "../../images/ps 5.jpg";
import laptop from "../../images/laptop.jpg";
import { useFilterContext } from "../../context/filterContext";
import { useNavigate } from "react-router-dom";

export default function Mobile() {
  const { filterProducts } = useFilterContext();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div
          className=" h-[350px] p-2 rounded-lg bg-white "
          onClick={() => {
            filterProducts("all");
            navigate("/product");
          }}
        >
          <div className="h-[90%]">
            <img src={ipad} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">iPads</h1>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        <div
          onClick={() => {
            filterProducts("iphone");
            navigate("/product");
          }}
          className=" h-[350px] w-[47%] rounded-lg p-2 bg-white "
        >
          <div className="h-[50%]">
            <img src={iphone} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">iPhone</h1>
        </div>
        <div
          onClick={() => {
            filterProducts("macbook");
            navigate("/product");
          }}
          className=" h-[350px] w-[47%] rounded-lg p-2 bg-white "
        >
          <div className="h-[50%]">
            <img src={macbook} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">MacBooks</h1>
        </div>
        <div
          onClick={() => {
            filterProducts("console");
            navigate("/product");
          }}
          className=" h-[350px] w-[47%] rounded-lg  p-2 bg-white "
        >
          <div className="h-[50%]">
            <img src={ps5} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">Playstation</h1>
        </div>
        <div
          onClick={() => {
            filterProducts("windows");
            navigate("/product");
          }}
          className=" h-[350px] w-[47%] rounded-lg  p-2 bg-white "
        >
          <div className="h-[50%]">
            <img src={laptop} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">Laptops</h1>
        </div>
      </div>
    </div>
  );
}
