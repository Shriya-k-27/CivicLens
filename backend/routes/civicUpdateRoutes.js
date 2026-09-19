import express from "express";
import { createCivicUpdate , getCivicUpdates } from "../controllers/civicUpdateController.js";

const router = express.Router();

router.post("/", createCivicUpdate);

router.get("/", getCivicUpdates);

export default router;