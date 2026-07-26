import "./footer.css";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-container">

                <div className="footer-brand">

                    <h2>🌿 Elos</h2>

                    <p>
                        Promovendo transformação social e ambiental através
                        de ações sustentáveis e do compromisso com a comunidade.
                    </p>

                </div>

                <nav className="footer-links">

                    <Link 
                        to={"/about"}
                        className="footer-link-button">
                        Quem somos
                    </Link>
                    
                    <Link 
                        to={"/projetos"}
                        className="footer-link-button">
                        Projetos
                    </Link>
                    
                    <Link 
                        to={"/galeria"}
                        className="footer-link-button">
                        Galeria
                    </Link>

                    <Link 
                        to={"/doacoes"}
                        className="footer-link-button">
                        Doações
                    </Link>
                    
                    <Link 
                        to={"/parceiros"}
                        className="footer-link-button">
                        Parcerias
                    </Link>
                    
                    <Link 
                        to={"/contatos"}
                        className="footer-link-button">
                        Contatos
                    </Link>
                    <a href="">Blog</a>

                </nav>

                <div className="footer-contact">

                    <span>
                        {/* Ícone */}
                        contato@elos.org
                    </span>

                    <span>
                        {/* Ícone */}
                        (83) 99999-9999
                    </span>

                    <span>
                        {/* Ícone */}
                        João Pessoa - PB
                    </span>

                </div>

                <div className="footer-social">

                    <a href="">
                        {/* Instagram */}
                    </a>

                    <a href="">
                        {/* Facebook */}
                    </a>

                    <a href="">
                        {/* LinkedIn */}
                    </a>

                    <a href="">
                        {/* YouTube */}
                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                <div className="container footer-bottom-content">

                    <p>
                        © 2026 ONG Elos • Todos os direitos reservados.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;