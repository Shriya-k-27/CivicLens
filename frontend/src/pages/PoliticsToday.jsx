import { useEffect, useState } from "react";
import CivicUpdateCard from "../components/CivicUpdateCard";

function PoliticsToday() {
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/civic-updates")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                console.log("DATA:", data);
                setUpdates(data.data);
            })
            .catch((error) => {
                console.error("Failed to fetch updates:", error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading civic updates...</p>;
    }

    if (error) {
        return <p>Failed to load updates: {error}</p>;
    }

    return (
    <main className="politics-page">

        <section className="politics-hero">
            <div className="hero-content">
                <p className="eyebrow">CIVICLENS</p>

                <h1>Politics Today</h1>

                <p>
                    Stay informed about the latest political and
                    civic developments.
                </p>
            </div>
        </section>

        <section className="updates-section">

            <div className="section-header">
                <div>
                    <p className="section-label">LATEST UPDATES</p>
                    <h2>Civic & Political News</h2>
                </div>

                <span>
                    {updates.length} updates
                </span>
            </div>

            {loading && (
                <p className="status-message">
                    Loading civic updates...
                </p>
            )}

            {error && (
                <p className="status-message error">
                    Failed to load updates: {error}
                </p>
            )}

            {!loading && !error && (
                <div className="updates-grid">
                    {updates.map((update) => (
                        <CivicUpdateCard
                            key={update._id}
                            update={update}
                        />
                    ))}
                </div>
            )}

        </section>

    </main>
);
}

export default PoliticsToday;