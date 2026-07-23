import "./projectSession.css"

import ProjectCard from "../projectCard/projectCard";

import floresta from "../../assets/Floresta.jpg"

function ProjectsSection() {

    return (

        <section className="projects">

            <div className="container">

                <h2>Nossos Projetos</h2>

                <div className="projects-grid">

                    <ProjectCard
                        image={floresta}
                        title="Reflorestamento"
                        description="Plantio de árvores em áreas degradadas."
                    />

                    <ProjectCard
                        image={floresta}
                        title="Educação Ambiental"
                        description="Projetos em escolas para conscientização."
                    />

                    <ProjectCard
                        image={floresta}
                        title="Reciclagem"
                        description="Campanhas de coleta seletiva."
                    />

                </div>

            </div>

        </section>

    );

}

export default ProjectsSection;