import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg  from "../assets/7.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() 
{
    return(
        <>
        <Navbar />
            <>
                <Navbar />
                <Hero
                    cName="hero-mid"
                    heroImg={AboutImg}
                    title="Layanan"

                    btnClass="hide"
                />
            </>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service;