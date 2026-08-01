import { useState } from "react";
import PageHero from "../pageHero/pagehero";
import DonationCard from "../../components/donationCard/donationCard";
import CTASection from "../../components/CTASection/ctaSection";
import "./doacoes.css";

function Doacoes() {
    const [copiado, setCopiado] = useState(false);

    function copiarDados() {
        const dados = `Banco: Caixa Econômica Federal\nAgência: 4913\nConta: 1292.000567662616-6`;
        navigator.clipboard.writeText(dados);
        setCopiado(true);

        setTimeout(() => {
            setCopiado(false);
        }, 2000);
    }

    return (
        <div className="doacoes-container">
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
                <div className="bank-details">
                    <p><strong>Banco:</strong> Caixa Econômica Federal</p>
                    <p><strong>Agência:</strong> 4913</p>
                    <p><strong>Conta:</strong> 1292.000567662616-6</p>
                </div>
                <button className="donation-btn" onClick={copiarDados}>
                    {copiado ? "✅ Copiado!" : "Copiar Dados"}
                </button>
            </section>

            <section className="container transparency">
                <h2>Transparência</h2>
                <p>
                    O Instituto Elos trabalha com responsabilidade
                    e transparência na utilização dos recursos recebidos.
                </p>
            </section>

            <CTASection />
        </div>
    );
}

export default Doacoes;
