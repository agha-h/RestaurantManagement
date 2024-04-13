import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigating between pages
import { motion } from 'framer-motion';
import MenuIcon from '../Icons/Menu';
import CloseIcon from '../Icons/X';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const goToMenuPage = () => {
    navigate('/menu'); // Replace '/menu' with the path to your menu page
  };
  // Show & hide navbar on click
  const handleClick = () => setNav(!nav);

  // Function to handle scroll to section
  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <motion.div
        className="fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[#1b1b1b] border-b border-gray-300 text-white"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="logo">
          <Link to="/" className="text-3xl font-semibold uppercase transition-all ease-in duration-500 hover:text-[#fe4039]">
            T<span className="text-[#fe4039]">o</span>kio
          </Link>
        </div>

        <div className="navigation">
          <nav>
            {/* NAVBAR FOR WIDER SCREENS */}
            <ul className="hidden md:flex">
              <li onClick={() => handleScrollToSection('#about')} className="cursor-pointer mr-2 md:mr-4">Our History</li>
              <li onClick={goToMenuPage} className="cursor-pointer mx-2 md:mx-4">Menu</li>

              <li onClick={() => handleScrollToSection('#info')} className="cursor-pointer mx-2 md:mx-4">Info</li>
              <li onClick={() => handleScrollToSection('#contact')} className="cursor-pointer mx-2 md:mx-4">Contact</li>
            </ul>

            {/* HAMBURGER MENU FOR SMALLER SCREENS */}
            <div onClick={handleClick} className="md:hidden">
              {!nav ? (
                <MenuIcon />
              ) : (
                <CloseIcon />
              )}
            </div>
            {nav && (
              <div className="mobile-menu">
                <ul>
                  <li onClick={() => handleScrollToSection('#about')} className="cursor-pointer mt-8 mb-4">Our History</li>
                  <li onClick={() => handleScrollToSection('#menu')} className="cursor-pointer my-4">Menu</li>
                  <li onClick={() => handleScrollToSection('#info')} className="cursor-pointer my-4">Info</li>
                  <li onClick={() => handleScrollToSection('#contact')} className="cursor-pointer my-4">Contact</li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
