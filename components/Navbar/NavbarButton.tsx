import React from "react";
import Link from "next/link";

interface NavButtonProps {
	to: string;
	description: string;
}

const NavbarButton: React.FC<NavButtonProps> = ({
	to,
	description,
}) => {
	return (
		<Link href={to}>
			<p className="relative group cursor-pointer">
				<a className="text-white text-sm">{description}</a>
				<span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all rounded-tr-full rounded-br-full"></span>
				<span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all rounded-tl-full rounded-bl-full"></span>
			</p>
		</Link>
	);
};

export default NavbarButton;
