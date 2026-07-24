import { Image, Leaf } from "lucide-react"
import "./navbar.css"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar-container">

            <div className="navbar-logo">
                <p><Leaf size={60}/></p>
                <h2>Elos</h2>
            </div>

            <div className="navbar-actions">
                <Link 
                    to={"/about"}
                    className="navbar-btn">
                    Quem somos
                </Link>

                <div className="navbar-divider"></div>

                <Link 
                    to={"/projetos"}
                    className="navbar-btn">
                    Projetos
                </Link>

                <div className="navbar-divider"></div>

                <Link 
                    to={"/about"}
                    className="navbar-btn">
                    Galeria
                </Link>

                <div className="navbar-divider"></div>

                <Link 
                    to={"/about"}
                    className="navbar-btn">
                    Contato
                </Link>
                
                <button className="navbar-donations">Doações</button>
            </div>


        </div>
    )
}

export default NavBar;