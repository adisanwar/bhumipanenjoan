// import Navbar from "../components/Navbar";
import "../components/HeroStyle.css"

function Hero(props : any) {
    return (
        <>
            <div className={props.cName}>
                <img alt="Herpimg" src={props.heroImg}/>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.btnClass} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div> 
        </>
    )
}

export default Hero;