import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg  from "../assets/5.jpg";
import Destination from "../components/Destination";

function Home() 
{
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Your Journey Your Story"
        text="Lets Have Fun"
        buttonText="Lets Go"
        url="/"
        btnClass="show"
        />
        <Destination/>   
        </>
    )
}

export default Home;