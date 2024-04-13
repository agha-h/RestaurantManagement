import React from 'react';
import { motion } from 'framer-motion';

import MenuItem from './MenuItem';

const animateSection = {
  hidden: { opacity: 0, y: 100 },
  animate: {
    opacity: 1, 
    y: 0,
    transition: {
        delay: 0.5,
        duration: 1,
        type: 'tween',
        delayChildren: 1,
        staggerChildren: 0.3
    }
  }
};

const MenuSection = ({ name, items, image, imageAlt }) => {
  return (
    <motion.div
      className="menu-section"
      variants={animateSection}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-center my-4">{name}</h3>
      <div className="flex justify-center items-center my-4">
        {/* Ensure the image path is correct or dynamically imported */}
        <img src={image} alt={imageAlt} width={600} className="rounded-md drop-shadow-lg" />
      </div>

      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          {items.map((item, index) => (
            <MenuItem
              key={item.id || index} // Using item.id is preferred for a unique key, fallback to index
              name={item.name}
              description={item.description}
              price={item.price}
              spicy={item.spicy}
              popular={item.popular}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuSection;
