import React, {
	createContext,
	useContext,
	useReducer,
	useState,
} from "react";

import {
	ContextProps,
	StateContextProps,
} from "../@types.taungthutada";

const Context = createContext<ContextProps | null>(null);

export const StateContext = ({
	children,
}: StateContextProps) => {
	const [isDrawerOpen, setIsDrawerOpen] =
		useState<boolean>(false);

	const initialLangState = {
		lang: "EN",
	};

	return (
		<Context.Provider
			value={{
				isDrawerOpen,
				setIsDrawerOpen,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
