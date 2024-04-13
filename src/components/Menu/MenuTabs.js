import React from 'react';

const MenuTabs = ({ menuSections, activeTab, handleTabClick }) => {
  return (
    <ul className="flex flex-wrap justify-center items-center flex-shrink-0">
      {menuSections.map((section, index) => (
        <li
          key={index}
          className={`my-2 sm:my-0 py-2 px-4 text-sm font-medium uppercase focus:outline-none cursor-pointer ${
            activeTab === index 
            ? 'border-b-2 border-red-600 text-[#222]' // Active tab style
            : 'border-b border-transparent text-gray-400 hover:text-[#222] transition-all ease-in duration-300' // Inactive tab style
          }`}
          onClick={() => handleTabClick(index)}
          role="button" // Improve accessibility
          tabIndex={0} // Make the element focusable
          onKeyPress={(e) => e.key === 'Enter' && handleTabClick(index)} // Handle keyboard events for accessibility
        >
          {section.name}
        </li>
      ))}
    </ul>
  );
};

export default MenuTabs;
