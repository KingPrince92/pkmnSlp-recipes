export interface RecipeType {
	name: string;
	recipes: Recipe[];
}

export interface Recipe {
	name: string;
	type: string;
	description: string;
	ingredients: Ingredient[];
}

interface Ingredient {
	name: string;
	amount: number;
}
