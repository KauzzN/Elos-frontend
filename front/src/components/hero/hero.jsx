import floresta from "../../assets/Floresta.jpg"
import "./hero.css"

import { Link } from "react-router-dom";

function Hero() {

    return (
        <section 
            className="hero-container"
            style={{backgroundImage: `url(${floresta})`}}
            >

            <div className="hero-content">
                <h1>Construindo um futuro sustentável para a Paraíba.</h1>

                <p>O Instituto Elos promove ações ambientais, sociais e educacionais que fortalecem comunidades e preservam os ecossistemas para as futuras gerações.</p>

                <div className="hero-buttons">
                    <button className="hero-btn-donate">Fazer uma doação</button>
                    <button>Conheça nossos projetos</button>
                </div>

            </div>
        </section>
    )
}

export default Hero;