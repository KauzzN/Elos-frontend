import Hero from "../../components/hero/hero";
import NavBar from "../../components/navbar/navbar";
import "./home.css"

function Home() {

    return (
        <div className="home-container">

            <NavBar />

            <Hero />
        </div>
    )

}

export default Home;