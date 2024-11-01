export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

export const menuCategories = {
  pizzas: "Pizzas",
  tacos: "Tacos",
  burgers: "Burgers",
  sandwiches: "Sandwiches",
  boissons: "Boissons",
  desserts: "Desserts"
} as const;

export const menuItems: MenuItem[] = [
  // Pizzas
  {
    id: 'p1',
    name: 'Margherita',
    price: 45,
    description: 'Sauce tomate, mozzarella, basilic frais',
    category: 'pizzas'
  },
  {
    id: 'p2',
    name: 'Végétarienne',
    price: 50,
    description: 'Légumes frais, champignons, olives, poivrons',
    category: 'pizzas'
  },
  {
    id: 'p3',
    name: 'Quatre Fromages',
    price: 55,
    description: 'Mozzarella, gorgonzola, parmesan, chèvre',
    category: 'pizzas'
  },
  
  // Tacos
  {
    id: 't1',
    name: 'Tacos Poulet',
    price: 35,
    description: 'Poulet grillé, frites, sauce fromagère',
    category: 'tacos'
  },
  {
    id: 't2',
    name: 'Tacos Viande',
    price: 40,
    description: 'Viande hachée, frites, sauce spéciale',
    category: 'tacos'
  },
  {
    id: 't3',
    name: 'Tacos Mixte',
    price: 45,
    description: 'Poulet et viande, frites, sauce au choix',
    category: 'tacos'
  },

  // Burgers
  {
    id: 'b1',
    name: 'Classic Burger',
    price: 45,
    description: 'Bœuf, cheddar, salade, tomate, oignon',
    category: 'burgers'
  },
  {
    id: 'b2',
    name: 'Chicken Burger',
    price: 40,
    description: 'Poulet pané, salade, mayonnaise',
    category: 'burgers'
  },
  {
    id: 'b3',
    name: 'Double Cheese',
    price: 55,
    description: 'Double viande, double fromage, bacon',
    category: 'burgers'
  },

  // Sandwiches
  {
    id: 's1',
    name: 'Club Sandwich',
    price: 35,
    description: 'Poulet, œuf, tomate, salade, mayonnaise',
    category: 'sandwiches'
  },
  {
    id: 's2',
    name: 'Thon Mayo',
    price: 30,
    description: 'Thon, mayonnaise, olives, salade',
    category: 'sandwiches'
  },

  // Boissons
  {
    id: 'd1',
    name: 'Coca-Cola',
    price: 12,
    description: '33cl',
    category: 'boissons'
  },
  {
    id: 'd2',
    name: 'Jus d\'Orange',
    price: 15,
    description: 'Frais pressé',
    category: 'boissons'
  },
  {
    id: 'd3',
    name: 'Eau Minérale',
    price: 8,
    description: '50cl',
    category: 'boissons'
  },

  // Desserts
  {
    id: 'de1',
    name: 'Tiramisu',
    price: 25,
    description: 'Fait maison',
    category: 'desserts'
  },
  {
    id: 'de2',
    name: 'Brownie',
    price: 20,
    description: 'Avec boule de glace vanille',
    category: 'desserts'
  }
];