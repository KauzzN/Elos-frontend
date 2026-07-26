import NavBar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import CTASection from "../../components/CTASection/ctaSection";
import Footer from "../../components/footer/footer";
import PageHero from "../pageHero/pagehero";
import DonationCard from "../../components/donationCard/donationCard";

function Doacoes() {
    return (
        <div className="doacoes-container">
            <NavBar />

            <PageHero

                title="Faça uma Doação"

                subtitle="Sua contribuição fortalece projetos ambientais, sociais e educacionais desenvolvidos pelo Instituto Elos."

            />

            <section className="container donation-content">

                <h2>Por que doar?</h2>

                <p>
                    Toda contribuição recebida pelo Instituto Elos é destinada
                    ao fortalecimento de projetos voltados à sustentabilidade,
                    educação ambiental e desenvolvimento comunitário.
                </p>

            </section>

            <section className="container donation-impact">

                <DonationCard
                    title="Recuperação Ambiental"
                    text="Plantio de mudas e recuperação de áreas degradadas."
                />

                <DonationCard
                    title="Educação Ambiental"
                    text="Capacitações e projetos em escolas."
                />

                <DonationCard
                    title="Comunidades"
                    text="Fortalecimento de comunidades tradicionais."
                />

            </section>

            <section className="container donation-box">

                <h2>Dados Bancários</h2>

                <p>Banco Caixa Econômica Federal</p>

                <p>Agência: 4913</p>

                <p>Conta: 1292.000567662616-6</p>

                <button>
                    Copiar Dados
                </button>

            </section>

            <section className="container transparency">

                <h2>Transparência</h2>

                <p>
                    O Instituto Elos trabalha com responsabilidade
                    e transparência na utilização dos recursos recebidos.
                </p>

            </section>

            <CTASection/>

            <Footer/>
        </div>
    )
}

export default Doacoes;