import express from "express";
import Leader from "../models/leader.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const leaders = await Leader.find()
            .sort({ name: 1 });

        res.json({
            success: true,
            count: leaders.length,
            leaders
        });

    } catch (error) {
        console.error(
            "Error fetching leaders:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch leaders"
        });
    }
});

export default router;