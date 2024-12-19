import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaCar, FaHome } from "react-icons/fa";
import { useCartContext } from "../../context/cartContext";
import Button from "../textfield/button";

export default function CartDesktop() {
  const { cartItems, removeFromCart, total } = useCartContext();

  const [select, setSelect] = useState(false);
  const selectClick = () => {
    setSelect(!select);
  };
  const [select2, setSelect2] = useState(false);
  const selectClick2 = () => {
    setSelect2(!select2);
  };
  return (
    <div className=" flex mt-10">
      <section className="p-7 pb-10 h-[100vh] overflow-y-scroll  w-[60%]">
        <h1>your cart</h1>
        <div className="bg-white rounded-xl p-4">
          <div>
            {cartItems.length === 0 ? (
              <p>your cart is empty</p>
            ) : (
              cartItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="h-[200px] w-full justify-between rounded-xl bg-white p-5"
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
                    <section className=" flex justify-between">
                      <div>{item.quantity}</div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="border-red-600 border-[1px]  flex items-center text-red-600 p-1 rounded-lg"
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
            <h1>shipping</h1>
            <section className="grid gap-3">
              <div
                onClick={selectClick}
                className="border-[1px] border-black flex items-center p-4 justify-between rounded-xl"
              >
                <div className="flex gap-2 items-center">
                  {select ? <FaAngleRight /> : <FaAngleLeft />}
                  <p>
                    <span className="font-bold"> Arrives in 4 Days *</span>{" "}
                    Delivered by FedEX
                  </p>
                </div>
                <FaHome />
              </div>
              <div
                onClick={selectClick2}
                className="border-[1px] border-black flex items-center p-4 justify-between rounded-xl"
              >
                <div className="flex gap-2 items-center">
                  {select2 ? <FaAngleRight /> : <FaAngleLeft />}
                  <p>
                    <span className="font-bold">Arrives Overnight *</span>
                    Delivered by FedEx
                  </p>
                </div>

                <FaHome />
              </div>
            </section>
          </div>
        </div>

        <div>
          <h1>your perks with every purchase</h1>
          <div className="p-3 bg-white grid grid-cols-2 rounded-xl">
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p className="underlined">1-year warranty</p>
              </div>
            </div>
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p>free standard shipping</p>
              </div>
            </div>
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p className="underlined">free 30-day returns</p>
              </div>
            </div>
            <div className="flex  h-[50px] items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-300  rounded-lg p-2 ">
                  <FaCar size={25} />
                </div>
                <p>friendly customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" h-[100vh] p-3 overflow-y-scroll">
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
                      <h1> {item.title} </h1> <p>${item.price}</p>
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
          <small className="text-[10px]">
            By confirming this order you accept our Terms of Service Agreement
            and our Data Protection Policy
          </small>
        </div>
      </section>
    </div>
  );
}
