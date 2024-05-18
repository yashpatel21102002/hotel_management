import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Productcard from "./productcard";


const Productgrid = ({ category }) => {
  const foodItems = useSelector((state) => state.hotel.hotelData?.foodItems || []);
  console.log('foodItems:', foodItems);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = foodItems;

      if (category && category.toLowerCase() !== "all") {
        filteredProducts = foodItems.filter(
          (product) => product.category.toLowerCase().trim() === category.toLowerCase().trim()
        );
      }

      if (searchQuery) {
        filteredProducts = filteredProducts.filter(
          (product) => product.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );
      }

      setSearchFilter(filteredProducts);
    };

    filterProducts()
  }, [category, foodItems, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
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
          className="border-2 outline-none border-primary px-2 py-2 rounded-md placeholder:text-red-300 max-md:w-full w-[40%]"
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
