import CivicUpdate from "../models/CivicUpdate.js";

export const createCivicUpdate = async (req, res) => {
    try {
        const civicUpdate = await CivicUpdate.create(req.body);

        res.status(201).json(civicUpdate);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create civic update",
            error: error.message
        });
    }
};

export const getCivicUpdates = async (req, res) => {
    try {
        const {
            search,
            category,
            page = 1,
            limit = 10
        } = req.query;

        const query = {};

        if (category) {
            query.category = category;
        }

        if (search) {
            query.$or = [
                { title: new RegExp(search, "i") },
                { description: new RegExp(search, "i") }
            ];
        }

        const currentPage = Math.max(parseInt(page) || 1, 1);
        const itemsPerPage = Math.max(parseInt(limit) || 10, 1);

        const skip = (currentPage - 1) * itemsPerPage;

        const totalItems = await CivicUpdate.countDocuments(query);

        const civicUpdates = await CivicUpdate
            .find(query)
            .sort({ publishedAt: -1 })
            .skip(skip)
            .limit(itemsPerPage);

        const totalPages = Math.ceil(totalItems / itemsPerPage);

        res.status(200).json({
            data: civicUpdates,
            pagination: {
                currentPage,
                itemsPerPage,
                totalItems,
                totalPages
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch civic updates",
            error: error.message
        });
    }
};

export const getCivicUpdateById = async (req, res) => {
    try {
        const { id } = req.params;

        const civicUpdate = await CivicUpdate.findById(id);

        if (!civicUpdate) {
            return res.status(404).json({
                message: "Civic update not found"
            });
        }

        res.status(200).json(civicUpdate);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch civic update",
            error: error.message
        });
    }
};