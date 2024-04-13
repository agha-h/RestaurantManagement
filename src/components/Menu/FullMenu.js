import React from 'react';
import MenuSection from './MenuSection';

const FullMenu = ({ menuSections, activeTab }) => {
  // Ensure there's a currently active tab and its corresponding section to render
  const activeSection = menuSections[activeTab];

  return (
    <>
      {activeSection && (
        <MenuSection
          key={activeTab} // Move the key here for React list rendering best practices
          name={activeSection.name}
          items={activeSection.items}
          image={activeSection.image.publicUrl}
          imageAlt={activeSection.imageAlt}
        />
      )}
    </>
  );
};

export default FullMenu;
