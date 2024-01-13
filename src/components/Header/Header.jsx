import React from 'react'
import logo from '../../assets/afreecab_logo_alt.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="header_site">
                <section className="section_header">
                    <figure>
                        <Link to="/"><img src={logo} /></Link>
                    </figure>
                    <nav className="nav_header">
                        <ul className="menu_header_">
                            <li className="item_menu_header"><Link to="/">ACCUEIL</Link></li>
                            <li className="item_menu_header"><Link to="/services">NOS SERVICES</Link></li>
                            <li className="item_menu_header"><Link to="/entreprise">NOTRE ENTREPRISE</Link></li>
                            <li className="item_menu_header"><Link to="/contact">NOUS CONTACTER</Link></li>
                            <li className="item_menu_header"><Link to="/contact">Order</Link></li>
                        </ul>

                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header