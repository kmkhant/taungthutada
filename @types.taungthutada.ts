export interface ContextProps {
	isDrawerOpen: boolean;
	setIsDrawerOpen: React.Dispatch<
		React.SetStateAction<boolean>
	>;
}

export interface StateContextProps {
	children: React.ReactNode;
}
