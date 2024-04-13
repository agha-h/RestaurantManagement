import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '../Icons/Menu'; // Adjust the import path as needed
import CloseIcon from '../Icons/X'; // Adjust the import path as needed

const Header = ({ cartItemCount }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/cart'); // Make sure '/cart' matches your cart page route
  };

  return (
    <header>
      <motion.div
        className="fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[#1b1b1b] text-white"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Link to="/" className="logo text-3xl font-semibold uppercase hover:text-[#fe4039]">
          T<span className="text-[#fe4039]">o</span>kio
        </Link>

        <div className="navigation">
          <nav>
            <ul className="hidden md:flex">
              <li className="cursor-pointer mx-2 md:mx-4">
                <Link to="#menu">Menu</Link>
              </li>
              <li className="cursor-pointer mx-2 md:mx-4">
                <Link to="#info">Info</Link>
              </li>
              <li className="cursor-pointer mx-2 md:mx-4">
                <Link to="#contact">Contact</Link>
              </li>
              <li className="cursor-pointer mx-2 md:mx-4 cart-icon" onClick={handleNavigateToCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>{cartItemCount}</span>
              </li>
            </ul>
            <div onClick={() => setNav(!nav)} className="md:hidden">
              {!nav ? <MenuIcon /> : <CloseIcon />}
            </div>
          </nav>
          {nav && (
            <ul className="mobile-menu">
              <li onClick={() => setNav(false)} className="cursor-pointer my-4">
                <Link to="#menu">Menu</Link>
              </li>
              <li onClick={() => setNav(false)} className="cursor-pointer my-4">
                <Link to="#info">Info</Link>
              </li>
              <li onClick={() => setNav(false)} className="cursor-pointer my-4">
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
