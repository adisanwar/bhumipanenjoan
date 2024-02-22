import "./FooterStyle.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Bhumi Panenjoan</h1>
                    <p>Your Home</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-x-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4></h4>
                </div>
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="">Status</a>
                    <a href="">Lisence</a>
                    <a href="">All Version</a>
                </div>
                <div>
                    <h4>Comunity</h4>
                    <a href="/">Github</a>
                    <a href="">Issues</a>
                    <a href="">Project</a>
                    <a href="">X</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="">Troubleshooting</a>
                    <a href="">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms Of Services</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Licence</a>
                </div>
            </div>
        </div>
    )

}

export default Footer;