import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./galeria.css"

function Galeria() {
    return (
        <div className="galeria-container">
            <NavBar />

            <section className="gallery-hero">

                <div className="container">

                    <h1>Galeria</h1>

                    <p>
                        Conheça um pouco das ações, projetos e eventos realizados
                        pelo Instituto Elos.
                    </p>

                </div>

            </section>

            <section className="gallery-section">

                <div className="container">

                    <div className="gallery-grid">

                        <div className="gallery-item"></div>

                        <div className="gallery-item"></div>

                        <div className="gallery-item"></div>

                        <div className="gallery-item"></div>

                        <div className="gallery-item"></div>

                        <div className="gallery-item"></div>

                    </div>

                </div>

            </section>

            <Footer />
        </div>
    )
}

export default Galeria;