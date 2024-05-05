import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const dummyData = [
    {
      title: "Sev Tamater",
      price: "100",
      image: "/images/gujarati.jpg",
      alt: "Sev-Tamater",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Gujarati",
    },
    {
      title: "Panner Angara",
      price: "100",
      image: "/images/panjabi.jpg",
      alt: "Panner-Angara",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Punjabi",
    },
    {
      title: "Kaju Ganthiya",
      price: "100",
      image: "/images/kathiyawadi.jpg",
      alt: "Kaju-Ganthiya",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "kathiyawadi",
    },
    {
      title: "Roti",
      price: "100",
      image: "/images/roti-naan.jpg",
      alt: "Roti",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Roti-naan",
    },
    {
      title: "Panner Chili",
      price: "100",
      image: "/images/starter.webp",
      alt: "Panner-Chili",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Starter",
    },
    {
      title: "Butter Milk",
      price: "100",
      image: "/images/drink.jpg",
      alt: "Butter-Milk",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Drink",
    },
    {
      title: "Ice Crem",
      price: "100",
      image: "/images/ice-crem.webp",
      alt: "Ice-Crem",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Ice-crem",
    },
    {
      title: "Dessert",
      price: "100",
      image: "/images/dessert.webp",
      alt: "Dessert",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Dessert",
    },
    {
      title: "Salad",
      price: "100",
      image: "/images/salad.jpg",
      alt: "salad",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Salad",
    },
    {
      title: "Soup",
      price: "100",
      image: "/images/soup.webp",
      alt: "Soup",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Soup",
    },
    {
      title: "Pizza",
      price: "100",
      image: "/images/pizza.jpg",
      alt: "Pizza",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Pizza",
    },
    {
      title: "Sandwich",
      price: "100",
      image: "/images/sandwich.jpg",
      alt: "Sandwich",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Sandwich",
    },
    {
      title: "Jerra Rice",
      price: "100",
      image: "/images/rice.jpg",
      alt: "Jerra-Rice",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Rice",
    },
    {
      title: "Dal Fry",
      price: "100",
      image: "/images/dal.jpg",
      alt: "Dal-Fry",
      description:
        "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      btn: "Add to Cart",
      rating: 4,
      isVeg: true,
      category: "Dal",
    },
  ];

  for (const foodItem of dummyData) {
    await prisma.foodItem.create({ data: foodItem });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//this is for the educational purposes
