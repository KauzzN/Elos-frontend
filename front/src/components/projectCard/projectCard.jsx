import "./projectCard.css"

function ProjectCard({ image, title, description }) {
    return (
        <div className="project-card">

            <img
                src={image}
                alt={title}
                className="project-card-image"
            />

            <div className="project-card-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <button>Conhecer projeto</button>

            </div>

        </div>
    );
}

export default ProjectCard;