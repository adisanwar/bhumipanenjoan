import "./FooterStyle.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Bhumi Panenjoan</h1>
                    <p>Keindahan Alam Tersembunyi</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=61555560574138&mibextid=ZbWKwL">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="http://wa.me/6282280442468?text=Halo,%20saya%20ingin%20berkunjung%20ke%20Bhumi%20Panennjoan.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut%20tentang%20lokasi,%20jam%20operasional,%20dan%20apakah%20perlu%20membuat%20reservasi%20sebelumnya?%20Terima%20kasih">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                    <a href="https://www.instagram.com/bhumi_panenjoan?igsh=MTBiMnowZDB5bWE3NQ==">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-square-x-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    {/* <h4>Layanan</h4> */}
                    {/* <a href="/">Changelog</a>
                    <a href="">Status</a>
                    <a href="">Lisence</a>
                    <a href="">All Version</a> */}
                </div>
                {/* <div>
                    <h4>Kontak</h4>
                    <a href="/">Github</a>
                    <a href="">Issues</a>
                    <a href="">Project</a>
                    <a href="">X</a>
                </div>
                <div>
                    <h4>Tentang</h4>
                    <a href="/">Support</a>
                    <a href="">Troubleshooting</a>
                    <a href="">Contact Us</a>
                </div>
                 */}
            </div>
        </div>
    )

}

export default Footer;