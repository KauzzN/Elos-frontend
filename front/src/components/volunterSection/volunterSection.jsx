import "./volunterSection.css";
import { HandHeart } from "lucide-react";

function VolunteerSection() {

    const formsLink =
        "https://forms.gle/xxxxxxxxxxxxxxxx";

    return (

        <section className="volunteer">

            <div className="container">

                <HandHeart
                    size={55}
                    className="volunteer-icon"
                />

                <h2>Seja um Voluntário</h2>

                <p>
                    Faça parte da transformação da nossa comunidade.
                    Sua dedicação pode ajudar pessoas, projetos e
                    o meio ambiente.
                </p>

                <a
                    href={formsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="volunteer-btn"
                >
                    Quero Participar
                </a>

            </div>

        </section>

    );

}

export default VolunteerSection;