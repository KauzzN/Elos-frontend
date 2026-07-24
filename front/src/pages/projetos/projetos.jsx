import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import CTASection from "../../components/CTASection/ctaSection";
import floresta from "../../assets/Floresta.jpg"

import "./projetos.css";

function Projects() {

    return (

        <>

            <NavBar />

            {/* Banner */}

            <section className="projects-hero" >

                <div className="container">

                    <h1>Nossos Projetos</h1>

                    <p>
                        Conheça as iniciativas desenvolvidas pelo Instituto
                        Elos para promover sustentabilidade, cidadania e
                        preservação ambiental em diversas comunidades.
                    </p>

                </div>

            </section>

            {/* Lista */}

            <section className="projects-list">

                <div className="container">

                    <div className="project-card">

                        <span className="status">Em andamento</span>

                        <h2>Território Vivo</h2>

                        <p>

                            Recuperação de nascentes e Áreas de Preservação
                            Permanente com protagonismo juvenil no Alto
                            Gramame.

                        </p>

                        <p>

                            📍 Pedras de Fogo - PB

                        </p>

                        <button>

                            Conhecer Projeto →

                        </button>

                    </div>

                    <div className="project-card">

                        <span className="status">

                            Pré-operacional

                        </span>

                        <h2>Cozinha Nossa de Acaú</h2>

                        <p>

                            Gastronomia sustentável voltada para
                            marisqueiras da Associação AMA.

                        </p>

                        <p>

                            📍 Pitimbu - PB

                        </p>

                        <button>

                            Conhecer Projeto →

                        </button>

                    </div>

                </div>

            </section>

            {/* Áreas */}

            <section className="projects-purpose">

                <div className="container">

                    <h2>

                        Como nossos projetos geram impacto

                    </h2>

                    <div className="purpose-grid">

                        <div className="purpose-card">

                            <h3>🌱 Meio Ambiente</h3>

                            <p>
                                Recuperação ambiental e proteção
                                dos ecossistemas.
                            </p>

                        </div>

                        <div className="purpose-card">

                            <h3>📚 Educação</h3>

                            <p>
                                Capacitações e educação ambiental.
                            </p>

                        </div>

                        <div className="purpose-card">

                            <h3>🤝 Cidadania</h3>

                            <p>
                                Inclusão social e fortalecimento
                                comunitário.
                            </p>

                        </div>

                        <div className="purpose-card">

                            <h3>♻️ Sustentabilidade</h3>

                            <p>
                                Incentivo à economia sustentável
                                e bioeconomia.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <CTASection />

            <Footer />

        </>

    )

}

export default Projects;