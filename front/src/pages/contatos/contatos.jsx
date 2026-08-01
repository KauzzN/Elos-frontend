import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./contatos.css"

function Contatos() {
    return (
        <div className="contatos-container">

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

                    <div className="contact-form">

                        <h2>Envie uma mensagem</h2>

                        <p>
                            Ficou com alguma dúvida, deseja conhecer nossos projetos,
                            realizar uma parceria ou entrar em contato conosco?
                        </p>

                        <p>
                            Clique no botão abaixo e preencha nosso formulário de contato.
                            Retornaremos o mais breve possível.
                        </p>

                        <a
                            href="https://forms.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button"
                        >
                            Acessar Formulário →
                        </a>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Contatos;