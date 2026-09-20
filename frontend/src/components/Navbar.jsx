import { Link } from "react-router-dom";
import profileimg from "../assets/profileimg.webp";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">

                <div className="logo">
                    CivicLens
                </div>

                <div className="links">
                    <ul className="ul-links">

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/civic-updates">
                                Civic Updates
                            </Link>
                        </li>

                        <li>
                            <Link to="/leaders">
                                Know Your Leaders
                            </Link>
                        </li>

                        <li>
                            <Link to="/civic-academy">
                                Civic Academy
                            </Link>
                        </li>

                        <li>
                            <Link to="/profile" className="profile-icon">
                                <img
                                    src={profileimg}
                                    alt="Profile"
                                    className="profile-icon"
                                />
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;