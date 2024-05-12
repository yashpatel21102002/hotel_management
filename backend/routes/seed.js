import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main() {
//   const dummyData = [
//     {
//       title: "Sev Tamater",
//       price: "100",
//       image: "/images/gujarati.jpg",
//       alt: "Sev-Tamater",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Gujarati",
//     },
//     {
//       title: "Panner Angara",
//       price: "100",
//       image: "/images/panjabi.jpg",
//       alt: "Panner-Angara",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Punjabi",
//     },
//     {
//       title: "Kaju Ganthiya",
//       price: "100",
//       image: "/images/kathiyawadi.jpg",
//       alt: "Kaju-Ganthiya",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "kathiyawadi",
//     },
//     {
//       title: "Roti",
//       price: "100",
//       image: "/images/roti-naan.jpg",
//       alt: "Roti",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Roti-naan",
//     },
//     {
//       title: "Panner Chili",
//       price: "100",
//       image: "/images/starter.webp",
//       alt: "Panner-Chili",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Starter",
//     },
//     {
//       title: "Butter Milk",
//       price: "100",
//       image: "/images/drink.jpg",
//       alt: "Butter-Milk",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Drink",
//     },
//     {
//       title: "Ice Crem",
//       price: "100",
//       image: "/images/ice-crem.webp",
//       alt: "Ice-Crem",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Ice-crem",
//     },
//     {
//       title: "Dessert",
//       price: "100",
//       image: "/images/dessert.webp",
//       alt: "Dessert",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Dessert",
//     },
//     {
//       title: "Salad",
//       price: "100",
//       image: "/images/salad.jpg",
//       alt: "salad",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Salad",
//     },
//     {
//       title: "Soup",
//       price: "100",
//       image: "/images/soup.webp",
//       alt: "Soup",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Soup",
//     },
//     {
//       title: "Pizza",
//       price: "100",
//       image: "/images/pizza.jpg",
//       alt: "Pizza",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Pizza",
//     },
//     {
//       title: "Sandwich",
//       price: "100",
//       image: "/images/sandwich.jpg",
//       alt: "Sandwich",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Sandwich",
//     },
//     {
//       title: "Jerra Rice",
//       price: "100",
//       image: "/images/rice.jpg",
//       alt: "Jerra-Rice",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Rice",
//     },
//     {
//       title: "Dal Fry",
//       price: "100",
//       image: "/images/dal.jpg",
//       alt: "Dal-Fry",
//       description:
//         "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
//       btn: "Add to Cart",
//       rating: 4,
//       isVeg: true,
//       category: "Dal",
//     },
//   ];

//   // Seed data for Hotel
//   prisma.hotel.create({
//     data: {
//       name: "Hotel A",
//       address: "123 Main St",
//       city: "City A",
//       country: "Country X",
//       foodItems: {
//         create: [
//           {
//             title: "Burger",
//             category: "Fast Food",
//             image: "burger_image_url",
//             alt: "Burger Image",
//             description: "Delicious beef burger with cheese and vegetables",
//             rating: 4,
//             btn: "Order Now",
//             price: "$10",
//             isVeg: false
//           },
//           {
//             title: "Pizza",
//             category: "Italian",
//             image: "pizza_image_url",
//             alt: "Pizza Image",
//             description: "Thin crust pizza with pepperoni and cheese",
//             rating: 4.5,
//             btn: "Order Now",
//             price: "$12",
//             isVeg: false
//           },
//           // Add more FoodItems as needed
//         ]
//       },
//       tables: {
//         create: [
//           {
//             tableNumber: 1,
//             capacity: 4,
//             isReserved: false
//           },
//           {
//             tableNumber: 2,
//             capacity: 6,
//             isReserved: true
//           },
//           // Add more Tables as needed
//         ]
//       }
//     }
//   }).then(() => {
//     console.log("Seed data for Hotel A created successfully.");
//   }).catch(error => {
//     console.error("Error creating seed data for Hotel A:", error);
//   });

//   // Seed data for another Hotel
//   prisma.hotel.create({
//     data: {
//       name: "Hotel B",
//       address: "456 Park Ave",
//       city: "City B",
//       country: "Country Y",
//       foodItems: {
//         create: [
//           {
//             title: "Sushi",
//             category: "Japanese",
//             image: "sushi_image_url",
//             alt: "Sushi Image",
//             description: "Fresh assorted sushi rolls with wasabi and soy sauce",
//             rating: 4.8,
//             btn: "Order Now",
//             price: "$15",
//             isVeg: false
//           },
//           {
//             title: "Salad",
//             category: "Healthy",
//             image: "salad_image_url",
//             alt: "Salad Image",
//             description: "Fresh mixed greens with cherry tomatoes, cucumbers, and balsamic dressing",
//             rating: 4.2,
//             btn: "Order Now",
//             price: "$8",
//             isVeg: true
//           },
//           // Add more FoodItems as needed
//         ]
//       },
//       tables: {
//         create: [
//           {
//             tableNumber: 1,
//             capacity: 8,
//             isReserved: false
//           },
//           {
//             tableNumber: 2,
//             capacity: 10,
//             isReserved: false
//           },
//           // Add more Tables as needed
//         ]
//       }
//     }
//   }).then(() => {
//     console.log("Seed data for Hotel B created successfully.");
//   }).catch(error => {
//     console.error("Error creating seed data for Hotel B:", error);
//   });

// }

// Seed data for Hotel
prisma.hotel.create({
  data: {
    name: "Hotel A",
    address: "123 Main St",
    city: "City A",
    country: "Country X",
    foodItems: {
      create: [
        {
          title: "Burger",
          category: "Fast Food",
          image: "burger_image_url",
          alt: "Burger Image",
          description: "Delicious beef burger with cheese and vegetables",
          rating: 4,
          btn: "Order Now",
          price: "$10",
          isVeg: false
        },
        {
          title: "Pizza",
          category: "Italian",
          image: "pizza_image_url",
          alt: "Pizza Image",
          description: "Thin crust pizza with pepperoni and cheese",
          rating: 4.5,
          btn: "Order Now",
          price: "$12",
          isVeg: false
        },
        // Add more FoodItems as needed
      ]
    },
    tables: {
      create: [
        {
          tableNumber: 1,
          capacity: 4,
          isReserved: false
        },
        {
          tableNumber: 2,
          capacity: 6,
          isReserved: true
        },
        // Add more Tables as needed
      ]
    }
  }
}).then(() => {
  console.log("Seed data for Hotel A created successfully.");
}).catch(error => {
  console.error("Error creating seed data for Hotel A:", error);
});

// Seed data for another Hotel
prisma.hotel.create({
  data: {
    name: "Hotel B",
    address: "456 Park Ave",
    city: "City B",
    country: "Country Y",
    foodItems: {
      create: [
        {
          title: "Sushi",
          category: "Japanese",
          image: "sushi_image_url",
          alt: "Sushi Image",
          description: "Fresh assorted sushi rolls with wasabi and soy sauce",
          rating: 4.8,
          btn: "Order Now",
          price: "$15",
          isVeg: false
        },
        {
          title: "Salad",
          category: "Healthy",
          image: "salad_image_url",
          alt: "Salad Image",
          description: "Fresh mixed greens with cherry tomatoes, cucumbers, and balsamic dressing",
          rating: 4.2,
          btn: "Order Now",
          price: "$8",
          isVeg: true
        },
        // Add more FoodItems as needed
      ]
    },
    tables: {
      create: [
        {
          tableNumber: 1,
          capacity: 8,
          isReserved: false
        },
        {
          tableNumber: 2,
          capacity: 10,
          isReserved: false
        },
        // Add more Tables as needed
      ]
    }
  }
}).then(() => {
  console.log("Seed data for Hotel B created successfully.");
}).catch(error => {
  console.error("Error creating seed data for Hotel B:", error);
});



