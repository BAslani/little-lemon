import Nav from './Nav';
import Logo from "./Assets/Logo .svg"

function Header() {
    return (
        <header className="header sectionCenter">
            <img src={Logo} className="logo" alt="logo"/>
            <Nav/>
        </header>
    )
}

export default Header;