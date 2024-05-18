import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchHotel } from "../redux/hotel";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleProceed = () => {
    const url = window.location.href;
    const hotelId = url.split("/").pop();
    if (hotelId) {
      dispatch(fetchHotel(hotelId)).then((result) => {
        if (fetchHotel.fulfilled.match(result)) {
          console.log('Fetch successful:', result.payload);
          navigate("/menu");
        } else if (fetchHotel.rejected.match(result)) {
          console.error('Fetch failed:', result.payload);
        }
      });
    }
  };

  return (
    <div className="bg-secondary h-[100vh] px-container py-container">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl sm:text-3xl text-primary text-center">
          Welcome
        </h1>
        <div className="p-4 border border-primary rounded-md flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-primary">Name:</label>
            <input
              type="text"
              title="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border outline-none border-primary placeholder:text-primary placeholder:opacity-50 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary">Mobile Number:</label>
            <input
              type="number"
              title="number"
              placeholder="Enter Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border outline-none border-primary placeholder:text-primary placeholder:opacity-50 p-2 rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <a
              className="px-4 py-2 bg-primary rounded-md text-white hover:bg-darkprimary duration-300"
              href="/menu"
            >
              skip
            </a>
            <button
              className="px-4 py-2 bg-primary rounded-md text-white hover:bg-darkprimary duration-300"
              onClick={handleProceed}
            >
              proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
