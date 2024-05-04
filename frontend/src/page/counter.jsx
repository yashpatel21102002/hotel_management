import React, { useState } from "react";
import { ReactComponent as PlushIcon } from "./assets/plus.svg";
import { ReactComponent as MinusIcon } from "./assets/minus.svg";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-2 w-max p-1 rounded-full">
      <button
        onClick={handleDecrement}
        className="border-none rounded-sm p-2 duration-300 text-red-500 hover:bg-rose-100"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      <div className="text-red-500">{count}</div>
      <button
        onClick={handleIncrement}
        className="border-none rounded-md p-2 duration-300 text-red-500 hover:bg-rose-100"
      >
        <PlushIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Counter;
