import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
import { useNavClickContext } from "../context/navContext";

export default function Layout() {
  const { handleClose } = useNavClickContext();
  return (
    <div>
      <Navbar />
      <div
        onClick={handleClose}
        className=" bg-zinc-200 mt-[70px] md:mt-[90px] lg:mt-[70px] "
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
