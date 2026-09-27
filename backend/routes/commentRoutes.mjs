import express from "express";
import Comment from "../models/comments.mjs";
import { protect } from "../middleware/auth.mjs";

const router = express.Router();


// Get comments for a particular Civic Update
router.get("/:updateId", async (req, res) => {
    try {
        const comments = await Comment.find({
            updateId: req.params.updateId
        })
        .sort({ createdAt: -1 });

        res.status(200).json(comments);

    } catch (err) {
        console.log("Get comments error:", err.message);

        res.status(500).json({
            message: "Internal server error"
        });
    }
});


// Create a new comment
router.post("/", protect, async (req, res) => {
    try {
        const { updateId, text } = req.body;

        if (!updateId || !text) {
            return res.status(400).json({
                message: "updateId and text are required"
            });
        }

        const comment = await Comment.create({
            userId: req.user.userId,
            updateId: updateId,
            text: text
        });

        res.status(201).json(comment);

    } catch (err) {
        console.log("Create comment error:", err.message);

        res.status(500).json({
            message: "Internal server error"
        });
    }
});


// Delete a comment
router.delete("/:commentId", protect, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);

        if (!comment) {
            return res.status(404).json({
                message: "Comment not found"
            });
        }

        // Only the user who created the comment can delete it
        if (comment.userId.toString() !== req.user.userId) {
            return res.status(403).json({
                message: "You can only delete your own comments"
            });
        }

        await Comment.findByIdAndDelete(req.params.commentId);

        res.status(200).json({
            message: "Comment deleted successfully"
        });

    } catch (err) {
        console.log("Delete comment error:", err.message);

        res.status(500).json({
            message: "Internal server error"
        });
    }
});

export default router;