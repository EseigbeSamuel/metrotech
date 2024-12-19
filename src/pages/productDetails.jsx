import React, { useState } from "react";
import Button from "../componets/textfield/button";
import img from "../images/google pixel 7 pro.jpg";
import {
  FaAngleLeft,
  FaAngleRight,
  FaBatteryFull,
  FaCar,
  FaChargingStation,
} from "react-icons/fa";
import BestSeller from "../componets/bestSeller";
import { useCartContext } from "../context/cartContext";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { productDB } from "../database/productDB";
// import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const [products2, setProducts2] = useState(productDB);

  const { addToCart } = useCartContext();
  // const [products, setProducts] = useState(null);

  const { id } = useParams();
  const products = productDB.find((products) => products.id === parseInt(id));

  if (!products) {
    return <p>product not found. please check the url </p>;
  }
  // useEffect(() => {
  //   const fetchProdById = async () => {
  //     try {
  //       const response = await axios.get(`${params.productId}`);
  //       //  const response = await axios.get(
  //       //    `http://fakestoreapi.com/products/${params.productId}`
  //       //  );
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchProdById();
  // }, []);

  return (
    <div className=" bg-white flex flex-col gap-10 p-7 ">
      <Link to={"/product"}>
        {" "}
        <FaAngleLeft />{" "}
      </Link>
      <section className="flex flex-col gap-5  md:flex-row">
        <section className=" h-full md:top-32 md:sticky  md:w-[50%]">
          <img src={img} alt="" />
        </section>
        <section className=" relative flex flex-col gap-5  ">
          <div>
            <h1 className="text-[30px]">{products.title}</h1>
            <div className="flex items-center gap-1">
              <div className="flex">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>
              <div> {products.rating.rate} </div>
              <div>
                <p>( {products.rating.view} reviews)</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-[20px]">
                ${products.price}
                <span className="font-normal text-[15px]">before trade in</span>
              </p>
              <p>
                ${products.oldprice}
                <span className="bg-green-300 p-1 rounded-md">
                  save $300.00
                </span>
              </p>
            </div>
            <Button
              onClick={() => {
                addToCart(products);
                alert("added to cart");
              }}
              variant="contained"
            >
              add to cart
            </Button>
          </div>
          <hr />
          <div className=" m-3 flex flex-col gap-2 md:grid md:grid-cols-2">
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p>1-year warranty</p>
              </div>
              <FaAngleRight />
            </div>
            <div className="flex h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p>free standard shipping</p>
              </div>
              <FaAngleRight />
            </div>
            <div className="flex h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p>free 30-day returns</p>
              </div>
              <FaAngleRight />
            </div>
            <div className="flex h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p>friendly customer service</p>
              </div>
              <FaAngleRight />
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p>comes with</p>
            <div className="py-1 px-2 flex bg-zinc-200 gap-2 w-[150px] items-center  rounded-full">
              <FaChargingStation /> <p>charging cable</p>
            </div>
            <div className="py-1 px-2 flex bg-zinc-200 gap-2 w-[270px] items-center  rounded-full">
              <FaBatteryFull /> <p>100% battery health guranteed</p>
            </div>
          </div>
          <div>
            <div className=" border-b-2 outline-none p-4 flex justify-between">
              <p>Technical specifications</p>
              <FaAngleRight />
            </div>
            <div className=" border-b-2 outline-none p-4 flex justify-between">
              <p>Perks and benefit inculded</p>
              <FaAngleRight />
            </div>
            <div className=" border-b-2 outline-none p-4 flex justify-between">
              <p>Frequently asked question</p>
              <FaAngleRight />
            </div>
          </div>
        </section>
      </section>
      <section>
        <h1 className="text-[25px]">You may also like </h1>
        <div className="flex gap-3 w-full overflow-x-scroll">
          {products2.map((item) => {
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
    </div>
  );
}
