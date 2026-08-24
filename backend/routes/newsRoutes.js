import express from "express";
import { syncNews } from "../controllers/newsController.js";

const router = express.Router();

router.get("/sync", syncNews);

export default router;