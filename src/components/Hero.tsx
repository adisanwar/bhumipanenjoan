// import React from "react";
import Slider from "react-slick";
import "../components/HeroStyle.css";

function Hero(props: { slides: { heroImg: string; title: string; text: string; buttonText: string; url: string }[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {props.slides.map((slide, index) => (
          <div key={index} className="hero">
            <img alt="Hero Image" src={slide.heroImg} />
            <div className="hero-text">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a href={slide.url} className="show">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
