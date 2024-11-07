import React from "react";
import ipad from "../../images/ipad.jpg";
import iphone from "../../images/iphone 14.jpg";
import macbook from "../../images/macbook.jpg";
import ps5 from "../../images/ps 5.jpg";
import laptop from "../../images/laptop.jpg";

export default function Desktop() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap w-full justify-center gap-4">
        <div className="h-[350px] w-[48%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={ipad} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>iPad</h1>
            <p>pads your pockect</p>
          </div>
        </div>

        <div className="h-[350px] w-[48%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={iphone} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>iPhone</h1>
            <p>bring home a smarter phone</p>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-4 justify-center">
        <div className="h-[350px] w-[32%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={macbook} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>MacBook</h1>
            <p>bring home a smarter phone</p>
          </div>
        </div>
        <div className="h-[350px] w-[32%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={ps5} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>Playstation</h1>
            <p>bring home a smarter phone</p>
          </div>
        </div>
        <div className="h-[350px] w-[32%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={laptop} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>Laptops</h1>
            <p>bring home a smarter phone</p>
          </div>
        </div>
      </div>
    </div>
  );
}
