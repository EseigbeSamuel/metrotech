import React from "react";
import { useCartContext } from "../../context/cartContext";
import { FaAngleRight, FaCar } from "react-icons/fa";
import Button from "../textfield/button";

export default function CartMobile() {
  const { cartItems, removeFromCart, total } = useCartContext();
  console.log("cart content", cartItems);
  return (
    <div className="flex flex-col gap-5 mt-10 p-7">
      <div>
        {cartItems.length === 0 ? (
          <p>your cart is empty</p>
        ) : (
          cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="h-[200px] w-full rounded-xl bg-white p-5"
              >
                <section className="flex">
                  <div>
                    <img src="" alt={item.title} />
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                    <p>comes with charging cable</p>
                    <p className="underlined">1-year warranty</p>
                    <h2> ${item.price} </h2>
                  </div>
                </section>
                <section className="w-full flex justify-between">
                  <div>{item.quantity}</div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="border-red-600 text-red-600 p-2"
                  >
                    remove
                  </button>
                </section>
              </div>
            );
          })
        )}
      </div>

      <div className="grid gap-5">
        <section>
          <h1>your perks with every purchase</h1>
          <div className="p-3 bg-white rounded-xl">
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p className="underlined">1-year warranty</p>
              </div>
              <FaAngleRight />
            </div>
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p>free standard shipping</p>
              </div>
              <FaAngleRight />
            </div>
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p className="underlined">free 30-day returns</p>
              </div>
              <FaAngleRight />
            </div>
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p>friendly customer service</p>
              </div>
              <FaAngleRight />
            </div>
          </div>
        </section>
        <section className="xs:mb-10">
          <h1>summary</h1>
          <div className="bg-white p-5 rounded-xl">
            <div className="grid gap-5 p-2">
              {cartItems.map((item) => {
                return (
                  <div className="flex ">
                    <div>
                      <img src="" alt={item.title} />
                    </div>
                    <div className="w-[80%]">
                      <div className="flex justify-between">
                        <h1>{item.title}</h1> <p>${item.price}</p>
                      </div>
                      <div className="flex w-full justify-between">
                        <p>shipping</p> <p>free</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr />

            <div>
              <p className="flex justify-between">
                subtotal <span> ${total.toFixed(2)} </span>
              </p>
              <p className="flex justify-between">
                quality assurance fee <span>$4.99</span>
              </p>
            </div>

            <hr />

            <div>
              <h1 className="flex justify-between">
                total <span>${total.toFixed(2)}</span>
              </h1>
              <Button
                onClick={() => {
                  alert("clicked");
                }}
                variant="contained"
                size="large"
              >
                checkout
              </Button>
            </div>
            <small className="text-[10px] flex justify-center">
              By confirming this order you accept our Terms of Service Agreement
              and our Data Protection Policy
            </small>
          </div>
        </section>
      </div>

      <div className="flex bg-white rounded-xl px-7 py-3 justify-between w-full fixed left-0 xs:top-[90vh] sm:top-[92vh] md:top-[93vh] lg:top-[95vh]  ">
        <div>
          <p>cart total</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="w-[60%]">
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="contained"
            size="large"
          >
            checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
