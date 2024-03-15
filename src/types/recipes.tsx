export default interface RecipeType {
	name: string;
	type: string;
	description: string;
	ingredients: Ingredient[];
}

interface Ingredient {
	name: string;
	amount: number;
}
