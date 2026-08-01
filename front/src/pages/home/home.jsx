import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../../components/hero/hero";
import CTASection from "../../components/CTASection/ctaSection";
import ImpactSection from "../../components/ImpactSection/impactSection";
import ProjectsSection from "../../components/projectSession/projectSession";
import VolunteerSection from "../../components/volunterSection/volunterSection";
import "./home.css";

function Home() {
    return (
        <div className="home-container">
            <Hero />

            {/* SEÇÃO SOBRE A ELOS (FECHADA CORRETAMENTE) */}
            <section className="home-about">
                <div className="container">
                    <h3>Sobre a Elos</h3>
                    <p>
                        O Instituto Elos para Sustentabilidade nasceu da evolução do movimento Frente Sustentável,
                        reunindo conhecimento técnico, participação comunitária e compromisso com a preservação ambiental.
                        Atuamos na Paraíba desenvolvendo projetos que unem educação, conservação da natureza,
                        cidadania e desenvolvimento sustentável.
                    </p>
                    <div className="home-about-me-actions">
                        <Link to="/about" className="home-about-btn">
                            Conheça nossa história <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* COMPONENTES SEPARADOS FORA DA SEÇÃO SOBRE */}
            <ProjectsSection />
            <ImpactSection />
            <CTASection />
            <VolunteerSection />

            {/* SEÇÃO PARCEIROS */}
            <section className="home-partners">
                <div className="container">
                    <h2>Nossos Parceiros</h2>
                    <p className="partners-subtitle">
                        O Instituto Elos acredita que grandes transformações acontecem
                        por meio da colaboração. Contamos com parceiros que compartilham
                        nosso compromisso com a sustentabilidade, a educação e o
                        desenvolvimento das comunidades.
                    </p>

                    <div className="partners-grid">
                        <div className="partner-card"><p>Logo da UFPB</p></div>
                        <div className="partner-card"><p>Logo da PREAMAR</p></div>
                        <div className="partner-card"><p>Logo da CBH-LS</p></div>
                        <div className="partner-card"><p>Logo do Governo Federal</p></div>
                        <div className="partner-card"><p>Logo da Cimento Nacional</p></div>
                        <div className="partner-card"><p>Logo do Projeto Salas Verdes</p></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
