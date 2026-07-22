import Hero from "../../components/hero/hero";
import NavBar from "../../components/navbar/navbar";
import "./home.css"

function Home() {

    return (
        <div className="home-container">

            <NavBar />

            <Hero />

            <section className="home-about">
                <div className="container">
                    <h3>Sobre a Elos</h3>
                    <p>O que é a Elos O que é a Elos O que é a Elos O que é a Elos O
                        que é a Elos O que é a Elos O que é a Elos O que é a Elos O 
                        que é a Elos O que é a Elos O que é a Elos O que é a Elos O 
                        que é a Elos O que é a Elos O que é a Elos O que é a Elos O 
                        que é a Elos </p>

                    <div className="home-about-me-actions">
                        <button>Fazer doação</button>
                    </div>
                </div>

            </section>
        </div>
    )

}

export default Home;