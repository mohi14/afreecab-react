import React from 'react'
import logo from '../../assets/afreecab_logo_alt.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header class="header_site">
                <section class="section_header">
                    <figure>
                        <Link to="/"><img src={logo} /></Link>
                    </figure>
                    <nav class="nav_header">
                        <ul class="menu_header_">
                            <li class="item_menu_header"><Link to="/">ACCUEIL</Link></li>
                            <li class="item_menu_header"><Link to="/services">NOS SERVICES</Link></li>
                            <li class="item_menu_header"><Link to="/entreprise">NOTRE ENTREPRISE</Link></li>
                            <li class="item_menu_header"><Link to="/contact">NOUS CONTACTER</Link></li>
                        </ul>

                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header