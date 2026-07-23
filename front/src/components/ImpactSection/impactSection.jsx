import "./impactSection.css";

import {
    Trees,
    Users,
    Recycle, 
} from "lucide-react";

import ImpactCard from "../impactCard/impactCard";

function ImpactSection(){

    return(

        <section className="impact-section">

            <div className="container">

                <h2>Nosso Impacto</h2>

                <div className="impact-grid">

                    <ImpactCard
                        icon={<Trees size={42}/>}
                        number="+1200"
                        title="Árvores plantadas"
                    />

                    <ImpactCard
                        icon={<Users size={42}/>}
                        number="+350"
                        title="Famílias atendidas"
                    />

                    <ImpactCard
                        icon={<Recycle size={42}/>}
                        number="+18"
                        title="Projetos realizados"
                    />

                </div>

            </div>

        </section>

    )

}

export default ImpactSection;