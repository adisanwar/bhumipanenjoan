import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/hero3.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
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
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;