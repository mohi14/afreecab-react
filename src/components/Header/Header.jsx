import React, { useEffect, useState } from 'react'
import logo from '../../assets/afreecab_logo_alt.png'
import user from '../../assets/user.avif'
import { Link } from 'react-router-dom';
import apiInstance from '../../utils/instance';

const Header = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const authToken = localStorage.getItem('token')
        apiInstance.get('/user/myInfo', {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                setError(error.message || 'An error occurred');
                console.log(error.message)
            });
    }, []);

    console.log(data);


    
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
                                    <img style={{ height: "60px", width: "60px" }} src={data?.image ? data?.image : user} alt="" />
                                    <span className='text-dark'> {data?.firstName} </span>
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