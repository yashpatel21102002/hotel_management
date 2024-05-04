import React, { useEffect, useState } from "react";
import Productcard from "./productcard";
import axios from "axios"

// const products = [
//   {
//     id: 1,
//     title: "Sev Tamater",
//     price: "100",
//     image: "/images/gujarati.jpg",
//     alt: "Sev-Tamater",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 4,
//     category:"Gujarati",
//   },
//   {
//     id: 2,
//     title: "Panner Angara",
//     price: "100",
//     image: "/images/panjabi.jpg",
//     alt: "Panner-Angara",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 3,
//     category:"Gujarati",
//   },
//   {
//     id: 3,
//     title: "Kaju Ganthiya",
//     price: "100",
//     image: "/images/kathiyawadi.jpg",
//     alt: "Kaju-Ganthiya",
//     description:
//       "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
//     btn: "Add To Cart",
//     rating: 4,
//     category:"Gujarati",
//   },
//   {
//     id: 4,
//     title: "Roti",
//     price: "100",
//     image: "/images/roti-naan.jpg",
//     alt: "Roti",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 3,
//     category:"Drink",
//   },
//   {
//     id: 5,
//     title: "Panner Chili",
//     price: "100",
//     image: "/images/starter.webp",
//     alt: "Panner-Chili",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 4,
//     category:"Drink",
//   },
//   {
//     id: 6,
//     title: "Butter Milk",
//     price: "100",
//     image: "/images/drink.jpg",
//     alt: "Butter-Milk",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 3,
//     category:"Drink",
//   },
//   {
//     id: 7,
//     title: "Ice Crem",
//     price: "100",
//     image: "/images/ice-crem.webp",
//     alt: "Ice-Crem",
//     description:
//       "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
//     btn: "Add To Cart",
//     rating: 4,
//     category:"Panjabi",
//   },
//   {
//     id: 8,
//     title: "Dessert",
//     price: "100",
//     image: "/images/dessert.webp",
//     alt: "Dessert",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 3,
//     category:"Panjabi",
//   },
//   {
//     id: 9,
//     title: "Salad",
//     price: "100",
//     image: "/images/salad.jpg",
//     alt: "salad",
//     description:
//       "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
//     btn: "Add To Cart",
//     rating: 4,
//     category:"Panjabi",
//   },
//   {
//     id: 10,
//     title: "Soup",
//     price: "100",
//     image: "/images/soup.webp",
//     alt: "Soup",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 3,
//     category:"Panjabi",
//   },
//   {
//     id: 11,
//     title: "Pizza",
//     price: "100",
//     image: "/images/pizza.jpg",
//     alt: "Pizza",
//     description:
//       "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
//     btn: "Add To Cart",
//     rating: 4,
//     category:"Panjabi",
//   },
//   {
//     id: 12,
//     title: "Sandwich",
//     price: "100",
//     image: "/images/sandwich.jpg",
//     alt: "Sandwich",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 3,
//     category:"Panjabi",
//   },
//   {
//     id: 13,
//     title: "Jerra Rice",
//     price: "100",
//     image: "/images/rice.jpg",
//     alt: "Jerra-Rice",
//     description:
//       "Description of Product 1 Description of Product 1 Description of Product 1 Description of Product 1",
//     btn: "Add To Cart",
//     rating: 4,
//     category:"Starter",
//   },
//   {
//     id: 14,
//     title: "Dal Fry",
//     price: "100",
//     image: "/images/dal.jpg",
//     alt: "Dal-Fry",
//     description:
//       "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
//     btn: "Add To Cart",
//     rating: 3,
//     category:"Starter",
//   },
// ];

let products = [];

const first = async()=>{
  products = (await axios.get('http://localhost:8080/api/food')).data
  console.log("first",products);
}
first();


const Productgrid = ({category}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchFilter,setSearchFilter] = useState(products);
  let count = 0;
  
  useEffect(() => {
    

    const filter = ()=>{
      if(category.toLowerCase() === "all"){
        const filteredProducts = products
        setFilteredProducts(filteredProducts);
        setSearchFilter(filteredProducts);
      }else{

        const filteredProducts = products.filter((product)=> product.category.toLowerCase().trim().includes(category.toLowerCase().trim()))
        setFilteredProducts(filteredProducts);
        setSearchFilter(filteredProducts);
        //console.log(filteredProducts)
      }
      console.log("second useeffect")
    }
    filter()
  },[category])


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
          className="border-2 outline-none border-red-500 px-2 py-2 rounded-md placeholder:text-red-300 max-md:w-full"
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
