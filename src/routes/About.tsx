import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/1.jpg";

function About() {
    return (
        <>
            <Navbar />
            <>
                <Navbar />
                <Hero
                    cName="hero-mid"
                    heroImg={AboutImg}
                    title="Tentang Bhumi Panenjoan"

                    btnClass="hide"
                />
            </>
        </>
    )
}

export default About;