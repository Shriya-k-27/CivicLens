
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Leaders() {

    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [party, setParty] = useState("");
    const [state, setState] = useState("");
    const [designation, setDesignation] = useState("");

    const fetchLeaders = () => {

        const params = new URLSearchParams();

        if (search) {
            params.append("search", search);
        }

        if (category) {
            params.append("category", category);
        }

        if (party) {
            params.append("party", party);
        }

        if (state) {
            params.append("state", state);
        }

        if (designation) {
            params.append("designation", designation);
        }

        fetch(`http://localhost:5000/api/leaders?${params.toString()}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch leaders");
                }

                return response.json();
            })
            .then((data) => {
                setLeaders(data.leaders);
            })
            .catch((error) => {
                console.error(error);
                setError("Failed to load leaders");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchLeaders();
    }, []);

    if (loading) {
        return <p>Loading leaders...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className="leaders-page">

            <h1>Know Your Leaders</h1>

            <div className="leader-filters">

                <input type="text" placeholder="Search leader..." value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Cabinet Minister">
                        Cabinet Minister
                    </option>
                    <option value="Minister of State (Independent Charge)">
                        Minister of State (Independent Charge)
                    </option>
                    <option value="Minister of State">
                        Minister of State
                    </option>
                </select>

                <select
                    value={party}
                    onChange={(e) => setParty(e.target.value)}
                >
                    <option value="">All Parties</option>
                    <option value="Bharatiya Janata Party">
                        Bharatiya Janata Party
                    </option>
                    <option value="Janata Dal (Secular)">
                        Janata Dal (Secular)
                    </option>
                </select>

                <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                >
                    <option value="">All States</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Haryana">Haryana</option>
                </select>

                <input
                    type="text"
                    placeholder="Search ministry..."
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                />

                <button onClick={fetchLeaders}>
                    Search
                </button>

            </div>

            <div className="leaders-container">

                {leaders.map((leader) => (
                    <div className="leader-card" key={leader._id}>

                        <div className="leader-photo">

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

                        <div className="leader-info">

                            <h2>{leader.name}</h2>

                            <p className="leader-designation">
                                {leader.designation.join(", ")}
                            </p>

                            <p>
                                <strong>Category:</strong> {leader.category}
                            </p>

                            <p>
                                <strong>Party:</strong> {leader.party}
                            </p>

                            <p>
                                <strong>State:</strong> {leader.state}
                            </p>

                            <div className="responsibilities">

                                <strong>Key Responsibilities</strong>

                                <ul>
                                    {leader.responsibilities.slice(0, 3).map((responsibility, index) => (
                                            <li key={index}>
                                                
                                                {responsibility}
                                            </li>
                                        ))}
                                </ul>

                            </div>

                            <Link to={`/leaders/${leader._id}`} className="view-profile" >
                                View Profile
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </main>
    );
}

export default Leaders;
