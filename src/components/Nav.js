function Nav(props) {
    return (
        <nav>
            <ul className={`navLinks ${props.class}`}>
                <li>
                    <a href="#home" className="link">Home</a>
                </li>
                <li>
                    <a href="#about" className="link">About</a>
                </li>
                <li>
                    <a href="#menu" className="link">Menu</a>
                </li>
                <li>
                    <a href="#Reservations" className="link">Reservations</a>
                </li>
                <li>
                    <a href="#orderOnline" className="link">Order Online</a>
                </li>
                <li>
                    <a href="#login" className="link">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;