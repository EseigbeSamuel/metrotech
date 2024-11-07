import React from "react";

export default function BlogPost() {
  return (
    <div className="rounded-lg [h-300px] w-[45%] md:w-[30%] lg:w-[20%]">
      <div className="[h-40%]">
        <img src="" alt="" className="w-full h-full bg-contain" />
      </div>
      <div className="p-4">
        <h1></h1>
        <p></p>
        <Link to={"/seemore"}> see more </Link>
      </div>
    </div>
  );
}
