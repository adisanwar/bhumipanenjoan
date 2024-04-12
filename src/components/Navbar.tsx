import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import LogoImage from "../../public/logo.png";

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <>
                <nav className="NavbarItems">
                    <Link to="/" className="Navbar-logo">
                        <img src={LogoImage} alt="Logo" /> {/* Menggunakan gambar logo */}
                    </Link>
                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
                    </div>

                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        <i className={item.icon}></i> {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbar;

