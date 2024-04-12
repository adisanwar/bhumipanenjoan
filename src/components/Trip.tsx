import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "../assets/trip1.jpg";
import Trip2 from "../assets/tripsalem.jpg";
import Trip3 from "../assets/kopicapar.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Trip Terkini</h1>
      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut cum. Ipsam voluptates placeat, doloribus illum adipisci numquam nobis voluptate natus earum, aut quibusdam fugiat minima molestias explicabo asperiores veniam?</p> */}
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Camping Ground"
          text="Camping ground di Bhumi Panenjoan adalah tempat yang sempurna untuk menghabiskan malam di tengah keindahan alam yang mempesona. Dengan area luas yang dapat menampung lebih dari 50 tenda, pengunjung dapat menikmati suasana camping yang nyaman dan santai. Pemandangan indah yang terbentang di sekitar, ditambah dengan gemerlap bintang di langit malam, menciptakan pengalaman menginap yang tak terlupakan di bawah langit terbuka. Dari sinilah, pengunjung dapat merasakan kedekatan dengan alam dan menikmati momen-momen istimewa bersama keluarga dan teman-teman di Bhumi Panenjoan"
          whatsappLink="http://wa.me/6282280442468?text=Halo,%20saya%20ingin%20berkunjung%20ke%20Bhumi%20Panennjoan.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut%20tentang%20lokasi,%20jam%20operasional,%20dan%20apakah%20perlu%20membuat%20reservasi%20sebelumnya?%20Terima%20kasih"
        />

        <TripData
          image={Trip2}
          heading="Trip In Salem (Coming Soon)"
          text="Bersiaplah untuk petualangan yang memikat hati di Paket Trip Salem, di mana Anda akan diajak untuk menjelajahi pesona dan keunikan desa-desa yang memikat di sekitar. Dari Bhumi Panenjoan, perjalanan akan membawa Anda melintasi jalan-jalan terpencil yang dipenuhi dengan keindahan alam dan budaya lokal yang kaya. Nikmati keindahan alam yang menakjubkan, kunjungi warung-warung tradisional yang ramah, dan temukan kehidupan desa yang autentik. Setiap desa memiliki cerita dan keunikan tersendiri yang siap menggugah rasa ingin tahu Anda. Dengan Paket Trip Salem, Anda akan merasakan pesona dan kehangatan pedesaan yang tak terlupakan."
        />

        <TripData
          image={Trip3}
          heading="Oleh-oleh"
          text="Kami dengan bangga mengumumkan kolaborasi kami dengan UMKM lokal untuk menyajikan oleh-oleh atau souvenir yang istimewa bagi para pengunjung Bhumi Panenjoan. Dengan menghadirkan produk-produk unggulan dari para pengrajin dan produsen lokal, kami tidak hanya mendukung ekonomi lokal, tetapi juga memperkaya pengalaman wisata para tamu kami. Dari kerajinan tangan tradisional hingga produk-produk kuliner khas daerah, setiap souvenir yang dipilih dengan teliti akan membawa potongan keindahan dan keaslian dari Salem dan sekitarnya pulang bersama pengunjung, menjadikan setiap kunjungan ke Bhumi Panenjoan sebagai kenangan yang berharga dan berarti."
        />
      </div>
    </div>
  );
}

export default Trip;