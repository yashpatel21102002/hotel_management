"use client";
import React, { useState } from "react";
import { ReactComponent as CartIcon } from "./assets/cart.svg";
import Cartslider from "./cartslider";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const hotelname = useSelector((state) => state.hotel.hotelData?.name || "");
  const username = useSelector((state) => state.user.name || "");
  const cartItems = useSelector((state) => state.cart.items);
  const counter = cartItems.length;

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="sticky top-0 flex justify-between bg-primary px-container py-4 text-white">
      <h1 className="flex-1">{hotelname}</h1>

      {cartOpen ? (
        <Cartslider onClose={toggleCart} />
      ) : (
        <div className="flex gap-2">
          <span>Hey {username ? username : "User!"}</span>
          <button
            onClick={toggleCart}
            className="relative flex gap-2 justify-center items-center"
          >
            <CartIcon />
            <p className="absolute -top-2 -right-2 bg-secondary rounded-full text-xs px-2 py-1">
              {counter}
            </p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
