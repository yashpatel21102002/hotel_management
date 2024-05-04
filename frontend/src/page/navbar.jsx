import React from "react";
import { ReactComponent as CartIcon } from "./assets/cart.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between bg-red-500 px-container py-4 text-white">
      <h1>Hotel Name</h1>
      <button>
        <p className="sr-only">cart-icon</p>
        <CartIcon />
      </button>
    </div>
  );
};

export default Navbar;
