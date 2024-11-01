import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2 bg-white rounded-lg shadow-md p-2">
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 rounded ${
            language === 'fr' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-3 py-1 rounded ${
            language === 'ar' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
          }`}
        >
          عربي
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded ${
            language === 'en' ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector; 