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

export interface IAchievementCard {
	title: string;
	description: string;
	imageHolder: any;
}

export interface ReviewCardProps {
	imageUrl: string;
	name: string;
	description: string;
}

export interface MemberProfileProps {
	name: string;
	occupation: string;
	imageUrl: any;
	linkedIn: string;
	email: string;
}

export interface ILocale {
	locale: "en" | "my";
}
