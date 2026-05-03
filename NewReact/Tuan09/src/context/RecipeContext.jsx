import { createContext, useState, useContext, useEffect } from 'react';

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [allRecipes] = useState([
    { 
      id: 11, title: 'Summer Berry Mix', time: '10 minutes', img: '/images/a.webp', 
      type: 'Healthy', rating: 5, author: 'Emma Gonzales', yields: 'Serves 4',
      description: 'A vibrant medley of fresh summer berries tossed with a hint of honey and mint.',
      ingredients: ['1 cup Strawberries', '1 cup Blueberries', '1/2 cup Raspberries', '1 tbsp Honey', 'Fresh Mint'],
      instructions: [{n:1, text:'Wash all berries.'}, {n:2, text:'Slice strawberries.'}, {n:3, text:'Mix with honey.'}]
    },
    { 
      id: 12, title: 'Crispy Fried Chicken', time: '40 minutes', img: '/images/b.jpg', 
      type: 'Pan-fried', rating: 4, author: 'John Doe', yields: 'Serves 3',
      description: 'Classic southern-style fried chicken with a crunchy, flavorful crust.',
      ingredients: ['Chicken pieces', 'Flour', 'Buttermilk', 'Paprika', 'Garlic powder', 'Salt & Pepper'],
      instructions: [{n:1, text:'Marinate in buttermilk.'}, {n:2, text:'Coat in seasoned flour.'}, {n:3, text:'Fry until golden.'}]
    },
    { 
      id: 13, title: 'Healthy Avocado Bowl', time: '15 minutes', img: '/images/c.webp', 
      type: 'Healthy', rating: 5, author: 'Sarah Jenkins', yields: 'Serves 1',
      description: 'A nutrient-packed bowl featuring fresh avocado, quinoa, and seasonal veggies.',
      ingredients: ['1 ripe Avocado', '1/2 cup Quinoa', 'Cherry tomatoes', 'Cucumber', 'Lemon dressing'],
      instructions: [{n:1, text:'Cook quinoa.'}, {n:2, text:'Slice avocado and veggies.'}, {n:3, text:'Assemble and drizzle dressing.'}]
    },
    { 
      id: 14, title: 'Grilled Beef Steak', time: '25 minutes', img: '/images/d.jpg', 
      type: 'Grilled', rating: 5, author: 'Chef Mario', yields: 'Serves 2',
      description: 'Premium beef steak grilled to perfection with rosemary and garlic butter.',
      ingredients: ['2 Beef steaks', 'Rosemary', 'Butter', 'Garlic', 'Sea salt'],
      instructions: [{n:1, text:'Season steaks.'}, {n:2, text:'Sear in hot pan.'}, {n:3, text:'Add butter and herbs to baste.'}]
    },
    { 
      id: 15, title: 'Baked Salmon Deluxe', time: '30 minutes', img: '/images/e.jpg', 
      type: 'Baked', rating: 5, author: 'Linda Smith', yields: 'Serves 2',
      description: 'Oven-baked salmon fillet with lemon slices and fresh dill.',
      ingredients: ['2 Salmon fillets', 'Lemon slices', 'Fresh Dill', 'Olive oil', 'Asparagus'],
      instructions: [{n:1, text:'Place salmon on baking sheet.'}, {n:2, text:'Top with lemon and dill.'}, {n:3, text:'Bake at 400°F for 15-20 mins.'}]
    },
    { 
      id: 16, title: 'Mushroom Risotto', time: '35 minutes', img: '/images/f.jpg', 
      type: 'Stewed', rating: 4, author: 'Marcus Allen', yields: 'Serves 3',
      description: 'Creamy Italian risotto with sautéed wild mushrooms and parmesan cheese.',
      ingredients: ['Arborio rice', 'Mushrooms', 'Vegetable broth', 'Onion', 'Parmesan'],
      instructions: [{n:1, text:'Sauté mushrooms and onions.'}, {n:2, text:'Add rice and toast.'}, {n:3, text:'Slowly add broth while stirring.'}]
    },
    { 
      id: 17, title: 'Seafood Pasta Special', time: '25 minutes', img: '/images/g.jpg', 
      type: 'Stir-fried', rating: 5, author: 'Sophia Rossi', yields: 'Serves 2',
      description: 'Linguine pasta tossed with fresh shrimp, clams, and a spicy tomato sauce.',
      ingredients: ['Linguine', 'Shrimp', 'Clams', 'Tomato sauce', 'Chili flakes'],
      instructions: [{n:1, text:'Boil pasta.'}, {n:2, text:'Cook seafood in sauce.'}, {n:3, text:'Toss pasta with sauce and serve.'}]
    },
    { 
      id: 18, title: 'Fresh Garden Salad', time: '12 minutes', img: '/images/h.jpg', 
      type: 'Healthy', rating: 4, author: 'Anna Green', yields: 'Serves 2',
      description: 'A simple and crisp salad made with the freshest garden vegetables.',
      ingredients: ['Lettuce', 'Radish', 'Carrots', 'Bell peppers', 'Vinaigrette'],
      instructions: [{n:1, text:'Chop all vegetables.'}, {n:2, text:'Toss in a large bowl.'}, {n:3, text:'Add dressing right before serving.'}]
    },
    { 
      id: 19, title: 'Vegetable and meat stew', time: '50 minutes', img: '/images/i.jpg', 
      type: 'Stewed', rating: 5, author: 'Robert Brown', yields: 'Serves 4',
      description: 'Hearty slow-cooked stew with tender beef and chunky root vegetables.',
      ingredients: ['Beef chunks', 'Potatoes', 'Carrots', 'Beef stock', 'Thyme'],
      instructions: [{n:1, text:'Brown the meat.'}, {n:2, text:'Add vegetables and stock.'}, {n:3, text:'Simmer on low heat for 45 mins.'}]
    },
    { 
      id: 20, title: 'Classic Cheese Pizza', time: '20 minutes', img: '/images/k.webp', 
      type: 'Baked', rating: 5, author: 'Luigi Moretti', yields: 'Serves 2',
      description: 'Traditional thin-crust pizza with premium mozzarella and fresh tomato basil sauce.',
      ingredients: ['Pizza dough', 'Mozzarella', 'Tomato sauce', 'Fresh Basil'],
      instructions: [{n:1, text:'Stretch the dough.'}, {n:2, text:'Spread sauce and cheese.'}, {n:3, text:'Bake at high heat until bubbly.'}]
    },
    // Các ảnh visily cũ
    { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', img: '/images/visily-image-39.png', type: 'Healthy', rating: 5 },
    { id: 2, title: 'Granola bowl with berries', time: '5 minutes', img: '/images/visily-image-40.png', type: 'Healthy', rating: 4 },
    { id: 3, title: 'Fluffy buttermilk pancakes', time: '20 minutes', img: '/images/visily-image-41.png', type: 'Baked', rating: 5 },
    { id: 4, title: 'Chia seed pudding', time: '5 minutes', img: '/images/visily-image-42.png', type: 'Healthy', rating: 4 },
    { id: 5, title: 'Salad with cabbage and shrimp', time: '20 minutes', img: '/images/visily-image-43.png', type: 'Grilled', rating: 5 },
    { id: 6, title: 'Baked corn beans', time: '35 minutes', img: '/images/visily-image-44.png', type: 'Baked', rating: 5 },
    { id: 7, title: 'Sunny-side up fried eggs', time: '10 minutes', img: '/images/visily-image-45.png', type: 'Pan-fried', rating: 5 },
    { id: 8, title: 'Stuffed sticky rice ball', time: '45 minutes', img: '/images/visily-image-46.png', type: 'Baked', rating: 4 },
  ]);

  const [savedRecipeIds, setSavedRecipeIds] = useState(() => {
    const local = localStorage.getItem('savedRecipes');
    return local ? JSON.parse(local) : [11, 13, 15];
  });

  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipeIds));
  }, [savedRecipeIds]);

  const toggleSaveRecipe = (id) => {
    setSavedRecipeIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const addToShoppingList = (items) => {
    setShoppingList(prev => [...new Set([...prev, ...items])]);
  };

  const value = {
    allRecipes,
    savedRecipeIds,
    toggleSaveRecipe,
    shoppingList,
    addToShoppingList,
    savedRecipes: allRecipes.filter(r => savedRecipeIds.includes(r.id))
  };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
}

export function useRecipes() {
  return useContext(RecipeContext);
}
