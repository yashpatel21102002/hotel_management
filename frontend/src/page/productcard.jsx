import React from "react";
import Rating from "./rating";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Productcard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    dispatch(addItem(data));
    toast.success("Item added to cart!", {
      position: "bottom-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
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
            onClick={() => handleAddToCart(data)}
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
