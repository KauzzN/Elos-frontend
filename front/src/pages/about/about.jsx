import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import equipe from "../../assets/equipe.jpeg"

import { Link } from "react-router-dom";

import "./about.css";

function About() {
    return (
        <>

            {/* Banner */}
            <section className="about-hero">

                <div className="container">

                    <h1>Quem Somos</h1>

                    <p>
                        Conheça a história do Instituto Elos para
                        Sustentabilidade e descubra como trabalhamos para
                        transformar comunidades através da preservação
                        ambiental, educação e desenvolvimento sustentável.
                    </p>

                </div>

            </section>

            {/* História */}
            <section className="about-history">

                <div className="container history-content">

                    <div className="history-text">

                        <h2>Nossa História</h2>

                        <p>
                            O Instituto Elos para Sustentabilidade nasceu da
                            evolução do movimento Frente Sustentável,
                            iniciado em março de 2025 como parte do
                            Movimento SOS Rio Cuiá.
                        </p>

                        <p>
                            Após diversas ações de recuperação ambiental,
                            capacitações técnicas, monitoramento de
                            nascentes e projetos sociais, tornou-se uma
                            associação civil própria, comprometida com a
                            sustentabilidade e a melhoria da qualidade de
                            vida da população paraibana.
                        </p>

                    </div>

                    <div className="history-image">

                        {/* Depois coloque uma imagem */}
                        <div className="placeholder">
                            <img src={equipe} alt="" />
                        </div>

                    </div>

                </div>

            </section>

            {/* Missão, Visão e Valores */}

            <section className="about-mvv">

                <div className="container cards">

                    <div className="card">

                        <h3>🎯 Missão</h3>

                        <p>
                            Promover a sustentabilidade e a melhoria da
                            qualidade de vida das populações da Paraíba
                            através da proteção ambiental, educação e
                            participação social.
                        </p>

                    </div>

                    <div className="card">

                        <h3>👁️ Visão</h3>

                        <p>
                            Ser referência em sustentabilidade e atuação
                            comunitária, fortalecendo políticas públicas e
                            iniciativas que transformem o território
                            paraibano.
                        </p>

                    </div>

                    <div className="card">

                        <h3>💚 Valores</h3>

                        <ul>

                            <li>Dignidade Humana</li>

                            <li>Sustentabilidade</li>

                            <li>Justiça Social</li>

                            <li>Participação Social</li>

                            <li>Ética e Transparência</li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Atuação */}

            <section className="about-areas">

                <div className="container">

                    <h2>Onde Atuamos</h2>

                    <div className="areas-grid">

                        <div className="area-card">

                            <h3>🌱 Meio Ambiente</h3>

                            <p>
                                Recuperação de nascentes, reflorestamento,
                                conservação e proteção dos recursos naturais.
                            </p>

                        </div>

                        <div className="area-card">

                            <h3>📚 Educação</h3>

                            <p>
                                Educação ambiental, cursos técnicos e
                                capacitação de jovens e comunidades.
                            </p>

                        </div>

                        <div className="area-card">

                            <h3>🤝 Justiça Social</h3>

                            <p>
                                Inclusão social, fortalecimento da cidadania
                                e participação comunitária.
                            </p>

                        </div>

                        <div className="area-card">

                            <h3>♻️ Economia Sustentável</h3>

                            <p>
                                Apoio à economia solidária, bioeconomia e
                                iniciativas sustentáveis.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Diferenciais */}

            <section className="about-differentials">

                <div className="container">

                    <h2>Por que o Instituto Elos?</h2>

                    <div className="differentials-grid">

                        <div className="diff-card">
                            ✔ Base técnica sólida
                        </div>

                        <div className="diff-card">
                            ✔ Parcerias com universidades
                        </div>

                        <div className="diff-card">
                            ✔ Reconhecimento institucional
                        </div>

                        <div className="diff-card">
                            ✔ Atuação em políticas públicas
                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}

export default About;