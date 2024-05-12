import React from "react";

const Home = () => {
  return (
    <div className="bg-secondary h-[100dvh] px-container py-container">
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
              className="border outline-none border-primary placeholder:text-primary placeholder:opacity-50 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-primary">Mobile Number:</label>
            <input
              type="number"
              title="number"
              placeholder="Enter Your Number"
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
            <button className="px-4 py-2 bg-primary rounded-md text-white hover:bg-darkprimary duration-300">
              proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
