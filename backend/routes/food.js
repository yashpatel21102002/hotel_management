import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

// API to post a new food item
router.post("/", async (req, res) => {
    try {
        const food = req.body;
        const postFood = await prisma.foodItem.create({
            data: food
        });
        console.log(postFood);
        res.json(postFood);
    } catch (error) {
        console.error("Error posting food item:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API to get all food items
router.get("/food", async (req, res) => {
    try {
        const foodItems = await prisma.foodItem.findMany();
        console.log(foodItems);
        res.json(foodItems);
    } catch (error) {
        console.error("Error getting food items:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default router;
