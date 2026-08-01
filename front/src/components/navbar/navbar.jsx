import { Leaf } from "lucide-react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar-container">

            <Link to="/" className="navbar-logo">

                <Leaf size={60} />

                <h2>Elos</h2>

            </Link>

            <div className="navbar-actions">

                <Link to="/about" className="navbar-btn">
                    Quem somos
                </Link>

                <div className="navbar-divider"></div>

                <Link to="/projetos" className="navbar-btn">
                    Projetos
                </Link>

                <div className="navbar-divider"></div>

                <Link to="/galeria" className="navbar-btn">
                    Galeria
                </Link>

                <div className="navbar-divider"></div>

                <Link to="/contatos" className="navbar-btn">
                    Contato
                </Link>

                <Link to="/doacoes" className="navbar-donations">
                    Doações
                </Link>

            </div>

        </div>
    )
}

export default NavBar;