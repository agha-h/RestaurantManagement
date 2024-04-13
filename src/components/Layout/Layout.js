import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import '../../styles/global.css';

// import components
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Info from '../Info/Info';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Helmet>
        <title>{`Tokio Ramen | ${pageTitle}`}</title>
      </Helmet>
      <Header />
      <Hero />
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.75 }}
      >
        {children}
      </motion.main>
      <About />
      <Menu />
      <Info />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
