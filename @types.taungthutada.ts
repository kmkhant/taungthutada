import React from "react";

export interface ContextProps {
	isDrawerOpen: boolean;
	setIsDrawerOpen: React.Dispatch<
		React.SetStateAction<boolean>
	>;
}

export interface StateContextProps {
	children: React.ReactNode;
}

export enum LangActionKind {
	BURMESE = "MM",
	ENGLISH = "EN",
}

export interface LangAction {
	type: LangActionKind;
	payload: string;
}

export interface LangState {
	lang: string;
}
