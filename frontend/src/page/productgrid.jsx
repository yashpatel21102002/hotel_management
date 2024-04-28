import React, { useState } from "react";
import Productcard from "./productcard";

const products = [
  {
    id: 1,
    title: "Sev Tamater",
    price: "100",
    image: "/images/gujarati.jpg",
    alt: "Sev-Tamater",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Panner Angara",
    price: "100",
    image: "/images/panjabi.jpg",
    alt: "Panner-Angara",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Kaju Ganthiya",
    price: "100",
    image: "/images/kathiyawadi.jpg",
    alt: "Kaju-Ganthiya",
    description:
      "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 4,
    title: "Roti",
    price: "100",
    image: "/images/roti-naan.jpg",
    alt: "Roti",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 5,
    title: "Panner Chili",
    price: "100",
    image: "/images/starter.webp",
    alt: "Panner-Chili",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Butter Milk",
    price: "100",
    image: "/images/drink.jpg",
    alt: "Butter-Milk",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 7,
    title: "Ice Crem",
    price: "100",
    image: "/images/ice-crem.webp",
    alt: "Ice-Crem",
    description:
      "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 8,
    title: "Dessert",
    price: "100",
    image: "/images/dessert.webp",
    alt: "Dessert",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 9,
    title: "Salad",
    price: "100",
    image: "/images/salad.jpg",
    alt: "salad",
    description:
      "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 10,
    title: "Soup",
    price: "100",
    image: "/images/soup.webp",
    alt: "Soup",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 11,
    title: "Pizza",
    price: "100",
    image: "/images/pizza.jpg",
    alt: "Pizza",
    description:
      "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 12,
    title: "Sandwich",
    price: "100",
    image: "/images/sandwich.jpg",
    alt: "Sandwich",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 13,
    title: "Jerra Rice",
    price: "100",
    image: "/images/rice.jpg",
    alt: "Jerra-Rice",
    description:
      "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
  {
    id: 14,
    title: "Dal Fry",
    price: "100",
    image: "/images/dal.jpg",
    alt: "Dal-Fry",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
    btn: "Add To Cart",
    rating: 4.5,
  },
];

const Productgrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className=" flex flex-col gap-2">
      <div className="flex justify-between md:items-center max-md:flex-col max-md:gap-2">
        <h1 className="text-2xl">Categories Items:-</h1>
        <input
          type="text"
          placeholder="Search food..."
          value={searchQuery}
          onChange={handleSearch}
          className="border-2 outline-none border-red-500 px-2 py-1 rounded-md placeholder:text-red-300 max-md:w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
        {filteredProducts.map((product) => (
          <Productcard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Productgrid;
