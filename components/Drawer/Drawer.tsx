import React from "react";
import { ContextProps } from "../../@types.taungthutada";
import { useStateContext } from "../../context/StateContext";

interface DrawerProps {
	children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
	const { isDrawerOpen, setIsDrawerOpen } =
		useStateContext() as ContextProps;

	return (
		<main
			className={`sm:hidden top-[65px] fixed z-10 overflow-hidden inset-0 transform ease-in-out ${
				isDrawerOpen
					? "translate-x-0"
					: "transition-all delay-500 translate-x-full"
			}`}
		>
			<section
				className={`w-screen max-w-full right-0 absolute bg-mainColor backdrop-blur-sm bg-opacity-60 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${
					isDrawerOpen
						? "translate-x-0"
						: "translate-x-full"
				}`}
			>
				<article className="relative w-screen max-w-lg pb-10 mt-4 flex flex-col space-y-3 h-full">
					{children}
				</article>
			</section>
		</main>
	);
};

export default Drawer;
