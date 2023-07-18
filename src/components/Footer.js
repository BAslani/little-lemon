import Logo from "./Assets/Logo .svg"

function Footer() {
    return (
        <footer>
            <img src={Logo} className="logo" alt="logo"/>
            <div className="navigation">
                <h3>Navigation</h3>
                <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <a href="#Reservations">Reservations</a>
                </li>
                <li>
                    <a href="#orderOnline">Order Online</a>
                </li>
                <li>
                    <a href="#login">Login</a>
                </li>
                </ul>
            </div>
            <div className="contacts">
                <h3>Contacts</h3>
                <ul>
                    <li>Email</li>
                    <li>Phone number</li>
                    <li>Address</li>
                </ul>
            </div>
            <div className="socialMedia">
                <h3>Contacts</h3>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/r">Twitter</a>
                    </li>
                    <li>
                        <a href="https://telegram.org/">Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;