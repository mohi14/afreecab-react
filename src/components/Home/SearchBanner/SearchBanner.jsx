import React from 'react'
import './SearchBanner.css'
import home_icon from '../../../assets/home_icon.png'
import place_icon from '../../../assets/place_icon.png'
import clock_icon from '../../../assets/clock_icon.png'
import passenger_icon from '../../../assets/passenger_icon.png'
import baggage_icon from '../../../assets/baggage_icon.png'
import Introduction from '../Introduction/Introduction'
import { Link, useNavigate } from 'react-router-dom'
const SearchBanner = () => {
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate('/searchResults')
    }

    return (

        <main className="main_site">
            <article>
                <section className="form_section">
                    <p className="log_section"><Link className="sign_in" to="/signup">S'INSCRIRE </Link> | <Link className="log_in" to="/login"> SE
                        CONNECTER</Link></p>

                    <h1>Votre service vtc haut de gamme aux couleurs de l'Afrique.</h1>
                    <p><span>1.</span> Estimez votre tarif | <span>2.</span> Réservez votre trajet | <span>3.</span> Payer
                        en ligne</p>

                    <form method="post" action="">
                        <figure className="hero_input_icon"><img src={home_icon} /></figure>
                        <input type="text" placeholder="Adresse de départ" className="input_field" />

                        <figure className="hero_input_icon"><img src={place_icon} /></figure>
                        <input type="text" placeholder="Adresse d'arrivée" className="input_field" />

                        <figure className="hero_input_icon"><img src={clock_icon} /></figure>
                        <input type="date" placeholder="Adresse d'arrivée" className="input_field" />

                        <figure className="hero_input_icon"><img src={passenger_icon} /></figure>
                        <input className="input_field InputNbPassengers" type="number" value="1" placeholder="" min="1"
                            max="9999" maxlength="4" />

                        <figure className="hero_input_icon"><img src={baggage_icon} /></figure>
                        <input className="input_field InputNbBaggages" type="number" value="1" placeholder="" min="1" max="9999"
                            maxlength="3" />

                        <button className="submit_button" onClick={handleSearch} style={{ cursor: "pointer" }} type="" value="">rechercher</button>

                    </form>
                </section>

                <Introduction />

            </article>
        </main>
    )
}

export default SearchBanner