import React, { Component } from "react";
// import { Link } from "react-router-dom";  // Import Link from React Router
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="NavbarItems">
                <h1 className="Navbar-logo">Bhumipanenjoan</h1>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="/">
                                    <i className= {item.icon}></i> {item.title}</a>
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
