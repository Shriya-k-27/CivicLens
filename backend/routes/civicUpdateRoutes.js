import express from "express";
import { createCivicUpdate , getCivicUpdates , getCivicUpdateById } from "../controllers/civicUpdateController.js";

const router = express.Router();

router.post("/", createCivicUpdate);

router.get("/", getCivicUpdates);

router.get("/:id", getCivicUpdateById);

export default router;