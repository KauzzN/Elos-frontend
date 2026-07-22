import floresta from "../../assets/Floresta.jpg"
import "./hero.css"

function Hero() {

    return (
        <section 
            className="hero-container"
            style={{backgroundImage: `url(${floresta})`}}
            >

            <div className="hero-content">
                <h1>Frase de impacto</h1>

                <p>Pequena descrição da ONG...</p>

                <div className="hero-buttons">
                    <button>Doar</button>
                    <button>Projetos</button>
                </div>

            </div>
        </section>
    )
}

export default Hero;