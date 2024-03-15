import React from "react";
import RecipeCard from "./RecipeCard";
import { Grid } from "@radix-ui/themes";
import RecipeType from "@/types/recipes";

interface RecipeCardContainerProps {
	recipes: RecipeType;
}

const RecipeCardContainer = (props: RecipeCardContainerProps) => {
	const recipes = props.recipes;
	console.log(recipes);
	return (
		<Grid
			columns={{ initial: "1", xs: "2", sm: "3", md: "3" }}
			gap="2"
			width="auto"
			mx="3"
		></Grid>
	);
};

export default RecipeCardContainer;
