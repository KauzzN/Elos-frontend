import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./galeria.css"

import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpeg";
import image6 from "../../assets/image6.jpeg";
import image7 from "../../assets/image7.jpeg";
import image8 from "../../assets/image8.jpeg";
import image9 from "../../assets/image9.jpeg";
import image10 from "../../assets/image10.jpeg";
import image11 from "../../assets/image11.jpeg";
import image12 from "../../assets/image12.jpeg";
import image13 from "../../assets/image13.jpeg";
import image14 from "../../assets/image14.jpeg";
import image15 from "../../assets/image15.jpeg";
import image16 from "../../assets/image16.jpeg";

function Galeria() {

    const imagens = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16
];

    return (
        <div className="galeria-container">

            <section className="gallery-hero">

                <div className="container">

                    <h1>Galeria</h1>

                    <p>
                        Conheça um pouco das ações, projetos e eventos realizados
                        pelo Instituto Elos.
                    </p>

                </div>

            </section>

            <section className="gallery-section">

                <div className="container">

                    <div className="gallery-grid">

                        {imagens.map((img, index) => (

                            <div
                                key={index}
                                className={`gallery-item gallery-item-${index + 1}`}
                            >
                                <img
                                    src={img}
                                    alt={`Imagem ${index + 1}`}
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Galeria;