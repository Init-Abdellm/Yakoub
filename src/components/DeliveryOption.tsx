import React from 'react';
import { MapPin, Home } from 'lucide-react';

interface DeliveryOptionProps {
  onSelect: (option: 'surplace' | 'livraison') => void;
}

const DeliveryOption: React.FC<DeliveryOptionProps> = ({ onSelect }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold text-orange-800 mb-8">Bienvenue chez DJOCO</h1>
        <p className="text-xl text-gray-600 mb-12">Comment souhaitez-vous commander ?</p>
        
        <div className="grid md:grid-cols-2 gap-6 px-4">
          <button
            onClick={() => onSelect('surplace')}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-orange-500 group"
          >
            <MapPin size={48} className="text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Sur Place</h2>
            <p className="text-gray-600">Commandez et dégustez dans notre restaurant</p>
          </button>

          <button
            onClick={() => onSelect('livraison')}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-orange-500 group"
          >
            <Home size={48} className="text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Livraison</h2>
            <p className="text-gray-600">Faites-vous livrer à domicile</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;