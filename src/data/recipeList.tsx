const curryRecipes = [
	{
		name: "Mixed Curry",
		type: "curry",
		description: "Any combination that does not match a recipe",
		ingredients: [],
	},
	{
		name: "Fancy Apple Curry",
		type: "curry",
		description:
			"A Simple Curry that lets the natural sweetness of its apples shine.",
		ingredients: [{ name: "Fancy Apple", amount: 7 }],
	},
	{
		name: "Grilled Tail Curry",
		type: "curry",
		description:
			"The tasty tail elevates the flavor of the curry roux to the next level.",
		ingredients: [
			{ name: "Slowpoke Tail", amount: 8 },
			{ name: "Fiery Herb", amount: 25 },
		],
	},
	{
		name: "Solar Power Tomato Curry",
		type: "curry",
		description:
			"A curry made using tomatoes that have turned bright red in the sun.",
		ingredients: [
			{ name: "Snoozy Tomato", amount: 10 },
			{ name: "Fiery Herb", amount: 5 },
		],
	},
	{
		name: "Dream Eater Butter Curry",
		type: "curry",
		description:
			"The ingredients in this curry all share a connection to deep sleep.",
		ingredients: [
			{ name: "Soft Potato", amount: 18 },
			{ name: "Snoozy Tomato", amount: 15 },
			{ name: "Soothing Cacao", amount: 12 },
			{ name: "Moomoo Milk", amount: 10 },
		],
	},
	{
		name: "Spicy Leek Curry",
		type: "curry",
		description:
			"The roasted leeks are fragrant and sweet as fruit, perfectly balancing the spicy roux.",
		ingredients: [
			{ name: "Large Leek", amount: 14 },
			{ name: "Warming Ginger", amount: 10 },
			{ name: "Fiery Herb", amount: 8 },
		],
	},
	{
		name: "Spore Mushroom Curry",
		type: "curry",
		description:
			"A curry that puts you to sleep just as surely as the move Spore.",
		ingredients: [
			{ name: "Tasty Mushroom", amount: 14 },
			{ name: "Soft Potato", amount: 9 },
		],
	},
	{
		name: "Egg Bomb Curry",
		type: "curry",
		description:
			"A curry made with oodles of love. Its ingredients are geared toward kids.",
		ingredients: [
			{ name: "Honey", amount: 12 },
			{ name: "Fancy Apple", amount: 11 },
			{ name: "Fancy Egg", amount: 8 },
			{ name: "Soft Potato", amount: 4 },
		],
	},
	{
		name: "Hearty Cheeseburger Curry",
		type: "curry",
		description:
			"This voluminous curry is large enough to astound even a Snorlax",
		ingredients: [
			{ name: "Moomoo Milk", amount: 8 },
			{ name: "Bean Sausage", amount: 8 },
		],
	},
	{
		name: "Soft Potato Chowder",
		type: "curry",
		description:
			"A thick chowder made from potatoes boilied until practically melting.",
		ingredients: [
			{ name: "Moomoo Milk", amount: 10 },
			{ name: "Soft Potato", amount: 8 },
			{ name: "Tasty Mushroom", amount: 4 },
		],
	},
	{
		name: "Simple Chowder",
		type: "curry",
		description:
			"You can really taste the richness of the milk in this simple chowder.",
		ingredients: [{ name: "Moomoo Milk", amount: 7 }],
	},
	{
		name: "Beanburger Curry",
		type: "curry",
		description:
			"The tender bean patties are the stars of the show in this curry.",
		ingredients: [{ name: "Bean Sausage", amount: 7 }],
	},
	{
		name: "Mild Honey Curry",
		type: "curry",
		description:
			"A mild curry containing plenty of honey. Kids gobble it down!",
		ingredients: [{ name: "Honey", amount: 7 }],
	},
	{
		name: "Ninja Curry",
		type: "curry",
		description:
			"This tofu curry is said to have been a favorite dish of ninjas.",
		ingredients: [
			{ name: "Greengrass Soybeans", amount: 15 },
			{ name: "Bean Sausage", amount: 9 },
			{ name: "Large Leek", amount: 9 },
			{ name: "Tasty Mushroom", amount: 5 },
		],
	},
	{
		name: "Drought Katsu Curry",
		type: "curry",
		description: "The freshly-fried cutlet has a nice sparkle to it.",
		ingredients: [
			{ name: "Bean Sausage", amount: 10 },
			{ name: "Pure Oil", amount: 4 },
		],
	},
	{
		name: "Melty Omelette Curry",
		type: "curry",
		description:
			"This curry is topped with a masterfully-cooked omelette that simply melts in the mouth.",
		ingredients: [
			{ name: "Fancy Egg", amount: 10 },
			{ name: "Snoozy Tomato", amount: 6 },
		],
	},
	{
		name: "Bulk Up Bean Curry",
		type: "curry",
		description: "A hearty curry packed with nutrients needed for bulking up.",
		ingredients: [
			{ name: "Greengrass Soybeans", amount: 12 },
			{ name: "Bean Sausage", amount: 6 },
			{ name: "Fiery Herb", amount: 4 },
			{ name: "Fancy Egg", amount: 4 },
		],
	},
	{
		name: "Limber Corn Stew",
		type: "curry",
		description:
			"The milk and corn in this creamy stew have a mild, gentle sweetness.",
		ingredients: [
			{ name: "Greengrass Corn", amount: 14 },
			{ name: "Moomoo Milk", amount: 8 },
			{ name: "Soft Potato", amount: 8 },
		],
	},
	{
		name: "Inferno Corn Keema Curry",
		type: "curry",
		description:
			"This curry's infernal spiciness kicks in after the sweetness of the corn.",
		ingredients: [
			{ name: "Fiery Herb", amount: 27 },
			{ name: "Bean Sausage", amount: 24 },
			{ name: "Greengrass Corn", amount: 14 },
			{ name: "Warming Ginger", amount: 12 },
		],
	},
];

