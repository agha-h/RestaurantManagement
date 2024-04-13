import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import './CartPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="cart-page"
    >
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="cart-items-list">
          {cartItems.map((item, index) => (
            <motion.li
              key={item.id || index} // Fallback to index if no id, but better to ensure each item has a unique id
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="cart-item"
            >
              <div className="item-info">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                {item.image_url && <img src={item.image_url} alt={item.name} className="cart-item-image" />}
              </div>
              <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
             
            </motion.li>
          ))}
          <button onClick={handleCheckout} className="checkout-btn">
            Checkout
          </button>
        </ul>
        
      ) : (
        <p>Your cart is empty.</p>
      )}
    </motion.div>
  );
};

export default CartPage;
