import CTASection from "../../components/CTASection/ctaSection";
import Footer from "../../components/footer/footer";

import Hero from "../../components/hero/hero";
import ImpactSection from "../../components/ImpactSection/impactSection";
import NavBar from "../../components/navbar/navbar";
import ProjectCard from "../../components/projectCard/projectCard";
import ProjectsSection from "../../components/projectSession/projectSession";
import VolunteerSection from "../../components/volunterSection/volunterSection";
import "./home.css"

function Home() {

    return (
        <div className="home-container">

            <NavBar />

            <Hero />

            <section className="home-about">
                <div className="container">
                    <h3>Sobre a Elos</h3>
                    <p>O que é a Elos O que é a Elos O que é a Elos O que é a Elos O
                        que é a Elos O que é a Elos O que é a Elos O que é a Elos O 
                        que é a Elos O que é a Elos O que é a Elos O que é a Elos O 
                        que é a Elos O que é a Elos O que é a Elos O que é a Elos O 
                        que é a Elos </p>

                    <div className="home-about-me-actions">
                        <button>Fazer doação</button>
                    </div>
                </div>

            <ProjectsSection />

            <ImpactSection />


            <CTASection />

            <VolunteerSection />

            <Footer />
            </section>
        </div>
    )

}

export default Home;