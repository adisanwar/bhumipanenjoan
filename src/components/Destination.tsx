import DestImg1 from "../assets/pemandangan1.jpg";
import DestImg2 from "../assets/pemandangan2.jpg";
import DestImg3 from "../assets/sunrise1.jpg";
import DestImg4 from "../assets/sunrise2.jpg";
import "../components/DestinationStyle.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      {/* <h1>Destinasi Popular</h1> */}
      <p>
        Selamat datang di Bhumi Panenjoan, sebuah surga perbukitan yang
        tersembunyi di Desa Windusakti, Kecamatan Salem, Kabupaten Brebes.
        Berdiri megah di ketinggian sekitar 650 meter di atas permukaan laut,
        Bhumi Panenjoan menawarkan pengalaman wisata yang menakjubkan dengan
        panorama alam yang memukau. Dengan hamparan hijau yang meluas, Anda akan
        disambut oleh keindahan alam yang memikat mata sejauh mata memandang.
        Suasana sejuk dan udara segar yang memeluk setiap pengunjung, membuat
        perjalanan Anda di sini menjadi tak terlupakan. Terlebih lagi, Bhumi
        Panenjoan menyediakan berbagai fasilitas pendukung untuk kenyamanan
        Anda. Nikmati malam yang romantis di camping ground kami, dengan
        gemerlap bintang sebagai lampu langit alami Anda. Sementara itu, di
        coffee shop kami, Anda dapat menikmati secangkir kopi hangat sambil
        menikmati pemandangan spektakuler dari atas bukit. Jangan lewatkan
        kesempatan untuk menyaksikan matahari terbit dan terbenam yang memukau
        dari puncak Bhumi Panenjoan. Setiap momen di sini akan memanjakan mata
        dan jiwa Anda, meninggalkan kenangan yang tak terlupakan. Mari bergabung
        dengan kami di Bhumi Panenjoan dan temukan keindahan alam yang luar
        biasa ini. Jadikanlah perjalanan Anda sebagai petualangan yang tak
        terlupakan dan cerita yang akan dikenang selamanya. Ayo berkunjung dan
        rasakan pesonanya sendiri!
      </p>
      <DestinationData
        className="first-dest"
        heading="Pemandangan"
        text="Dari puncak Bhumi Panenjoan, Anda akan disuguhi pemandangan luar biasa yang memukau, di mana 80% wilayah Kecamatan Salem terbentang seperti mangkuk yang luas di hadapan mata. Dengan hamparan hijau yang melingkupi bukit-bukit dan lembah-lembah, pemandangan alam ini memukau dengan keindahan yang memikat hati. Terlebih lagi, suasana sejuk dan udara segar yang memeluk setiap pengunjung menambahkan sentuhan magis pada pengalaman wisata di sini, menciptakan momen yang tak terlupakan di Bhumi Panenjoan."
        img1={DestImg1}
        img2={DestImg2}
      />

      <DestinationData
        className="first-dest-reverse"
        heading="Sunrise"
        text="Menyaksikan sunrise dari Bhumi Panenjoan adalah pengalaman yang memukau. Mulai dari pukul 05:30 hingga 06:00, langit perlahan-lahan menerangi puncak Gunung Slamet yang megah, menciptakan pertunjukan alam yang tak terlupakan. Cahaya merah jingga yang memancar dari ufuk timur memberikan nuansa magis pada pemandangan, sementara udara segar dan sejuk menyelimuti pengunjung yang menanti momen spektakuler ini. Di sinilah, di Bhumi Panenjoan, Anda bisa menyaksikan keajaiban alam yang memukau, mengawali hari dengan semangat dan keindahan yang tiada tara."
        img1={DestImg3}
        img2={DestImg4}
      />
    </div>
  );
};
export default Destination;
