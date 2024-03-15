"use client";
import { Card, Inset, Text, Strong } from "@radix-ui/themes";
import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import RecipeType from "@/types/recipes";

interface RecipeCardProps {
	recipe: RecipeType;
}

const RecipeCard = (props: RecipeCardProps) => {
	const recipe = props.recipe;
	const ingredients = recipe.ingredients;

	const [open, setOpen] = useState(false);
	return (
		<div>
			<Card size="2" style={{ maxWidth: 300 }}>
				<Inset clip="padding-box" side="top" pb="current">
					<img
						src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
						alt="Bold typography"
						style={{
							display: "block",
							objectFit: "cover",
							width: "100%",
							height: 140,
							backgroundColor: "var(--gray-5)",
						}}
					/>
				</Inset>
				<Text as="p" size="4">
					<Strong>{recipe.name}</Strong>
				</Text>
				<Text as="p" size="2">
					{recipe.type}
				</Text>
				<Text as="p" size="3">
					{recipe.description}
				</Text>

				<Collapsible.Root
					className="CollapsibleRoot"
					open={open}
					onOpenChange={setOpen}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<span className="Text">Ingredients</span>
						<Collapsible.Trigger asChild>
							<button className="IconButton">
								{open ? "*Open*" : "*Close*"}
							</button>
						</Collapsible.Trigger>
					</div>

					{/* additional text or content can be placed here */}

					<Collapsible.Content>
						{/* map ingredients here  */}
						<div>hello</div>
					</Collapsible.Content>
				</Collapsible.Root>
			</Card>
		</div>
	);
};

export default RecipeCard;
