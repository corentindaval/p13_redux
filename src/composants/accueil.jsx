import React from 'react'
import Article from "./articles"
import Chat from "../assets/icon-chat.png"
import Money from "../assets/icon-money.png"
import Security from "../assets/icon-security.png"

function Accueil() {
    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Article img={Chat} alt_img="Chat Icon" titre="You are our #1 priority" contenu=" Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes." />

                <Article img={Money} alt_img="Chat Icon" titre="More savings means higher rates" contenu="  The more you save with us, the higher your interest rate will be!" />

                <Article img={Security} alt_img="Chat Icon" titre="Security you can trust" contenu=" We use top of the line encryption to make sure your data and money
                        is always safe." />

            </section>
        </main>
    )

}

export default Accueil


