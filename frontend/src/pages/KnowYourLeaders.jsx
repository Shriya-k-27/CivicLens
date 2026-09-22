
import { useEffect, useState } from "react";

function KnowYourLeaders() {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/leaders")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                console.log("DATA:", data);

                setLeaders(data.leaders);
            })
            .catch((error) => {
                console.error("Failed to fetch leaders:", error);
            });
    }, []);

    return (
        <div>
            {leaders.map((leader) => (
                <div key={leader._id}>
                    <h2>{leader.name}</h2>
                    <p>{leader.designation}</p>
                    <p>{leader.party}</p>
                </div>
            ))}
        </div>
    );
}

export default KnowYourLeaders;
