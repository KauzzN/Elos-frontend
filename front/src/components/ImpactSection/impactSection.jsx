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
                        number="+150"
                        title="Marisqueiras participantes"
                    />

                    <ImpactCard
                        icon={<Users size={42}/>}
                        number="5"
                        title="Jovens agentes ambientais"
                    />

                    <ImpactCard
                        icon={<Recycle size={42}/>}
                        number="2"
                        title="Projetos em andamento"
                    />

                </div>

            </div>

        </section>

    )

}

export default ImpactSection;