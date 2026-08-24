function Navbar(){
    return (
        <>
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    CivicLens
                </div>
                <div className="links">
                    <ul className="ul-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Politics Today</a></li>
                        <li><a href="#">Know Your Leaders</a></li>
                        <li><a href="#">Civic Academy</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;