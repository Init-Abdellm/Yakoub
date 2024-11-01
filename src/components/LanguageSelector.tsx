import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold text-restaurant-secondary mb-8">Choose Your Language</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setLanguage('fr')}
          className={`px-8 py-4 rounded-xl text-xl font-semibold transition-all transform hover:scale-105 ${
            language === 'fr' 
              ? 'bg-restaurant-primary text-white shadow-lg' 
              : 'bg-white text-restaurant-secondary hover:bg-orange-100 border-2 border-restaurant-primary'
          }`}
        >
          Français
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-8 py-4 rounded-xl text-xl font-semibold transition-all transform hover:scale-105 ${
            language === 'ar'
              ? 'bg-restaurant-primary text-white shadow-lg'
              : 'bg-white text-restaurant-secondary hover:bg-orange-100 border-2 border-restaurant-primary'
          }`}
        >
          العربية
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-8 py-4 rounded-xl text-xl font-semibold transition-all transform hover:scale-105 ${
            language === 'en'
              ? 'bg-restaurant-primary text-white shadow-lg'
              : 'bg-white text-restaurant-secondary hover:bg-orange-100 border-2 border-restaurant-primary'
          }`}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector; 