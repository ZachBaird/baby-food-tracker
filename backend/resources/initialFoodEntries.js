const FoodTypes = require('./foodTypes');

const initialFoodEntries = [
  {
    name: 'Asparagus',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Beetroot',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Bell peppers',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Broccoli',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Brussels sprouts',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Butternut squash',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Carrot',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Cauliflower',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Corns',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Cucumber',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Eggplant',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Green beans',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Kale',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Mushroom',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Parsnip',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Peas',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Pumpkin',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Spinach',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Tomatoes',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Zucchini',
    babyLiked: null,
    type: FoodTypes.Vegetables,
  },
  {
    name: 'Basil',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Cilantro',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Cinnamon',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Dill',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Garlic',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Ginger',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Lemongrass',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Mint',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Nutmeg',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Onion',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Paprika',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Parsley',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Rosemary',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Turmeric',
    babyLiked: null,
    type: FoodTypes.HerbsAndSpices,
  },
  {
    name: 'Barley',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Buckwheat',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Cornmeal',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Couscous',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Millet',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Oatmeal',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Potatoes',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Quinoea',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Rice',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Sweet Potatoes',
    babyLiked: null,
    type: FoodTypes.Starch,
  },
  {
    name: 'Beef',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Black beans',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Chia seeds',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Chicken',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Chickpeas',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Cod',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Edamame',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Ground flaxseeds',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Haddock',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Hemp seeds',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Herring',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Kidney beans',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Lamb',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Lentils',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Pollock',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Pork',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Salmon',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Sesame seeds',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Shrimps',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Tofu',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Trout',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Tuna',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Turkey',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'White beans',
    babyLiked: null,
    type: FoodTypes.Protein,
  },
  {
    name: 'Apple',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Avocado',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Banana',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Blackberries',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Blueberries',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Figs',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Grapes',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Kiwi',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Mango',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Orange',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Papaya',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Peaches',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Pear',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Pineapple',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Plums',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Prunes',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Raspberries',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Strawberries',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Tangerine',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Watermelon',
    babyLiked: null,
    type: FoodTypes.Fruits,
  },
  {
    name: 'Cottage Cheese',
    babyLiked: null,
    type: FoodTypes.Dairy,
  },
  {
    name: 'Fresh mozzarella',
    babyLiked: null,
    type: FoodTypes.Dairy,
  },
  {
    name: 'Full-fat ricotta',
    babyLiked: null,
    type: FoodTypes.Dairy,
  },
  {
    name: 'Plain full-fat yogurt',
    babyLiked: null,
    type: FoodTypes.Dairy,
  },
  {
    name: 'Cow milk',
    babyLiked: null,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Eggs',
    babyLiked: null,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Fish',
    babyLiked: null,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Peanuts',
    babyLiked: null,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Shellfish',
    babyLiked: null,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Soy',
    babyLiked: null,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Tree nuts',
    babyLiked: null,
    type: FoodTypes.Allergens,
  },
  {
    name: 'Wheat',
    babyLiked: null,
    type: FoodTypes.Allergens,
  },
];

module.exports = initialFoodEntries;
