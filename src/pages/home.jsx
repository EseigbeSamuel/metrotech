import React, { useEffect, useState } from "react";
import ImageSlider from "../componets/imageSlider";
import { FaXmark } from "react-icons/fa6";
import BestSeller from "../componets/bestSeller";
import Mobile from "../componets/popular/mobile";
import Desktop from "../componets/popular/desktop";
import Mobile2 from "../componets/acessorices/mobile";
import Desktop2 from "../componets/acessorices/desktop";
import Button from "../componets/textfield/button";
import purple from "../images/puple cash.png";
import bcorp from "../images/bcorp.png";
import { productDB } from "../database/productDB";

export default function Home() {
  const [products, setProducts] = useState(productDB);

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

      <div className="p-7 flex flex-col gap-28 ">
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
          <div className="flex gap-3 w-full overflow-x-scroll">
            {products.map((item) => {
              return (
                <BestSeller
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  key={item.id}
                />
              );
            })}
          </div>
        </section>
        <section>youtube video</section>
        <section>
          <h1 className="text-xl">
            popular devices{" "}
            <span className="font-light text-sm">
              you can totally sit with them
            </span>{" "}
          </h1>
          <div className="py-5">{isMobile ? <Mobile /> : <Desktop />}</div>
        </section>
        <section>blog post</section>
        <section>
          <div className="flex flex-col lg:flex-row">
            <h1 className="text-xl">Accessories,PCs,and more</h1>
            <p className="font-light text-sm">
              we are more than just smartphones
            </p>{" "}
          </div>
          <div className="py-5">{isMobile ? <Mobile2 /> : <Desktop2 />}</div>
        </section>
        <section className="flex flex-col gap-28 ">
          <div className="flex flex-col md:flex-row  gap-10 h-[500px] md:h-[400px] ">
            <div className="h-1/2   md:h-full  md:w-[45%]">
              <img src={purple} alt="" className="w-full h-full bg-contain" />
            </div>
            <div className="flex flex-col md:w-[50%] gap-4 justify-center ">
              <h1 className="text-[20px]">
                Trading in your old tech is easier than a lot of things
              </h1>
              <p>
                Earn cash when u trade in your forgotten tech.it is a simple way
                to help do more with what we already have
              </p>
              {isMobile ? (
                <Button size="large" variant="outlined">
                  Get started
                </Button>
              ) : (
                <Button variant="outlined">Get started</Button>
              )}
            </div>
          </div>

          <div className="flex sm:flex-col-reverse md:flex-row gap-10 h-[500px] md:h-[400px] ">
            <div className="flex flex-col md:w-1/2  gap-4 justify-center">
              <h1 className="text-[20px]">We are B-corp certified</h1>
              <p>
                Being a B-corp means that we walk the walk when it comes to
                everything from our environmental impact to our hiring practices
              </p>
              {isMobile ? (
                <Button size="large" variant="outlined">
                  Read more
                </Button>
              ) : (
                <Button variant="outlined">Read more</Button>
              )}
            </div>
            <div className="h-1/2 md:h-full md:w-[45%]">
              <img src={bcorp} alt="" className="h-full w-full bg-contain" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-4  ">
          <div className="flex flex-col items-center">
            <h1 className="text-[20px]">sign up to get 15% off on your next</h1>
            <h1 className="text-[20px]"> purchase of $250 or more</h1>
          </div>
          <p> yep,it's that easy</p>
          {isMobile ? (
            <div className="flex flex-col gap-2 w-full ">
              <div className="flex items-center">
                <input
                  placeholder="email"
                  type="email"
                  className="p-2 w-full  outline-none border-[1px] border-black rounded-lg "
                />
              </div>
              <Button size="large" variant="contained">
                sign up
              </Button>
            </div>
          ) : (
            <div className="flex w-full justify-center gap-2">
              <input
                placeholder="email"
                type="email"
                name=""
                id=""
                className="p-2 w-[300px]  outline-none border-[1px] border-black rounded-lg "
              />
              <Button size="small" variant="contained">
                sign up
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
