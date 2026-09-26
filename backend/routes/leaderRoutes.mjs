import express from "express";
import Leader from "../models/leader.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { search, category, party, state, designation } = req.query;

        const filter = {};

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

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

        const skip=(page-1)*limit;
        const leaders = await Leader.find(filter)
            .sort({ name: 1 })
            .skip(skip)
            .limit(Number(limit));

        const totalLeaders = await Leader.countDocuments(filter);
        const totalPages = Math.ceil(totalLeaders / limit);

        res.json({
            success: true,
            count: leaders.length,
            totalLeaders,
            totalPages,
            currentPage: Number(page),
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