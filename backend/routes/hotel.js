import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router()
const prisma = new PrismaClient()

router.get("/:id", async (req, res) => {
    const params = parseInt(req.params.id, 10)

    try {
        const findHotel = await prisma.hotel.findUnique({
            where: { id: params },
            include: {
                foodItems: true,
                tables: true
            }
        })
        res.status(200).json(findHotel)

    } catch (e) {
        res.status(500).json({ error: "Error from fetching", message: e.message })
    }
})

export default router;
