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
                    <div className='logo'>
                        <a className='symbol' href="/"  onClick={() => handleMenuItemClick('Home')}>
                                    <img src="https://raw.githubusercontent.com/parthpatel-15/data/a5e42967633a51aef473a0f1f5ff9501b579bb7f/logo.png" alt='Logo' />
                                    </a>
                        <a className='my_name' href="/"  onClick={() => handleMenuItemClick('Home')}>
                                    PARTH PATEL
                                    </a>

                    </div>
                    <ul className="menu" >

                        {/* <li className={activeItem === 'Home' ? 'active myLogo' : ''}>
                            <a  href="/"  onClick={() => handleMenuItemClick('Home')}>
                                Parth Patel
                            </a>

                            <p>Parth Patel </p>
                        </li> */}
                        
                        <li className={activeItem === 'Home' ? 'active' : ''}>
                            <a className='link'   href="/"  onClick={() => handleMenuItemClick('Home')}>
                                Home
                            </a>
                        </li>

                        <li className={activeItem === 'About' ? 'active' : ''}>
                            <a  className='link' href="/about" onClick={() => handleMenuItemClick('About')}>
                                About   
                            </a>
                        </li>

                        {/* <li><a href="/about">About</a></li> */}
                        <li className={activeItem === 'Skills' ? 'active' : ''}>
                            <a   className='link' href="/Skills" onClick={() => handleMenuItemClick('Skills')}>
                            Skills
                            </a>
                        </li>

                        {/* <li><a href="/Education">Education</a></li> */}

                        <li className={activeItem === 'Projects' ? 'active' : ''}>
                            <a className='link' href="/Projects" onClick={() => handleMenuItemClick('Projects')}>
                            Projects
                            </a>
                        </li>
                        {/* <li><a href="/Projects">Projects</a></li> */}

                        {/* <li><a href="/Work-Experience">Work Experience</a></li> */}

                        <li><a className='link' href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
