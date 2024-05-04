import React from "react";
import { ReactComponent as CrossIcon } from "./assets/cross.svg";

const Cartslider = () => {
  return (
    <div className="flex flex-col h-[100dvh] z-10 sticky top-0 bg-rose-200 md:w-[50%] w-full">
      <div className="flex justify-between items-center border-b-2 border-red-500 px-2 py-4">
        <h2 className="text-xl font-semibold">Cart</h2>
        <button>
          <CrossIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center px-2">
        <img src="/images/cartempty.png" alt="empty cart" />
      </div>
      <div>
        <button className="bg-red-500 text-white w-full py-2 text-xl px-2">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cartslider;
