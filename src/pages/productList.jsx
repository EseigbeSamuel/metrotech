import React from "react";
// import { productDB } from "../database/productDB";
import Product from "../componets/product";
import { useFilterContext } from "../context/filterContext";

export default function ProductList() {
  // const [products, setProducts] = useState(productDB);
  const { filteredProducts, filterProducts } = useFilterContext();

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
      {filteredProducts.length > 0 ? (
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
      ) : (
        <div>
          {" "}
          <p>no products found</p>{" "}
        </div>
      )}
    </div>
  );
}
