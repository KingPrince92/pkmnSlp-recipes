import {RecipeType} from "@/types/recipes";

const curryRecipes: RecipeType = {
	name: "Curry",
	recipes: [
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
			ingredients: [{name: "Fancy Apple", amount: 7}],
		},
	],
};

export {curryRecipes};
