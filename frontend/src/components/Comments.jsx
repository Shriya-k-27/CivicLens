import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

function Comments({ updateId }) {
    const { user } = useAuth();
    console.log("CURRENT USER:", user);

    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await api.get(`/comments/${updateId}`);

                setComments(response.data);
            } catch (error) {
                console.error("Failed to fetch comments:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchComments();
    }, [updateId]);

    async function handleSubmit(event) {
        event.preventDefault();

        if (!text.trim()) {
            return;
        }

        try {
            setSubmitting(true);

            const response = await api.post("/comments", {
                updateId: updateId,
                text: text
            });

            setComments((previousComments) => [
                response.data,
                ...previousComments
            ]);

            setText("");

        } catch (error) {
            console.error("Failed to post comment:", error);

            if (error.response?.status === 401) {
                alert("Please login to comment.");
            }
        } finally {
            setSubmitting(false);
        }
    }

    async function handleDelete(commentId) {
    try {
        await api.delete(`/comments/${commentId}`);

        setComments((previousComments) =>
            previousComments.filter(
                (comment) => comment._id !== commentId
            )
        );

    } catch (error) {
        console.error("Failed to delete comment:", error);

        if (error.response?.status === 403) {
            alert("You can only delete your own comments.");
        }

        if (error.response?.status === 401) {
            alert("Please login again.");
        }
    }
}


    if (loading) {
        return <p>Loading comments...</p>;
    }

    return (
        <section className="comments-section">

            <h4>Community Discussion</h4>

            {user ? (
                <form onSubmit={handleSubmit} className="comment-form">

                    <textarea
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Share your thoughts..."
                        maxLength={500}
                    />

                    <button
                        type="submit"
                        disabled={submitting || !text.trim()}
                    >
                        {submitting ? "Posting..." : "Post Comment"}
                    </button>

                </form>
            ) : (
                <p>
                    Login to join the discussion.
                </p>
            )}

            {comments.length === 0 ? (
                <p>No comments yet.</p>
            ) : (
                <div className="comments-list">

            {comments.map((comment) => (
    <div
        className="comment"
        key={comment._id}
    >
        <p>{comment.text}</p>

        <small>
            {new Date(
                comment.createdAt
            ).toLocaleString()}
        </small>

        {user &&
            comment.userId.toString() === user._id.toString() && (
                <button
                    type="button"
                    onClick={() => handleDelete(comment._id)}
                >
                    Delete
                </button>
            )}
    </div>
))}

                </div>
            )}

        </section>
    );
}

export default Comments;