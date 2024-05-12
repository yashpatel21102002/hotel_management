import React, { useState } from "react";
import Categories from "./category";
import Productgrid from "./productgrid";
import Developedby from "./developedby";

const Home = () => {
  const [category, setCategory] = useState("all");

  const handleCategory = (category) => {
    setCategory(category);
  };
  return (
    <div className="bg-secondary px-container py-[2rem] flex flex-col gap-[2rem] min-h-[calc(100vh-56px)]">
      <Categories onSelectCategory={handleCategory} />
      <Productgrid category={category} />
      <Developedby />
    </div>
  );
};

export default Home;
