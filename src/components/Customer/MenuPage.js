import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext'; // Import useCart hook
import './MenuPage.css';
import Header from '../CustomerHeader/Header';
import Hero from '../Hero/Hero';
import Info from '../Info/Info';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, cartItems } = useCart(); // Use addToCart from CartContext

  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/menu-items');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchMenuItems();
  }, []);

  if (isLoading) {
    return <div className="menu-loading">Loading...</div>;
  }

  if (error) {
    return <div className="menu-error">Error: {error}</div>;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="menu-page">
      <Header cartItemCount={cartItems.length} />
      <Hero />
      {/* Menu Section */}
      <section id="menu">
  <h1 className="menu-title">Menu Items</h1>
  <div className="menu-items">
    {menuItems.length > 0 ? (
      menuItems.map((item, index) => (
        <motion.div 
          key={item.id || index} // Use item.id if available, else fallback to index
          className="menu-item" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <div className="item-details">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            {item.image_url && (
              <img src={item.image_url} alt={item.name} className="item-image" />
            )}
            <p>{item.description}</p>
          </div>
          <button 
            className="add-to-cart-btn" 
            onClick={() => addToCart({...item, quantity: 1})} // Adding item with quantity
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
        </motion.div>
      ))
    ) : (
      <div className="menu-no-items">No menu items found.</div>
    )}
  </div>
</section>

      <Info />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default MenuPage;
