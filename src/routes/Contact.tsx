import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg  from "../assets/2.jpg";

function Contact() 
{
    return(
        <>
        <Navbar />
            <>
                <Navbar />
                <Hero
                    cName="hero-mid"
                    heroImg={AboutImg}
                    title="Hubungi Kami"

                    btnClass="hide"
                />
            </>
        </>
    )
}

export default Contact;