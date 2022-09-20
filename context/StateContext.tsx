import React, {
	createContext,
	useContext,
	useReducer,
	useState,
} from "react";

import {
	ContextProps,
	StateContextProps,
	LangAction,
	LangState,
	LangActionKind,
} from "../@types.taungthutada";

const Context = createContext<ContextProps | null>(null);

// function langReducer(state: LangState, action: LangAction) {
// 	const { type, payload } = action;
// 	switch(type) {
// 		case LangActionKind.BURMESE:
// 	}
// }

export const StateContext = ({
	children,
}: StateContextProps) => {
	const [isDrawerOpen, setIsDrawerOpen] =
		useState<boolean>(false);

	const initialLangState = {
		lang: "EN",
	};

	// const [state, dispatch] = useReducer();

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
