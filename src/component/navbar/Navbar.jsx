import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";

const navItems = [
    { name: 'HOME', to: 'home' },
    { name: 'ABOUT', to: 'about' },
    { name: 'SERVICES', to: 'services' },
    { name: 'PROJECTS', to: 'projects' },
    { name: 'CONTACT', to: 'contact' }
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [isNavVisible, setIsNavVisible] = useState(true);
    const prevScrollPos = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = prevScrollPos.current < currentScrollPos;
            const scrollDelta = Math.abs(currentScrollPos - prevScrollPos.current);

            // Hide navbar when scrolling down (after top 100px), show when scrolling up
            if (currentScrollPos > 100 && scrollDelta > 5) {
                if (isScrollingDown) {
                    setIsNavVisible(false);
                } else {
                    setIsNavVisible(true);
                }
            } else if (currentScrollPos <= 100) {
                setIsNavVisible(true);
            }

            prevScrollPos.current = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.to);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            navItems.forEach((item) => {
                const element = document.getElementById(item.to);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleScrollLinkClick = (event, targetId) => {
        event.preventDefault();
        closeMenu();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            setActiveLink(targetId);
        }
    };


    return (
        <div className={`navbar ${!isNavVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-logo">
                <div className="avtar">
                    <img src="port1.png" alt="" />
                </div>
                <p className='name'>PortFoliyo</p>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`nav-links-container ${isOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${item.to}`}
                                className={`nav-link ${activeLink === item.to ? 'active-link' : ''}`}
                                onClick={(e) => handleScrollLinkClick(e, item.to)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`menu-overlay ${isOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>
        </div>
    );
}

export default Navbar;