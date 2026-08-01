import "./footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

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

                </nav>

                <div className="footer-contact">

                    <span>
                        <Mail />
                        contato@elos.org
                    </span>

                    <span>
                        <Phone />
                        (81) 8904-2769
                    </span>

                    <span>
                        <Phone />
                        (83) 98601-1787
                    </span>

                    <span>
                        <MapPin />
                        João Pessoa - PB
                    </span>

                </div>

                <div className="footer-social">

                    <a href="https://www.instagram.com/elos.sustentabilidade/">
                        <FaInstagram />
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