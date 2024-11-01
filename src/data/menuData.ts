export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  icon: string;
  addOns?: AddOn[];
}

export const categoryIcons = {
  pizzas: "🍕",
  tacos: "🌮",
  burgers: "🍔",
  sandwiches: "🥪",
  boissons: "🥤",
  desserts: "🍰"
};

export const menuItems: MenuItem[] = [
  {
    id: 'p1',
    name: 'Margherita',
    price: 45,
    description: 'Sauce tomate, mozzarella, basilic frais',
    category: 'pizzas',
    icon: "🍕",
    addOns: [
      { id: 'cheese1', name: 'Extra Fromage', price: 5 },
      { id: 'sauce1', name: 'Sauce Piquante', price: 2 }
    ]
  },
  {
    id: 'p2',
    name: 'Végétarienne',
    price: 50,
    description: 'Légumes frais, champignons, olives, poivrons',
    category: 'pizzas',
    icon: "🍕",
    addOns: [
      { id: 'cheese2', name: 'Extra Fromage', price: 5 },
      { id: 'sauce2', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'p3',
    name: 'Quatre Fromages',
    price: 55,
    description: 'Mozzarella, gorgonzola, parmesan, chèvre',
    category: 'pizzas',
    icon: "🍕",
    addOns: [
      { id: 'cheese3', name: 'Extra Fromage', price: 5 },
      { id: 'sauce3', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 't1',
    name: 'Tacos Poulet',
    price: 35,
    description: 'Poulet grillé, frites, sauce fromagère',
    category: 'tacos',
    icon: "🌮",
    addOns: [
      { id: 'cheese4', name: 'Extra Fromage', price: 5 },
      { id: 'sauce4', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 't2',
    name: 'Tacos Viande',
    price: 40,
    description: 'Viande hachée, frites, sauce spéciale',
    category: 'tacos',
    icon: "🌮",
    addOns: [
      { id: 'cheese5', name: 'Extra Fromage', price: 5 },
      { id: 'sauce5', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 't3',
    name: 'Tacos Mixte',
    price: 45,
    description: 'Poulet et viande, frites, sauce au choix',
    category: 'tacos',
    icon: "🌮",
    addOns: [
      { id: 'cheese6', name: 'Extra Fromage', price: 5 },
      { id: 'sauce6', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'b1',
    name: 'Classic Burger',
    price: 45,
    description: 'Bœuf, cheddar, salade, tomate, oignon',
    category: 'burgers',
    icon: "🍔",
    addOns: [
      { id: 'cheese7', name: 'Extra Fromage', price: 5 },
      { id: 'sauce7', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'b2',
    name: 'Chicken Burger',
    price: 40,
    description: 'Poulet pané, salade, mayonnaise',
    category: 'burgers',
    icon: "🍔",
    addOns: [
      { id: 'cheese8', name: 'Extra Fromage', price: 5 },
      { id: 'sauce8', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'b3',
    name: 'Double Cheese',
    price: 55,
    description: 'Double viande, double fromage, bacon',
    category: 'burgers',
    icon: "🍔",
    addOns: [
      { id: 'cheese9', name: 'Extra Fromage', price: 5 },
      { id: 'sauce9', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 's1',
    name: 'Club Sandwich',
    price: 35,
    description: 'Poulet, œuf, tomate, salade, mayonnaise',
    category: 'sandwiches',
    icon: "🥪",
    addOns: [
      { id: 'cheese10', name: 'Extra Fromage', price: 5 },
      { id: 'sauce10', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 's2',
    name: 'Thon Mayo',
    price: 30,
    description: 'Thon, mayonnaise, olives, salade',
    category: 'sandwiches',
    icon: "🥪",
    addOns: [
      { id: 'cheese11', name: 'Extra Fromage', price: 5 },
      { id: 'sauce11', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'd1',
    name: 'Coca-Cola',
    price: 12,
    description: '33cl',
    category: 'boissons',
    icon: "🥤",
    addOns: [
      { id: 'sauce12', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'd2',
    name: 'Jus d\'Orange',
    price: 15,
    description: 'Frais pressé',
    category: 'boissons',
    icon: "🥤",
    addOns: [
      { id: 'sauce13', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'd3',
    name: 'Eau Minérale',
    price: 8,
    description: '50cl',
    category: 'boissons',
    icon: "🥤",
    addOns: [
      { id: 'sauce14', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'de1',
    name: 'Tiramisu',
    price: 25,
    description: 'Fait maison',
    category: 'desserts',
    icon: "🍰",
    addOns: [
      { id: 'sauce15', name: 'Sauce Spéciale', price: 3 }
    ]
  },
  {
    id: 'de2',
    name: 'Brownie',
    price: 20,
    description: 'Avec boule de glace vanille',
    category: 'desserts',
    icon: "🍰",
    addOns: [
      { id: 'sauce16', name: 'Sauce Spéciale', price: 3 }
    ]
  }
];

export const menuCategories = {
  pizzas: "Pizzas",
  tacos: "Tacos",
  burgers: "Burgers",
  sandwiches: "Sandwiches",
  boissons: "Boissons",
  desserts: "Desserts"
} as const;