import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImg from '../../images/hero/main-bg.png'; // Adjust path as needed
import tokioMainLogo from '../../images/hero/tokio-main.png'; // Adjust path as needed

const LandingPage = () => {
  return (
    <section 
      className="relative flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <img src={tokioMainLogo} alt="Tokio Ramen Logo" className="max-w-xs md:max-w-sm mx-auto mb-8" />
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#222]">Welcome to the Restaurant Order System</h1>
        <p className="mb-8 max-w-md mx-auto text-[#222]">Manage your orders efficiently with our system.</p>
        <div>
          <Link 
            to="/login" 
            className="mr-4 inline-block bg-[#000000] hover:bg-[#808080] text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="inline-block bg-[#FF0000] hover:bg-[#000000] text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Signup
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
