import React from "react";
import certified from "../images/Annotation 2024-03-06 105115.png";

export default function Footer() {
  return (
    <div className="py-10 px-[30px] flex flex-col gap-5 md:items-center w-full  ">
      <p className=" hidden md:flex">
        Hello! We are metrotech,the leading marketplece for refurbished
        devices.Our mission? To fight e-waste by giving expertly restored device
        a second life
      </p>
      <section className=" flex flex-col gap-[50px] justify-between md:flex-row">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">About</h1>
          <ul>
            <li>About us</li>
            <li>Trade-in</li>
            <li>Student offer</li>
            <li>We'r hiring</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Help</h1>
          <ul>
            <li>seller portal</li>
            <li>payments</li>
            <li>shipping</li>
            <li>protection plan</li>
            <li>contact us</li>
            <li>returns and refunds</li>
            <li>blog</li>
            <li></li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Law and Order</h1>
          <ul>
            <li>terms of services</li>
            <li>trade-in conditions</li>
            <li>privacy policy</li>
            <li>cookies</li>
            <li>1-year waranty</li>
            <li>trade-in terms and conditions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Hello</h1>
          <ul>
            <li>trustpilot</li>
            <li>glassdoor</li>
            <li>medium</li>
          </ul>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <img src={certified} alt="" />
        </div>
      </section>
      <p>MetroTech@{new Date().getFullYear()}.All Rights Reserved </p>
    </div>
  );
}
