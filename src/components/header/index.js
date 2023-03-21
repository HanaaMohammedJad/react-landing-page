import React from "react";
import './header.css';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={'imgs/logo.png'} alt="logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main"
                    aria-controls="main"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="main">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3 active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="/">Contact</a>
                        </li>
                    </ul>
                    <div className="search ps-3 pe-3 d-none d-lg-block">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <a className="btn rounded-pill main-btn" href="/">Login</a>
                </div>
            </div>
        </nav>
    )
}