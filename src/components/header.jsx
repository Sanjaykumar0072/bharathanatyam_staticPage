import react, { Component, useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    if (click) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    return (
        <>
            <header>
                <nav className="navbar" onClick={e => e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink
                            exact="true"
                            to="/"
                            className="nav-logo"
                        >
                            <img src="/images/darshiiniVS_logo1.svg" alt="" />
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    to="/"
                                    className="nav-links"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    to="/about"
                                    className="nav-links"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    to="/playlist"
                                    className="nav-links"
                                >
                                    PlayList
                                </NavLink>
                            </li>
                            <li className="nav-item gallery-dropdown">
                                <NavLink
                                    exact="true"
                                    to="gallery"
                                    className="nav-links"
                                    onClick={(e) => { e.preventDefault(); }}
                                >
                                    Gallery
                                </NavLink>
                                <ul>
                                    <li className="nav-item">
                                        <NavLink
                                            exact="true"
                                            to="/gallery-awards"
                                            className="nav-links"
                                        >
                                            Awards
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact="true"
                                            to="/gallery-events"
                                            className="nav-links"
                                        >
                                            Events
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            exact="true"
                                            to="/gallery-photoshoot"
                                            className="nav-links"
                                        >
                                            PhotoShoot
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
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