// // src/components/Cart.js
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   return (
//     <div className="w-1/2 space-y-4">
//       <h2 className="text-2xl font-semibold mb-4">Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className="p-4 border rounded-lg bg-white shadow">
//             <h3 className="text-xl font-medium">{item.name}</h3>
//             <p className="text-gray-600">Price: ${item.price}</p>
//             <p className="text-gray-600">Quantity: {item.quantity}</p>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useEffect, useState } from "react";
import CartMobile from "../componets/cart/cartMobile";
import CartDesktop from "../componets/cart/cartDesktop";
import { Link } from "react-router-dom";

export default function Cart() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <nav className="h-[50px] px-7 fixed bg-white top-0 left-0 w-full border-b-2 border-gray-700  ">
        <Link to={"/"}>
          <h1 className="flex text-2xl uppercase justify-center items-center">
            metrotech
          </h1>
        </Link>
      </nav>
      <div className=" bg-zinc-100">
        <div>{isMobile ? <CartMobile /> : <CartDesktop />}</div>{" "}
      </div>
    </div>
  );
}
