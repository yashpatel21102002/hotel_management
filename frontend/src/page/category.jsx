import React, { useState } from "react";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const buttons = [
    { image: "/images/ice-crem.webp", text: "All" },
    { image: "/images/gujarati.jpg", text: "Gujarati" },
    { image: "/images/panjabi.jpg", text: "Panjabi" },
    { image: "/images/kathiyawadi.jpg", text: "kathiyawadi" },
    { image: "/images/roti-naan.jpg", text: "Roti-naan" },
    { image: "/images/starter.webp", text: "Starter" },
    { image: "/images/drink.jpg", text: "Drink" },
    { image: "/images/ice-crem.webp", text: "Ice-crem" },
    { image: "/images/dessert.webp", text: "Dessert" },
    { image: "/images/salad.jpg", text: "Salad" },
    { image: "/images/soup.webp", text: "Soup" },
    { image: "/images/pizza.jpg", text: "Pizza" },
    { image: "/images/sandwich.jpg", text: "Sandwich" },
    { image: "/images/rice.jpg", text: "Rice" },
    { image: "/images/dal.jpg", text: "Dal" },
  ];

  const visibleButtons = showAll ? buttons : buttons.slice(0, 8);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Categories:-</h1>
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-red-500 w-max rounded-md text-white hover:bg-red-600 duration-300 max-sm:hidden"
        >
          {showAll ? "Show less" : "View all"}
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-4">
        {visibleButtons.map((button, index) => (
          <button
            key={index}
            className="flex items-center sm:justify-center gap-2 border border-red-500 hover:bg-red-500 focus:bg-red-500 focus:text-white hover:text-white rounded-md px-2 sm:px-4 py-2 duration-300"
          >
            <span className="h-6 w-6 bg-white flex items-center justify-center rounded-md object-cover overflow-hidden">
              <img src={button.image} alt={"icon"} loading="lazy" />
            </span>
            {button.text}
          </button>
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 duration-300 sm:hidden"
      >
        {showAll ? "Show less" : "View all"}
      </button>
    </div>
  );
};

export default Categories;
