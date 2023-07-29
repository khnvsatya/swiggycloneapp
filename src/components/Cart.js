import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const dispath = useDispatch();

  const [cartPage, setCartPage] = useState(true);
  const [cartToatal, setCartTotal] = useState(null);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClearCart = () => {
    setCartPage(false);
    dispath(clearCart());
  };
  return (
    <div>
      {cartItems.length ? (
        <div className="flex justify-normal">
          <div className="menu-card w-8/12 my-[25px] ml-6">
            <div className="text-center mt-15">
              <button
                className="bg-black p-2 text-center text-white"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            <div>
              <ItemList itemCards={cartItems} cart={cartPage} />
            </div>
          </div>
          <div className="w-4/12 h-[100vw] m-2">
            <h3 className="text-center font-bold m-5 text-lg">TOTAL</h3>
            <div>
              {cartItems.map((item) => {
                console.log(item);
                const { id, name, price, defaultPrice } = item?.card?.info;
                return (
                  <div>
                    <div key={id} className=" mx-2 flex justify-between">
                      <p className="w-7/12 text-wrap">{name}</p>
                      <p className="w-5/12 text-right mr-3">
                        {(price | defaultPrice) / 100}.00
                      </p>
                    </div>
                  </div>
                );
              })}
              <hr className="my-2" />
              <p className="ml-4">Total:{cartToatal} </p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" text-center mt-15">
          <p className="mb-4">
            your Cart is Empty, please add Some items to Yor Cart
          </p>
          <Link
            to="/"
            className=" text-white bg-black mt-5 p-2 rounded cursor-pointer"
          >
            Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
