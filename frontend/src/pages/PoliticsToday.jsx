import { useEffect, useState } from "react";
import CivicUpdateCard from "../components/CivicUpdateCard";

function PoliticsToday() {
    const [updates, setUpdates] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(null);

    useEffect(() => {
        fetch(
            `http://localhost:5000/api/civic-updates?page=${page}&limit=10`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                console.log("DATA:", data);

                setUpdates(data.data);
                setPagination(data.pagination);
            })
            .catch((error) => {
                console.error("Failed to fetch updates:", error);
            });
    }, [page]);

    return (
        <main className="politics-page">


            <section className="updates-section">

                <div className="section-header">
                    <div>
                        <p className="section-label">
                            LATEST UPDATES
                        </p>

                        <h2>Civic & Political News</h2>
                    </div>

                    <span>
                        {pagination?.totalItems ?? 0} updates
                    </span>
                </div>

                <div className="updates-grid">
                    {updates.map((update) => (
                        <CivicUpdateCard
                            key={update._id}
                            update={update}
                        />
                    ))}
                </div>

                <div className="pagination">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    >
                        ← Previous
                    </button>

                    <span>
                        Page {page} of {pagination?.totalPages ?? 1}
                    </span>

                    <button
                        disabled={
                            !pagination ||
                            page >= pagination.totalPages
                        }
                        onClick={() => setPage(page + 1)}
                    >
                        Next →
                    </button>

                </div>

            </section>

        </main>
    );
}

export default PoliticsToday;