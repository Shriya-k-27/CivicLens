import { syncNewsData } from "../services/newsSyncService.js";

export const syncNews = async (req, res) => {
    try {
        const result = await syncNewsData();

        res.status(200).json({
            message: "News synchronized successfully",
            ...result
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to sync news",
            error: error.message
        });
    }
};