const saladRecipes = [
	{
		name: "Mixed Salad",
		type: "salad",
		description: "Any combination that doesn't match a recipe",
		ingredients: [],
	},
	{
		name: "Slowpoke Tail Pepper Salad",
		type: "salad",
		description:
			"The mouth-tinglingly spicy pepper highlights the sweetness of the tail.",
		ingredients: [
			{ name: "Slowpoke Tail", amount: 10 },
			{ name: "Fiery Herb", amount: 10 },
			{ name: "Pure Oil", amount: 15 },
		],
	},
	{
		name: "Spore Mushroom Salad",
		type: "salad",
		description: "A salad rich in minerals that improve the quality of sleep.",
		ingredients: [
			{ name: "Tasty Mushroom", amount: 17 },
			{ name: "Snoozy Tomato", amount: 8 },
			{ name: "Pure Oil", amount: 8 },
		],
	},
	{
		name: "Snow Cloak Caesar Salad",
		type: "salad",
		description:
			"A bacon salad topped with a generous snowy sprinkling of cheese.",
		ingredients: [
			{ name: "Moomoo Milk", amount: 10 },
			{ name: "Bean Sausage", amount: 6 },
		],
	},
	{
		name: "Gluttony Potato Salad",
		type: "salad",
		description:
			"This potato salad contains just a hint of flavor from the Fancy Apples.",
		ingredients: [
			{ name: "Soft Potato", amount: 14 },
			{ name: "Fancy Egg", amount: 9 },
			{ name: "Bean Sausage", amount: 7 },
			{ name: "Fancy Apple", amount: 6 },
		],
	},
	{
		name: "Water Veil Tofu Salad",
		type: "salad",
		description: "A salad topped with wobbly cubes of tofu.",
		ingredients: [
			{ name: "Greengrass Soybeans", amount: 10 },
			{ name: "Snoozy Tomato", amount: 6 },
		],
	},
	{
		name: "Superpower Extreme Salad",
		type: "salad",
		description:
			"A hefty salad that provides all your daily nutrients at once.",
		ingredients: [
			{ name: "Bean Sausage", amount: 9 },
			{ name: "Warming Ginger", amount: 6 },
			{ name: "Fancy Egg", amount: 5 },
			{ name: "Soft Potato", amount: 3 },
		],
	},
	{
		name: "Bean Ham Salad",
		type: "salad",
		description: "This simple salad features ham made from Bean Sausages",
		ingredients: [{ name: "Bean Sausage", amount: 8 }],
	},
	{
		name: "Snoozy Tomato Salad",
		type: "salad",
		description:
			"The Snoozy Tomatoes in this simple salad are a great aid for sleep.",
		ingredients: [{ name: "Snoozy Tomato", amount: 8 }],
	},
	{
		name: "Moomoo Caprese Salad",
		type: "salad",
		description:
			"A basic salad containing only cheese, tomatoes, and a splash of oil.",
		ingredients: [
			{ name: "Moomoo Milk", amount: 12 },
			{ name: "Snoozy Tomato", amount: 6 },
			{ name: "Pure Oil", amount: 5 },
		],
	},
	{
		name: "Contrary Chocolate Meat Salad",
		type: "salad",
		description:
			"The savory sauce and sweet chocolate sauce let you enjoy a mix of flavors.",
		ingredients: [
			{ name: "Soothing Cacao", amount: 14 },
			{ name: "Bean Sausage", amount: 9 },
		],
	},
];

export { curryRecipes };
