import express from "express";
import civicUpdateRoutes from "./routes/civicUpdateRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import leaderRoutes from "./routes/leaderRoutes.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import commentRoutes from "./routes/commentRoutes.mjs";

import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/comments", commentRoutes);
app.use("/api/news", newsRoutes);

app.get("/", (req, res) => {
    res.send("CivicLens backend is running!");
});

app.use("/api/auth", authRoutes);

app.use("/api/civic-updates", civicUpdateRoutes);

app.use("/api/leaders", leaderRoutes);

export default app;