import Logo from "./Assets/Logo .svg"

function Footer() {
    return (
        <footer className="footerSection">
            <section className="footer">
                <img src={Logo} className="logo" alt="logo" />
                <div className="navigation">
                    <h3>Navigation</h3>
                    <ul>
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
                </div>
                <div className="contacts">
                    <h3>Contacts</h3>
                    <ul>
                        <li className="link">Email</li>
                        <li className="link">Phone number</li>
                        <li className="link">Address</li>
                    </ul>
                </div>
                <div className="socialMedia">
                    <h3>Contacts</h3>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/" className="link">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/r" className="link">Twitter</a>
                        </li>
                        <li>
                            <a href="https://telegram.org/" className="link">Telegram</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;