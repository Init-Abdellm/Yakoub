import React, { createContext, useContext, useState } from 'react';
import { MenuItem } from '../data/menuData';

interface CartItem extends MenuItem {
  quantity: number;
  cartId: number;
}

interface CartContextType {
  isOpen: boolean;
  toggleCart: () => void;
  items: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  total: number;
  itemCount: number;
  deliveryType: 'surplace' | 'livraison' | null;
  setDeliveryType: (type: 'surplace' | 'livraison') => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryType, setDeliveryType] = useState<'surplace' | 'livraison' | null>(null);

  const toggleCart = () => setIsOpen(!isOpen);

  const addToCart = (item: MenuItem) => {
    const existingItem = items.find(i => i.id === item.id);
    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + 1);
    } else {
      setItems([...items, { ...item, quantity: 1, cartId: Date.now() }]);
    }
  };

  const removeFromCart = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      isOpen,
      toggleCart,
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      total,
      itemCount,
      deliveryType,
      setDeliveryType
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};