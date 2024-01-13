import React from 'react'
import sevendays from '../../../assets/7days.png'
import fixed_price from '../../../assets/fixed_price.png'
import vtc_driver from '../../../assets/vtc_driver.png'

const Introduction = () => {
    return (
        <>
            <section className="introduction_section">

                <div className="intro_container availability_container">

                    <figure className="figure_hero figure_7days">
                        <img src={sevendays} />
                    </figure>

                    <h1>Notre disponibilité :</h1>

                    <p>Notre centrale de réservation vous permet de réserver à l'avance <br /> votre chauffeur VTC ou
                        taxi privé
                        de plusieurs manières.<br /> En ligne grâce à notre formulaire de réservation , mais aussi en
                        Agence de voyage.</p>

                </div>

                <div className="intro_container price_container">

                    <figure className="figure_hero figure_price">
                        <img src={fixed_price} />
                    </figure>

                    <h1>Nos prix fixes :</h1>

                    <p>Afin de garantir une transparence de prix à nos clients, nos tarifs de nos chauffeurs VTC ou taxi
                        privé sont
                        annoncés <br />dès la réservation en ligne 24h24 et 7j7 , comme pour un forfait aeroport Paris ou
                        Gares
                        parisiennes <br />(Accueil personnalisé nominatif-Gestion bagages), forfaits à l’heure, à la
                        journée, ainsi que
                        des forfaits week-end.<br /> Les prix que nous vous proposons sont justes et fixés au moment de
                        votre
                        réservation..</p >

                </div>

                <div className="intro_container driver_container">

                    <figure>
                        <img src={vtc_driver} />
                    </figure>

                    <h1>TRANSPORT TAXI-VTC</h1>

                    <p>Il est parfois complexe de se rendre d'un point A à un point B en Taxi parisien traditionnel avec
                        les aléas
                        de la circulation prix au compteur, itinéraires en un temps restreint. Connaissant les meilleurs
                        itinéraires
                        nos chauffeurs VTC vous permettrons d'atteindre vos lieux à temps à prix fixe sans supplément
                        dans les
                        Aéroports, Gares parisiennes, Rendez-vous professionnel. Réserver vos prochaines courses où
                        transfert en
                        avance de 24 heure à 1 mois en nous contactant ou en remplissant le formulaire pour des demandes
                        spécifique nous vous répondrons rapidement.</p>

                </div>

            </section >

        </>
    )
}

export default Introduction