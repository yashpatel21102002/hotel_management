import React, { useState } from "react";
import Counter from "./counter";

const CartItem = ({ data, onRemoveItem }) => {
  const [removing, setRemoving] = useState(false);

  const handleRemoveClick = () => {
    setRemoving(true);
    setTimeout(() => {
      onRemoveItem(data.id);
      setRemoving(false);
    }, 1000);
  };
  return (
    <div className="grid grid-cols-[30%_1fr] bg-white min-h-[100px] overflow-hidden">
      <img
        src={data.image}
        alt={data.alt}
        className="object-cover h-full w-full"
      />
      <div className="px-2 flex flex-col justify-between">
        <div className="flex justify-between items-center text-primary sm:text-lg font-bold">
          <p>{data.title}</p>
          <p>₹{data.price}</p>
        </div>
        <div>
          <Counter />
        </div>
        <div>
          <button
            className="text-primary sm:text-lg"
            onClick={handleRemoveClick}
            disabled={removing}
          >
            {removing ? "Wait..." : "Remove Item"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
