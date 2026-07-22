import { Image, Leaf } from "lucide-react"
import "./navbar.css"

function NavBar() {
    return (
        <div className="navbar-container">

            <div className="navbar-logo">
                <p><Leaf size={60}/></p>
                <h2>Elos</h2>
            </div>

            <div className="navbar-actions">
                <a className="navbar-btn">Quem somos</a>

                <div className="navbar-divider"></div>

                <a className="navbar-btn">Projetos</a>

                <div className="navbar-divider"></div>

                <a className="navbar-btn">Galeria</a>

                <div className="navbar-divider"></div>

                <a className="navbar-btn">Contato</a>
                
                <button className="navbar-donations">Doações</button>
            </div>


        </div>
    )
}

export default NavBar;