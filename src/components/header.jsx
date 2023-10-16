import react, { Component, useState } from "react";
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

export default function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    if(click) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    return (
        <>
            <header>
                <nav className="navbar" onClick={e => e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink exact = "true" to="/" className="nav-logo">
                            DVSDance
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact = "true"
                                    to="/"
                                    className="nav-links"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact = "true"
                                    to="/about"
                                    className="nav-links"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact = "true"
                                    to="/playlist"
                                    className="nav-links"
                                >
                                    PlayList
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact = "true"
                                    to="/gallery"
                                    className="nav-links"
                                >
                                    Gallery
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact = "true"
                                    to="/contact"
                                    className="nav-links"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <span className={click ? "active" : ""}></span>
                            <span className={click ? "active" : ""}></span>
                            <span className={click ? "active" : ""}></span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}