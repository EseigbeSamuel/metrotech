import React from "react";
import ipad from "../../images/ipad.jpg";
import iphone from "../../images/iphone 14.jpg";
import macbook from "../../images/macbook.jpg";
import ps5 from "../../images/ps 5.jpg";
import laptop from "../../images/laptop.jpg";

export default function Mobile() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className=" h-[350px] p-2 rounded-lg bg-white ">
          <div className="h-[90%]">
            <img src={ipad} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">iPads</h1>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        <div className=" h-[350px] w-[47%] rounded-lg p-2 bg-white ">
          <div className="h-[50%]">
            <img src={iphone} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">iPhone</h1>
        </div>
        <div className=" h-[350px] w-[47%] rounded-lg p-2 bg-white ">
          <div className="h-[50%]">
            <img src={macbook} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">MacBooks</h1>
        </div>
        <div className=" h-[350px] w-[47%] rounded-lg  p-2 bg-white ">
          <div className="h-[50%]">
            <img src={ps5} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">Playstation</h1>
        </div>
        <div className=" h-[350px] w-[47%] rounded-lg  p-2 bg-white ">
          <div className="h-[50%]">
            <img src={laptop} alt="" className="w-full h-full bg-contain" />
          </div>
          <h1 className="flex justify-center">Laptops</h1>
        </div>
      </div>
    </div>
  );
}
