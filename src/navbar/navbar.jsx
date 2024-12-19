import React, { useEffect, useState } from "react";
import Mobile from "./mobile";
import Desktop from "./desktop";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full h-[70px] md:h-[90px] lg:h-[70px] bg-white border-b-2 border-gray-700 px-7 fixed top-0 left-0 z-20">
      {isMobile ? <Mobile /> : <Desktop />}
    </nav>
  );
}
