import React from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { ContextProps } from "../../@types.taungthutada";

interface DrawerLinkProps {
	to: string;
	description: string;
}

const DrawerLink: React.FC<DrawerLinkProps> = ({
	to,
	description,
}) => {
	const { setIsDrawerOpen } =
		useStateContext() as ContextProps;

	return (
        (<Link href={to}>

            <p
                className="text-white text-lg text-center py-4"
                onClick={() => setIsDrawerOpen(false)}
            >
                {description}
            </p>

        </Link>)
    );
};

export default DrawerLink;
