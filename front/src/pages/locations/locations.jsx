import NavBar from "../../components/navbar/navbar";
import CTASection from "../../components/CTASection/ctaSection";
import Footer from "../../components/footer/footer";
import paraiba from "../../assets/paraiba.png"

function Locatios() {
    return (
        <div className="locations-container">

            <section className="locations-hero">

                <div className="container">

                    <h1>Onde Atuamos</h1>

                    <p>
                        Conheça as regiões onde o Instituto Elos desenvolve
                        projetos voltados à sustentabilidade, educação ambiental
                        e fortalecimento das comunidades.
                    </p>

                </div>

            </section>

            <section className="locations-map">

                <div className="container">

                    <img src={paraiba} alt="Mapa da Paraíba"/>

                </div>

            </section>

            <section className="locations-list">

                <div className="container">

                    <div className="location-card">

                        <h2>📍 Pedras de Fogo</h2>

                        <p>
                            Local de fundação do Instituto Elos e sede de importantes
                            projetos de recuperação ambiental.
                        </p>

                    </div>

                    <div className="location-card">

                        <h2>📍 Pitimbu</h2>

                        <p>
                            Desenvolvimento do projeto Cozinha Nossa de Acaú em parceria
                            com marisqueiras da região.
                        </p>

                    </div>

                    <div className="location-card">

                        <h2>📍 Litoral Sul</h2>

                        <p>
                            Ações voltadas à conservação dos ecossistemas costeiros.
                        </p>

                    </div>

                </div>

            </section>

            <CTASection />

        </div>
    )
}

export default Locatios;