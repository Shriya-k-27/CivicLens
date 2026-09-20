import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="home-page">

            <div className="description">
                <h1>Welcome to CivicLens</h1>
                <br></br><br></br>
                <p>
                    CivicLens is an interactive platform designed to make
                    Indian civics and governance easier to understand and
                    more engaging. Learn about the Constitution, Parliament,
                    elections, and other important aspects of Indian democracy
                    through simple, structured lessons. Stay informed about
                    recent governance and political developments, and explore
                    profiles of India’s public representatives. CivicLens
                    brings learning, awareness, and participation together in
                    one place, helping users become more informed and engaged
                    citizens.
                </p>
            </div>


            <div className="modules">

                <Link to="/civic-academy" className="civic">
                    <h2>Civic Academy</h2>

                    <p>
                        Civic Academy makes learning about Indian civics
                        simple and engaging through short, structured lessons
                        on the Constitution, government, Parliament,
                        elections, and citizens rights.
                    </p>
                </Link>


                <Link to="/civic-updates" className="civic">
                    <h2>Civic Updates</h2>

                    <p>
                        Stay informed about important governance and political
                        developments through timely updates and reliable
                        sources.
                    </p>
                </Link>


                <Link to="/leaders" className="civic">
                    <h2>Know Your Leaders</h2>

                    <p>
                        Explore profiles of India’s Union Ministers, including
                        their ministries, backgrounds, and public roles.
                    </p>
                </Link>

            </div>

            <div className="footer">

                <div className="footer-links">
                    <span>Learn</span>
                    <span className="dot">•</span>
                    <span>Stay Updated</span>
                    <span className="dot">•</span>
                    <span>Engage</span>
                </div>

                <div className="sources">
                    <h3>Sources</h3>

                    <div className="source-links">
                        <a href="#">Source 1</a>
                        <a href="#">Source 2</a>
                        <a href="#">Source 3</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 CivicLens. All rights reserved.</p>
                </div>

            </div>


        </main>
    );
}

export default Home;