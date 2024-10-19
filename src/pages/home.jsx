import React from "react";
import ImageSlider from "../componets/imageSlider";
import { FaXmark } from "react-icons/fa6";
import BestSeller from "../componets/bestSeller";

export default function Home() {
  return (
    <div className="   ">
      <div className="bg-green-300 h-[5%] flex items-center justify-center w-full ">
        <p>trade tech you dont want for cash you do</p>
        <div className="flex justify-end items-end ">
          <FaXmark />
        </div>
      </div>
      <div>
        <ImageSlider />
      </div>

      <div className="p-5">
        <div>
          <h1>hello home</h1>
        </div>
        <section className="">
          <h1 className="text-xl">
            Most wanted{" "}
            <span className="font-light text-sm ">
              The tech in everyone search bar
            </span>{" "}
          </h1>
          <div>
            <BestSeller />
          </div>
        </section>
      </div>
    </div>
  );
}
