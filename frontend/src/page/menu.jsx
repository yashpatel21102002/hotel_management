import React, { useState } from "react";
import Categories from "./category";
import Productgrid from "./productgrid";
import Developedby from "./developedby";
import Navbar from "./navbar";

const Menu = () => {
  const [category, setCategory] = useState("all");

  const handleCategory = (category) => {
    setCategory(category);
  };
  return (
    <div>
      <Navbar />
      <div className="bg-secondary px-container py-[2rem] flex flex-col gap-[2rem] min-h-[calc(100vh-56px)]">
        <Categories onSelectCategory={handleCategory} />
        <Productgrid category={category} />
        <Developedby />
      </div>
    </div>
  );
};

export default Menu;
