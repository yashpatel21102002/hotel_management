import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const dummyData = [
        {
            title: "Margherita Pizza",
            category: "Pizza",
            image: "/images/gujarati.jpg",
            description: "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
            rating: 4.5,
            price: "8.99",
            isVeg: true,
            btn: "Add to Cart"
        },
        {
            title: "Chicken Tikka Masala",
            category: "Curry",
            image: "/images/gujarati.jpg",
            description: "A popular Indian dish made with grilled chicken pieces cooked in a rich, creamy tomato-based sauce.",
            rating: 4.8,
            price: "12.99",
            isVeg: false,
            btn: "Add to Cart"
        },
        {
            title: "Caesar Salad",
            category: "Salad",
            image: "/images/gujarati.jpg",
            description: "Fresh romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
            rating: 4.2,
            price: "6.99",
            isVeg: true,
            btn: "Add to Cart"
        }
    ];

    for (const foodItem of dummyData) {
        await prisma.foodItem.create({ data: foodItem });
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

//this is for the educational purposes