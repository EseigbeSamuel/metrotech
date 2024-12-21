import React from "react";
import airpods from "../../images/air-pods.jpg";
import appleWatch from "../../images/apple watch.jpg";
import gpu from "../../images/asus gpu.jpg";
import imac from "../../images/imac.jpg";
import samsung from "../../images/samsung.jpg";
import { useFilterContext } from "../../context/filterContext";
import { useNavigate } from "react-router-dom";

export default function Mobile2() {
  const { filterProducts } = useFilterContext();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div
          onClick={() => {
            filterProducts("airpods");
            navigate("/product");
          }}
          className=" h-[350px] p-2 rounded-lg bg-white "
        >
          <div className="h-[90%]">
            <img src={airpods} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">Airpods and Earphones</h1>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        <div
          onClick={() => {
            filterProducts("watch");
            navigate("/product");
          }}
          className=" h-[350px] w-[47%] rounded-lg p-2 bg-white "
        >
          <div className="h-[50%]">
            <img src={appleWatch} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">Apple Watch</h1>
        </div>
        <div
          onClick={() => {
            filterProducts("andriod");
            navigate("/product");
          }}
          className=" h-[350px] w-[47%] rounded-lg p-2 bg-white "
        >
          <div className="h-[50%]">
            <img src={samsung} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">Samsung Galaxy</h1>
        </div>
        <div
          onClick={() => {
            filterProducts("macbook");
            navigate("/product");
          }}
          className=" h-[350px] w-[47%] rounded-lg  p-2 bg-white "
        >
          <div className="h-[50%]">
            <img src={imac} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">iMac</h1>
        </div>
        <div
          onClick={() => {
            filterProducts("windows");
            navigate("/product");
          }}
          className=" h-[350px] w-[47%] rounded-lg  p-2 bg-white "
        >
          <div className="h-[50%]">
            <img src={gpu} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">Graphics Card</h1>
        </div>
      </div>
    </div>
  );
}
