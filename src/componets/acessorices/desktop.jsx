import React from "react";
import airpods from "../../images/air-pods.jpg";
import appleWatch from "../../images/apple watch.jpg";
import gpu from "../../images/asus gpu.jpg";
import imac from "../../images/imac.jpg";
import samsung from "../../images/samsung.jpg";

export default function Desktop2() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap w-full justify-center gap-4">
        <div className="h-[350px] w-[48%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={airpods} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>Airpods and Earphone</h1>
            <p>Sustainable sourced audio</p>
          </div>
        </div>

        <div className="h-[350px] w-[48%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={appleWatch} alt="" className="h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <h1>Apple Watch</h1>
            <p>Talk to your watch</p>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-4 justify-center">
        <div className="h-[350px] w-[32%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={samsung} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>Samsung Galaxy</h1>
            <p>Explore the universe beyond</p>
          </div>
        </div>
        <div className="h-[350px] w-[32%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={imac} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>iMac</h1>
            <p>Welcome to the big screen</p>
          </div>
        </div>
        <div className="h-[350px] w-[32%] flex flex-col items-center rounded-lg p-4 bg-white">
          <div className="h-[70%]">
            <img src={gpu} alt="" className="h-full bg-contain" />
          </div>
          <div className="flex flex-col">
            <h1>Graphics Card</h1>
            <p>Better than ever gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
}
