// import Hero from "../components/Hero";
// import Navbar from "../components/Navbar";
// import AboutImg from "../assets/hero1.jpg";
// import Destination from "../components/Destination";
// import Trip from "../components/Trip";
// import Footer from "../components/Footer";
// import "../components/HomeStyle.css"

// function Home() {
//     return (
//         <>
//             <Navbar />
//             <Hero
//                 cName="hero"
//                 heroImg={AboutImg}
//                 title="Bhumi Panenjoan"
//                 text="Keindahan Alam Tersembunyi"
//                 buttonText="Lets Go"
//                 url="/"
//                 btnClass="hide"
//             />
//             <Destination />
//             <Trip />
//             <Footer />
//             <a 
//                 href="http://wa.me/6282280442468?text=Halo,%20saya%20ingin%20berkunjung%20ke%20Bhumi%20Panennjoan.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut%20tentang%20lokasi,%20jam%20operasional,%20dan%20apakah%20perlu%20membuat%20reservasi%20sebelumnya?%20Terima%20kasih" // Ganti nomor dengan nomor WhatsApp yang diinginkan
//                 className="whatsapp-click"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img 
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1196px-WhatsApp.svg.png" 
//                     alt="WhatsApp Logo" 
//                 />
//             </a>
//         </>
//     )
// }

// export default Home;

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import "../components/HomeStyle.css";
import AboutImg from "../assets/hero1.jpg";

function Home() {
  const slides = [
    {
      heroImg: {AboutImg},
      title: "Bhumi Panenjoan",
      text: "Keindahan Alam Tersembunyi",
      buttonText: "Let's Go",
      url: "/",
    },
    {
      heroImg: "https://via.placeholder.com/1920x1080?text=Slide+2",
      title: "Panorama Indah",
      text: "Nikmati Keindahan Tanpa Batas",
      buttonText: "Explore Now",
      url: "/explore",
    },
    {
      heroImg: "https://via.placeholder.com/1920x1080?text=Slide+3",
      title: "Petualangan Seru",
      text: "Bersama Teman dan Keluarga",
      buttonText: "Join Us",
      url: "/join",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero slides={slides} />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
