import "./projectSession.css"

import ProjectCard from "../projectCard/projectCard";

import floresta from "../../assets/Floresta.jpg"
import nascente from "../../assets/nascente2.jpeg"


function ProjectsSection() {

    return (

        <section className="projects">

            <div className="container">

                <h2>Nossos Projetos</h2>

                <div className="projects-grid">

                    <ProjectCard
                        image={nascente}
                        title="Território Vivo"
                        description="Recuperação de nascentes com protagonismo juvenil no Alto Gramame."
                    />

                    <ProjectCard
                        image={floresta}
                        title="Cozinha Nossa de Acaú"
                        description="Gastronomia sustentável desenvolvida junto às marisqueiras da AMA."
                    />

                </div>

            </div>

        </section>

    );

}

export default ProjectsSection;