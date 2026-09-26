import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function LeaderDetails() {

    const { id } = useParams();

    const [leader, setLeader] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch(`http://localhost:5000/api/leaders/${id}`)
            .then((response) => response.json())
            .then((data) => {

                if (!data.success) {
                    setError(data.message);
                    return;
                }

                setLeader(data.leader);
                setLoading(false);

            })
            .catch((error) => {

                console.error(error);
                setError("Failed to load leader");

            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    if (loading) {
        return <p>Loading leader...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!leader) {
        return <p>Leader not found.</p>;
    }

    return (

        <main className="leader-details">

            <Link
                to="/leaders"
                className="back-link"
            >
                ← Back to Leaders
            </Link>

            <div className="leader-profile">

                <div className="profile-photo">

                    {leader.photo ? (
                        <img
                            src={leader.photo}
                            alt={leader.name}
                        />
                    ) : (
                        <div className="photo-placeholder">
                            No Photo
                        </div>
                    )}

                </div>

                <div className="profile-main">

                    <h1>{leader.name}</h1>

                    <p className="profile-designation">
                        {leader.designation.join(", ")}
                    </p>

                    <p>
                        <strong>Category:</strong>{" "}
                        {leader.category}
                    </p>

                    <p>
                        <strong>Party:</strong>{" "}
                        {leader.party}
                    </p>

                    <p>
                        <strong>Constituency:</strong>{" "}
                        {leader.constituency}
                    </p>

                    <p>
                        <strong>State:</strong>{" "}
                        {leader.state}
                    </p>

                    <p>
                        <strong>Date of Birth:</strong>{" "}
                        {new Date(
                            leader.dateOfBirth
                        ).toLocaleDateString("en-IN")}
                    </p>

                </div>

            </div>

            <section className="leader-section">

                <h2>Education</h2>

                <ul>
                    {leader.education.map(
                        (item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    )}
                </ul>

            </section>

            <section className="leader-section">

                <h2>Responsibilities</h2>

                <ul>
                    {leader.responsibilities.map(
                        (item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    )}
                </ul>

            </section>

            <section className="leader-section">

                <h2>Previous Positions</h2>

                <ul>
                    {leader.previousPositions.map(
                        (item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    )}
                </ul>

            </section>

            <section className="leader-section">

                <h2>Sources</h2>

                <div className="leader-sources">

                    {leader.sourceLinks.map(
                        (source, index) => (
                            <a
                                key={index}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {source.title}
                            </a>
                        )
                    )}

                </div>

            </section>

        </main>
    );
}

export default LeaderDetails;