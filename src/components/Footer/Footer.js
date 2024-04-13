import React from 'react';
import { motion } from 'framer-motion';
// Import icons
import Instagram from '../Icons/Instagram';
import Facebook from '../Icons/Facebook';
import LogoImage from '../../images/footer/logo.png';
const Footer = () => (
  <footer>
    <motion.div
      className="fixed z-50 bottom-0 left-0 w-full flex justify-between items-center p-3 bg-[#1b1b1b] border-t border-gray-300 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        {/* Update the src path based on where your images are located */}
        <img src={LogoImage} alt="Tokio Ramen Mini Logo" className="w-[40px]" />
      </div>

      <div className="text-xs md:text-base font-normal tracking-wider">
        <p>
          © {new Date().getFullYear()} &middot; T
          <span className="text-[#fe4039]">o</span>kio Ramen. All rights reserved.
        </p>
      </div>

      <div className="flex justify-center items-center">
        {/* Use standard <a> tags for external links */}
        <a href="https://www.instagram.com/tokioramen/" target="_blank" rel="noopener noreferrer">
          <button className="h-[30px] flex items-center mr-1 md:mr-2 text-white hover:text-[#fe4039]">
            <span className="w-[20px] h-[20px]"><Instagram /></span>
          </button>
        </a>
        <a href="https://www.facebook.com/tokioramenbb" target="_blank" rel="noopener noreferrer">
          <button className="h-[30px] flex items-center ml-1 md:ml-2 text-white hover:text-[#fe4039]">
            <span className="w-[19px] h-[19px]"><Facebook /></span>
          </button>
        </a>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
