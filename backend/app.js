import express from "express";
import civicUpdateRoutes from "./routes/civicUpdateRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/news", newsRoutes);

app.get("/", (req, res) => {
    res.send("CivicLens backend is running!");
});

app.use("/api/civic-updates", civicUpdateRoutes);

export default app;