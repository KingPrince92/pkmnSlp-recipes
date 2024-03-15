import { Heading } from "@radix-ui/themes";

export default function Header({ children }) {
	return (
		<Heading as="h1" align={"left"} className={`font-bold pb-3 `}>
			{children}
		</Heading>
	);
}
