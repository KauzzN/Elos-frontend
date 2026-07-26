import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./contatos.css"

function Contatos() {
    return (
        <div className="contatos-container">
            <NavBar />

            <section className="contact-hero">

                <div className="container">

                    <h1>Entre em Contato</h1>

                    <p>
                        Tire dúvidas, envie sugestões ou entre em contato
                        para conhecer melhor nosso trabalho.
                    </p>

                </div>

            </section>

            <section className="contact-content">

                <div className="container contact-grid">

                    <div className="contact-info">

                        <h2>Fale Conosco</h2>

                        <p>📧 sustentavelfrente@gmail.com</p>

                        <p>📱 (83) 98601-1787</p>

                        <p>📍 Pedras de Fogo - PB</p>

                        <p>📷 @elos.sustentabilidade</p>

                    </div>

                    <form className="contact-form">

                        <input placeholder="Nome"/>

                        <input placeholder="Email"/>

                        <textarea placeholder="Mensagem"></textarea>

                        <button>

                            Enviar

                        </button>

                    </form>

                </div>

            </section>

            <section className="contact-map">

                <div className="container">

                    <div className="map-placeholder">

                        Mapa

                    </div>

                </div>

            </section>

            <Footer />
        </div>
    )
}

export default Contatos;