import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavButtonProps {
	to: string;
	description: string;
}

const NavbarButton: React.FC<NavButtonProps> = ({
	to,
	description,
}) => {
	const router = useRouter();

	const current = router.pathname === to;

	return (
		<Link href={to}>
			<p
				className={`relative group cursor-pointer ${
					current
						? "border-b-2 pb-1 transition-all duration-300 ease-in-out"
						: ""
				}`}
			>
				<a className="text-white text-sm sm:text-md">
					{description}
				</a>
				{!current && (
					<>
						<span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all rounded-tr-full rounded-br-full"></span>
						<span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all rounded-tl-full rounded-bl-full"></span>
					</>
				)}
			</p>
		</Link>
	);
};

export default NavbarButton;
