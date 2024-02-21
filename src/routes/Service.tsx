import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg  from "../assets/7.jpg";

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
        </>
    )
}

export default Service;