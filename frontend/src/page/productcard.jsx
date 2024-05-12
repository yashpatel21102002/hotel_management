import React from "react";
import Rating from "./rating";

const Productcard = ({ data, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(data); // Pass the product data to the parent component
  };

  return (
    <div>
      <div className="w-full aspect-[3/4] border border-primary rounded-md p-4 flex flex-col justify-between gap-2 bg-white">
        <div className="border border-primary rounded-md  flex items-center justify-center w-full aspect-[4/3] overflow-hidden">
          <img src={data.image} alt={data.alt} />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">{data.title}</p>
          <p className="font-bold">₹{data.price}</p>
        </div>
        <div className="line-clamp-2">{data.description}</div>
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 bg-primary rounded-md text-white hover:bg-darkprimary duration-300"
            onClick={handleAddToCart}
          >
            {data.btn}
          </button>
          <Rating initialRating={data.rating} />
        </div>
      </div>
    </div>
  );
};

export default Productcard;
