"use client";
import React, { useState } from "react";
import { ReactComponent as CartIcon } from "./assets/cart.svg";
import Cartslider from "./cartslider";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="sticky top-0 flex justify-between bg-red-500 px-container py-4 text-white">
      <h1>Hotel Name</h1>

      {cartOpen ? (
        <Cartslider onClose={toggleCart} />
      ) : (
        <button onClick={toggleCart}>
          <p className="sr-only">cart-icon</p>
          <CartIcon />
        </button>
      )}
    </div>
  );
};

export default Navbar;
