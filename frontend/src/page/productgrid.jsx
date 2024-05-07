import React, { useEffect, useState } from "react";
import Productcard from "./productcard";
import axios from "axios";

let products = [];

const first = async () => {
  products = (await axios.get("http://localhost:8080/api/food")).data;
  console.log("first", products);
};
await first();

const Productgrid = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchFilter, setSearchFilter] = useState(products);

  useEffect(() => {
    const filter = async () => {
      if (category === "") {
        console.log("inside the if");
        return;
      }
      if (category.toLowerCase() === "all") {
        const filteredProducts = await products;
        setFilteredProducts(filteredProducts);
        setSearchFilter(filteredProducts);
      } else {
        const filteredProducts = await products.filter((product) =>
          product.category
            .toLowerCase()
            .trim()
            .includes(category.toLowerCase().trim())
        );
        setFilteredProducts(filteredProducts);
        setSearchFilter(filteredProducts);
      }
      console.log("second useeffect");
    };
    filter();
  }, [category]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase().trim())
    );
    setSearchFilter(filtered);
  };
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex justify-between md:items-center max-md:flex-col max-md:gap-2">
        <h1 className="text-2xl">Categories Items:-</h1>
        <input
          type="text"
          placeholder="Search food..."
          value={searchQuery}
          onChange={handleSearch}
          className="border-2 outline-none border-red-500 px-2 py-2 rounded-md placeholder:text-red-300 max-md:w-full w-[40%]"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
        {searchFilter.length > 0 ? (
          searchFilter.map((product) => (
            <Productcard key={product.id} data={product} />
          ))
        ) : (
          <p className="text-center grid col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
            No matching items found for the selected category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Productgrid;
