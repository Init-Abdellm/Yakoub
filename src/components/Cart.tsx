import React, { useState } from 'react';
import { Minus, Plus, X, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../data/menuData';

interface CustomerInfo {
  name: string;
  address: string;
  phone: string;
}

const Cart = () => {
  const { isOpen, toggleCart, items, removeFromCart, updateQuantity, total, deliveryType } = useCart();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({ name: '', address: '', phone: '' });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🔔 *NOUVELLE COMMANDE* 🔔

🏠 *Type:* ${deliveryType === 'surplace' ? 'Sur Place' : 'Livraison'}

📋 *DÉTAILS:*
${items.map(item => `• ${item.name}
    Quantité: ${item.quantity}
    Prix: ${item.price * item.quantity} DH`).join('\n\n')}

${deliveryType === 'livraison' ? `📍 *INFORMATIONS CLIENT:*
• Nom: ${customerInfo.name}
• Tél: ${customerInfo.phone}
• Adresse: ${customerInfo.address}

` : ''}💰 *TOTAL:* ${total} DH

✨ Merci pour votre commande!`.trim();

    const whatsappUrl = `https://wa.me/212611114639?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toggleCart();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-amber-50 rounded-2xl shadow-2xl w-full max-w-2xl my-4">
        <div className="flex flex-col">
          <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-orange-200 bg-white rounded-t-2xl">
            <h2 className="text-2xl font-bold text-orange-800">
              Votre Panier ({deliveryType === 'surplace' ? 'Sur Place' : 'Livraison'})
            </h2>
            <button 
              onClick={toggleCart}
              className="p-2 hover:bg-orange-100 rounded-full transition-colors"
            >
              <X size={24} className="text-orange-800" />
            </button>
          </div>

          <div className="p-6">
            {items.length === 0 ? (
              <p className="text-center text-gray-600 py-8">Votre panier est vide</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.cartId}
                    className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-orange-100"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <p className="text-orange-600 font-semibold">{item.price} DH</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-orange-100 rounded-lg px-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-orange-700 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-orange-700 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="sticky bottom-0 border-t border-orange-200 p-6 bg-white rounded-b-2xl">
              <div className="mb-6">
                <div className="text-2xl font-bold text-orange-800">Total: {total} DH</div>
              </div>

              {!showForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors text-lg"
                >
                  Commander
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {deliveryType === 'livraison' && (
                    <>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        required
                        className="w-full p-4 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      />
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          placeholder="Votre numéro de téléphone"
                          required
                          className="w-full p-4 pl-12 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Votre adresse"
                        required
                        className="w-full p-4 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      />
                    </>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors text-lg"
                  >
                    Confirmer la commande
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;