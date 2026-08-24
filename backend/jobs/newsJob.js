import cron from "node-cron";
import { syncNewsData } from "../services/newsSyncService.js";

cron.schedule(
    "0 0 * * *",
    async () => {
        try {
            const result = await syncNewsData();

            console.log("News sync completed:", result);
        } catch (error) {
            console.error("News sync failed:", error.message);
        }
    },
    {
        timezone: "Asia/Kolkata"
    }
);