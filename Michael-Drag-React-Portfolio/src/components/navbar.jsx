import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink 
                        to="/home" 
                        end 
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                        >
                        Home
                    </NavLink>

                </li>
            </ul>
            <ul className="right-links">
                <li>
                    <NavLink 
                        to="/Resume" 
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                        >
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/About" 
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                        >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Projects" 
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                        >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Contact" 
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                        >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
