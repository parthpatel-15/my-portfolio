// Header.js
import React, { useState } from 'react';

function Header() {

    const [activeItem, setActiveItem] = useState('Home');

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        scrollToSection(item.toLowerCase());
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <header>
            <nav>
                
                <div className="menu-container">
                    
                    <ul className="menu" >

                        {/* <li className={activeItem === 'Home' ? 'active myLogo' : ''}>
                            <a  href="/"  onClick={() => handleMenuItemClick('Home')}>
                                Parth Patel
                            </a>

                            <p>Parth Patel </p>
                        </li> */}
                        <li className="my_logo">
                            Parth Patel
                        </li>

                        <li className={activeItem === 'Home' ? 'active' : ''}>
                            <a href="/"  onClick={() => handleMenuItemClick('Home')}>
                                Home
                            </a>
                        </li>

                        <li className={activeItem === 'About' ? 'active' : ''}>
                            <a href="/about" onClick={() => handleMenuItemClick('About')}>
                                About   
                            </a>
                        </li>

                        {/* <li><a href="/about">About</a></li> */}
                        <li className={activeItem === 'Skills' ? 'active' : ''}>
                            <a href="/Skills" onClick={() => handleMenuItemClick('Skills')}>
                            Skills
                            </a>
                        </li>

                        {/* <li><a href="/Education">Education</a></li> */}

                        <li className={activeItem === 'Projects' ? 'active' : ''}>
                            <a href="/Projects" onClick={() => handleMenuItemClick('Projects')}>
                            Projects
                            </a>
                        </li>
                        {/* <li><a href="/Projects">Projects</a></li> */}

                        {/* <li><a href="/Work-Experience">Work Experience</a></li> */}

                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
