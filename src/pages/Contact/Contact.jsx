import React from 'react'

const Contact = () => {
    return (
        <>

            <main className="main_site">

                <article className="contact_article">
                    <section className="contact_section">
                        <form>
                            <h1>3. NOUS CONTACTER</h1>
                            <p>Pour toutes informations, réservations, partenariat etc...</p>

                            <input type="text" placeholder="Nom" />
                            <input type="text" placeholder="Prénom" />
                            <input type="text" placeholder="Adresse Mail" />
                            <input type="textarea" placeholder="Votre Message" />
                            <input type="submit" value="Envoyer" />
                        </form>
                    </section>
                </article>
            </main>
        </>
    )
}

export default Contact