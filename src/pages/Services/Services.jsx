import React from 'react'
import application from '../../assets/application.png'
import application_two from '../../assets/application_two.png'
const Services = () => {
    return (
        <>
            <main class="main_site">

                <article class="services_article">

                    <section class="services_section">


                        <h1>1. NOS SERVICES</h1>

                        <figure>
                            <img src={application} />
                        </figure>



                        <h3>Professionnel :</h3>

                        <p>AFREECAB est une entreprise de mise en relation qui vous offre un service personnalisé et efficace <br />
                            pour organiser vos déplacements privés ou professionnels dans toute la région.<br /> Nous vous proposons
                            également un service de transfert vers les aéroports les plus proche <br />ainsi qu'un service de longue distance.
                            Profitez du confort de votre voiture de prestige, <br />détendez-vous votre chauffeur privé vous accompagnera
                            où vous le souhaitez. <br />Nos chauffeurs sont de métier et sélectionnés avec attention et font preuve d’une
                            grande discrétion <br /> garantissant votre tranquillité et la confidentialité de tous vos déplacements, <br /> Accueil
                            personnalisé nominatif - Gestion bagages Gares et Aéroports.< br />
                            La satisfaction de nos clients est notre priorité.

                        </p >

                        <figure>
                            <img src={application_two} />
                        </figure>

                        <h3>Chauffeur Privé :</h3>

                        <p>Afin de répondre à toutes les exigences de nos clients, nous mettons un service de chauffeur privé taxi et vtc sur mesure. <br />
                            Vous pourrez ainsi vous déplacer sans attendre un prochain taxi ou Vtc, car votre chauffeur privé pourra vous attendre<br /> si vous
                            decider de choisir un forfait mise à disposition a l’heure, à la journée, à la semaine ou plus. <br />
                            Depuis votre espace client vous aurez la possibilité, d’accéder à l’historique détaillé de vos courses, <br />
                            modifier une ou plusieurs réservations en cours.<br /> L’expérience que nous vous proposons est sûre et garantie sans stress, <br /> bien avant que vous ne montiez dans le véhicule.</p >
                    </section >
                </article>
            </main >
        </>
    )
}

export default Services