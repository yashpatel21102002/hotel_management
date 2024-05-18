/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import clsx from "clsx";
import { ReactComponent as CrossIcon } from "./assets/cross.svg";
import { ReactComponent as RightSideIcon } from "./assets/rightside.svg";
import CartItem from "./cartitem";
import { useSelector,useDispatch } from "react-redux";


const Cartslider = ({ side = "right", onClose }) => {
  const cartItems = useSelector((state) => state.cart.items)

  const [selectedItems, setSelectedItems] = useState([]);

 

  const handlePlaceOrder = () => {
    //setSelectedItems([...foodItems]);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx("pointer-events-none fixed flex", {
              "inset-y-0 left-0 pr-10 max-w-full": side === "left",
              "inset-y-0 right-0 sm:pl-10 max-w-full ": side === "right",
              "inset-x-0 top-0 pb-10 h-[50vh] max-h-full": side === "top",
              "inset-x-0 bottom-0 pt-10 max-h-full": side === "bottom",
            })}
          >
            <div
              className={clsx("pointer-events-auto w-screen ", {
                "max-w-2xl max-sm:max-w-full": ["left", "right"].includes(side),
                "max-h-max": ["top", "bottom"].includes(side),
              })}
            >
              <div className="flex flex-col bg-secondary h-[100dvh] shadow-xl overflow-y-auto no-scrollbar">
                <div className="flex items-center justify-between px-2 py-4 border-b-2 border-primary ">
                  <h2 className="font-medium text-xl text-darkprimary">Bag</h2>
                  <div className="ml-3 flex h-5 items-center">
                    <button
                      type="button"
                      className="relative -m-2 p-2"
                      onClick={onClose}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close panel button</span>
                      <CrossIcon className="h-6 w-6 text-darkprimary" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-2 flex flex-col gap-2">
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col gap-8 items-center justify-center h-full p-4">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="/images/cartempty.png"
                          alt="empty cart"
                          width={400}
                          height={400}
                        />
                      </div>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <CartItem
                        data={item}
                        key={item.id}
                      />
                    ))
                  )}
                </div>
                <div>
                  {cartItems.length === 0 ? (
                    <a
                      className="bg-primary text-white w-full py-2 text-xl px-2 flex items-center justify-center gap-2"
                      href="/"
                    >
                      Continue Order
                      <RightSideIcon className="h-4 w-4" />
                    </a>
                  ) : (
                    <button
                      className="bg-primary text-white w-full py-2 text-xl px-2"
                      onClick={handlePlaceOrder}
                    >
                      Place Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartslider;
