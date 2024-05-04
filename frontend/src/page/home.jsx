import React from "react";
import Categories from "./category";
import Productgrid from "./productgrid";
import Developedby from "./developedby";

const Home = () => {
  return (
    <div className="bg-rose-200 px-container py-[2rem] flex flex-col gap-[2rem] min-h-[calc(100vh-56px)]">
      <Categories />
      <Productgrid />
      <Developedby />
    </div>
  );
};

export default Home;
