import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="text-center bg-theme-dark py-3">
            <h4 className="text-light font-normal mb-3">You can find me on</h4>
            <ul className="list-inline text-theme-secondary mb-0">
                <li className="list-inline-item"><Link to="/" className="text-light">Facebook <span className="dot" /></Link></li>
                <li className="list-inline-item"><Link to="/" className="text-light">Instagram <span className="dot" /></Link></li>
                <li className="list-inline-item"><Link to="/" className="text-light">Pinterest <span className="dot" /></Link></li>
                <li className="list-inline-item"><Link to="/" className="text-light">Behance <span className="dot" /></Link></li>
            </ul>
        </footer>
    )
}