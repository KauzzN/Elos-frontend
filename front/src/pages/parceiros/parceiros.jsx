import "./parceiros.css";
import NavBar from "../../components/navbar/navbar";
import PageHero from "../pageHero/pagehero";
import Footer from "../../components/footer/footer";
import ParceirosCard from "../../components/parceirosCard/parceirosCard";
import { 
    Building2,
    GraduationCap,
    Leaf,
    Users

 } from "lucide-react";

function Parceiros(){

    return(

        <div className="parceiros-container">

            <PageHero
            title="Parcerias"
            />

            <section className="container">

            <h2>
            Construindo impacto juntos
            </h2>

            <p>

            O Instituto Elos acredita que grandes
            transformações acontecem através da
            cooperação entre organizações,
            empresas e sociedade.

            </p>

            </section>

            <section className="container partnership-grid">

                <ParceirosCard

                    icon={<Building2 size={40}/>}

                    title="Empresas"

                    text="Parcerias voltadas para responsabilidade socioambiental."

                />

                <ParceirosCard

                    icon={<GraduationCap size={40}/>}

                    title="Universidades"

                    text="Pesquisa, extensão e inovação sustentável."

                />

                <ParceirosCard

                    icon={<Leaf size={40}/>}

                    title="Instituições"

                    text="Projetos ambientais desenvolvidos em conjunto."

                />

                <ParceirosCard

                    icon={<Users size={40}/>}

                    title="Voluntários"

                    text="Pessoas que desejam contribuir com a transformação social."

                />

            </section>

            <section className="container">

            <h2>

            Como se tornar parceiro?

            </h2>

            <div className="steps">

            <div>

            1

            Entrar em contato

            </div>

            <div>

            2

            Conhecer os projetos

            </div>

            <div>

            3

            Iniciar a parceria

            </div>

            </div>

            </section>

            <section className="container">

            <h2>

            Vamos conversar?

            </h2>

            <p>

            📧 sustentavelfrente@gmail.com

            </p>

            <button className="partners-btn">

            Entrar em contato

            </button>

            </section>

        </div>

    )
}

export default Parceiros;