import express from "express";
import Leader from "../models/leader.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { search, category, party, state, designation } = req.query;

        const filter = {};

        if (search) {
            filter.name = {
                $regex: search,
                $options: "i"
            };
        }

        if (category) {
            filter.category = category;
        }

        if (party) {
            filter.party = party;
        }


        if (state) {
            filter.state = state;
        }

        if(designation){
            filter.designation={
                $regex:designation,
                $options:"i"
            };
        }

        const leaders = await Leader.find(filter)
            .sort({ name: 1 })

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

router.get("/:id", async (req, res) => {

    try {

        const leader = await Leader.findById(req.params.id);

        if (!leader) {
            return res.status(404).json({
                success: false,
                message: "Leader not found"
            });
        }

        res.json({
            success: true,
            leader
        });

    } catch (error) {

        console.error(
            "Error fetching leader:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Failed to fetch leader"
        });
    }
});

export default router;