import React from 'react'
import logo from '../../assets/afreecab_logo_alt.png'
import user from '../../assets/user.avif'
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
                            <li className="item_menu_header">
                                <Link to="/userProfile">
                                    <img style={{ height: "60px", width: "60px" }} src={user} alt="" />
                                    <span className='text-dark'> Nicolos </span>
                                </Link>
                            </li>
                        </ul>

                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header