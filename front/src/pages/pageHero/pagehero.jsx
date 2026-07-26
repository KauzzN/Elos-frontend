import "./pagehero.css";

function PageHero({ title, subtitle }) {
    return (
        <section className="pagehero-container">

            <div className="pagehero-overlay">

                <div className="container">

                    <h1>{title}</h1>

                    <p>{subtitle}</p>

                </div>

            </div>

        </section>
    )
}

export default PageHero;