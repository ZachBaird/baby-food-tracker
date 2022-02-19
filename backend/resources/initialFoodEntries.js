const FoodTypes = require('./foodTypes');

const initialFoodEntries = [
  {
    name: 'Asparagus',
    babyLiked: null,
    
    hadAllergy: false,
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Beetroot',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Bell peppers',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Broccoli',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Brussels sprouts',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Butternut squash',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Carrot',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Cauliflower',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Corns',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Cucumber',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Eggplant',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Green beans',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Kale',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Mushroom',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Parsnip',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Peas',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Pumpkin',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Spinach',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Tomatoes',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Zucchini',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Basil',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Cilantro',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Cinnamon',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Dill',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Garlic',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Ginger',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Lemongrass',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Mint',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Nutmeg',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Onion',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Paprika',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Parsley',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Rosemary',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Turmeric',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Barley',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Buckwheat',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Cornmeal',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Couscous',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Millet',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Oatmeal',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Potatoes',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Quinoea',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Rice',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Sweet Potatoes',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Starch,
  },
  {
    name: 'Beef',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Black beans',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Chia seeds',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Chicken',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Chickpeas',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Cod',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Edamame',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Ground flaxseeds',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Haddock',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Hemp seeds',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Herring',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Kidney beans',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Lamb',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Lentils',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Pollock',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Pork',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Salmon',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Sesame seeds',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Shrimps',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Tofu',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Trout',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Tuna',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Turkey',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'White beans',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Protein,
  },
  {
    name: 'Apple',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Avocado',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Banana',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Blackberries',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Blueberries',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Figs',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Grapes',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Kiwi',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Mango',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Orange',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Papaya',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Peaches',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Pear',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Pineapple',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Plums',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Prunes',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Raspberries',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Strawberries',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Tangerine',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Watermelon',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Cottage Cheese',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Dairy,
  },
  {
    name: 'Fresh mozzarella',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Dairy,
  },
  {
    name: 'Full-fat ricotta',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Dairy,
  },
  {
    name: 'Plain full-fat yogurt',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Dairy,
  },
  {
    name: 'Cow milk',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Eggs',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Fish',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Peanuts',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Shellfish',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Soy',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Tree nuts',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Wheat',
    babyLiked: null,
    
    hadAllergy: false,
    type: FoodTypes.Allergens,
  },
];

module.exports = initialFoodEntries;
