import React from "react";
// import { productDB } from "../database/productDB";
import { FaXmark } from "react-icons/fa6";
import Product from "../componets/product";
import { useFilterContext } from "../context/filterContext";
import { useNavClickContext } from "../context/navContext";

export default function ProductList() {
  // const [products, setProducts] = useState(productDB);
  const { filteredProducts, filterProducts } = useFilterContext();

  const { click, handleClose, handleToggle } = useNavClickContext();

  return (
    <div className="p-7 md:py-[100px]">
      {" "}
      <div className=" hidden md:flex md:items-center gap-10 fixed  top-[90px] xl:top-[70px] left-0 w-full  bg-white px-7 py-5 shadow-lg ">
        <div>filters</div>
        <div className="flex  gap-[50px] justify-between overflow-x-scroll ">
          <div
            onClick={() => filterProducts("all")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            all
          </div>
          <div className="p-1 bg-gray-300 rounded-md cursor-pointer">
            cheaper
          </div>
          <div className="p-1 bg-gray-300 rounded-md cursor-pointer">
            expensive
          </div>
          <div
            onClick={() => filterProducts("iphone")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            iphones
          </div>
          <div
            onClick={() => filterProducts("andriod")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            andriod
          </div>
          <div
            onClick={() => filterProducts("tablet")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            tablets
          </div>
          <div
            onClick={() => filterProducts("windows")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            laptops
          </div>
          <div
            onClick={() => filterProducts("macbook")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            macbooks
          </div>
          <div
            onClick={() => filterProducts("airpods")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            airpods
          </div>
          <div
            onClick={() => filterProducts("watch")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            watches
          </div>
          <div
            onClick={() => filterProducts("console")}
            className="p-1 bg-gray-300 rounded-md cursor-pointer"
          >
            consoles
          </div>
        </div>
      </div>
      {/* <h1>product list</h1> */}
      <div className="flex flex-col items-center gap-5 md:grid  md:grid-cols-4 ">
        {filteredProducts.map((item) => {
          return (
            <Product
              image={item.image}
              title={item.title}
              price={item.price}
              oldprice={item.oldprice}
              id={item.id}
              rating={item.rating}
              key={item.id}
            />
          );
        })}
      </div>
      <section
        onClick={handleToggle}
        className="flex justify-between items-center h-[70px] bg-white fixed right-0 top-[90vh] sm:top-[92vh] border-2 border-black w-full p-5 "
      >
        <div className=" " onClick={handleToggle}>
          filter
        </div>
        <div className="h-[50px]  w-1 bg-black rounded-lg "></div>
        <div className=" " onClick={handleToggle}>
          sort
        </div>
      </section>
      <section
        className={`h-[100vh] w-[70%] flex flex-col gap-[50px] p-7 top-[50px] bg-white absolute  ${
          click ? "right-0" : "right-[100%]"
        }`}
      >
        <div className="flex justify-end " onClick={handleToggle}>
          <FaXmark />
        </div>
        <div>
          <h1>filter</h1>
          <div className="grid grid-cols-3 gap-[30px]">
            <div
              onClick={() => filterProducts("all")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              all
            </div>

            <div
              onClick={() => filterProducts("iphone")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              iphones
            </div>
            <div
              onClick={() => filterProducts("andriod")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              andriod
            </div>
            <div
              onClick={() => filterProducts("tablet")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              tablets
            </div>
            <div
              onClick={() => filterProducts("windows")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              laptops
            </div>
            <div
              onClick={() => filterProducts("macbook")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              macbooks
            </div>
            <div
              onClick={() => filterProducts("airpods")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              airpods
            </div>
            <div
              onClick={() => filterProducts("watch")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              watches
            </div>
            <div
              onClick={() => filterProducts("console")}
              className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center"
            >
              consoles
            </div>
          </div>
        </div>
        <div>
          <h1>sort</h1>
          <div className="grid gap-[20px]">
            <div className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center">
              cheaper
            </div>
            <div className="p-1 bg-gray-300 rounded-md cursor-pointer flex justify-center">
              expensive
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
