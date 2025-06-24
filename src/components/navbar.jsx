import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbr">
                <div className="logo">
                    <Link to="/" className="logo-text"><strong>YD</strong></Link>
                </div>

                <div className="links">
                    <ul>
                        <li><Link className='link-anchor' to="/"><img className='home-icon' src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home icon"/>Home <span className="underline"></span></Link></li>
                        <li><Link className='link-anchor' to="/projects"><img className='home-icon' src="https://cdn-icons-png.flaticon.com/128/9720/9720920.png" alt="about icon"></img>Projects <span className="underline"></span></Link></li>
                        <li><Link className='link-anchor' to="/resume"><img className='home-icon' src="https://cdn-icons-png.flaticon.com/128/4212/4212312.png" alt="about icon"></img>Resume <span className="underline"></span></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
