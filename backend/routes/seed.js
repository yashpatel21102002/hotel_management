import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const dummyData = [
        {
            name: "Margherita Pizza",
            category: "Pizza",
            imageLink: "https://example.com/margherita.jpg",
            description: "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
            star: 4.5,
            price: 8.99,
            isVeg: true
        },
        {
            name: "Chicken Tikka Masala",
            category: "Curry",
            imageLink: "https://example.com/chicken-tikka-masala.jpg",
            description: "A popular Indian dish made with grilled chicken pieces cooked in a rich, creamy tomato-based sauce.",
            star: 4.8,
            price: 12.99,
            isVeg: false
        },
        {
            name: "Caesar Salad",
            category: "Salad",
            imageLink: "https://example.com/caesar-salad.jpg",
            description: "Fresh romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
            star: 4.2,
            price: 6.99,
            isVeg: true
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
