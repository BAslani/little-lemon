import Nav from './Nav';
import Logo from "./Assets/Logo .svg"
import humberger from "./Assets/🦆 icon _hamburger menu.svg"
import basket from "./Assets/Basket.svg"
import { useState } from "react"


function Header() {
    const [navbarOpen, setNavbarOpen] = useState('');
    return (
        <header className="header">
            <section className='headerSection sectionCenter'>
                <button className="toggle" onClick={() => {
                    if (navbarOpen === '') { setNavbarOpen('showLinks') }
                    else { setNavbarOpen('') }
                }}>
                    <img src={humberger} alt='' />
                </button>
                <img src={Logo} className="logo" alt="logo" />
                <button className="basket">
                    <img src={basket} alt='' />
                </button>
                <Nav class={navbarOpen} />
            </section>
        </header>
    )
}

export default Header;