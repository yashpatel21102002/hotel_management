import React from "react";

const Productcard = ({ data }) => {
  return (
    <div>
      <div className="w-full aspect-[3/4] border border-red-500 rounded-md p-4 flex flex-col justify-between gap-2 bg-white">
        <div className="border border-red-500 rounded-md  flex items-center justify-center w-full aspect-[4/3] overflow-hidden">
          <img src={data.image} alt={data.alt} />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">{data.title}</p>
          <p className="font-bold">₹{data.price}</p>
        </div>
        <div className="line-clamp-2">{data.description}</div>
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 duration-300">
            {data.btn}
          </button>
          <p>{data.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
