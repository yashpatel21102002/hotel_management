import React from "react";
import Categories from "./category";
import Productgrid from "./productgrid";

const Home = () => {
  return (
    <div className="bg-rose-200 px-container py-[2rem] flex flex-col gap-[2rem]">
      <Categories />
      <Productgrid />
    </div>
  );
};

export default Home;
