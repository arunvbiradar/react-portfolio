import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-transparent navbar-light text-theme-primary">
                    <Link className="navbar-brand font-bold" to="/">ABKreatives</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse justify-content-end font-bold" id="mainNav">
                        <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/myworks">My Works <span className="dot" /></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/blog">Blog <span className="dot" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}