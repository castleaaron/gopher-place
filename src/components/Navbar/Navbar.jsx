import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="Tickets">Tickets</a></li>
                <li><a href="Items">Items</a></li>
                <li><a href="#Clubs">Clubs</a></li>
                <li><a href="Events">Events</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;