import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/hero1.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={AboutImg}
                title="Bhumi Panenjoan"
                text="Keindahan Alam Tersembunyi"
                buttonText="Lets Go"
                url="/"
                btnClass="hide"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home;