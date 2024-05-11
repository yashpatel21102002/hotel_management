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
    <div className="flex items-center gap-2 w-max rounded-full">
      <button
        onClick={handleDecrement}
        className="border-none rounded-sm p-1 duration-300 text-primary hover:bg-secondary hover:bg-opacity-50"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      <div className="text-primary">{count}</div>
      <button
        onClick={handleIncrement}
        className="border-none rounded-md p-1 duration-300 text-primary hover:bg-secondary hover:bg-opacity-50"
      >
        <PlushIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Counter;
