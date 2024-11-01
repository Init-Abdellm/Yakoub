import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { menuItems, menuCategories } from '../data/menuData';
import MenuCategory from './MenuCategory';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-800">Notre Menu</h1>
      
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {Object.entries(menuCategories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
              activeCategory === key
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white text-orange-800 hover:bg-orange-100 border border-orange-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <MenuCategory 
        items={menuItems.filter(item => item.category === activeCategory)}
      />
    </div>
  );
};

export default Menu;