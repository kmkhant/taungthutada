import React, { useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { ContextProps } from "../../@types.taungthutada";
import Drawer from "../Drawer/Drawer";
import DrawerLink from "../Drawer/DrawerLink";
import NavbarButton from "./NavbarButton";

const Navbar: React.FC = () => {
	const { isDrawerOpen, setIsDrawerOpen } =
		useStateContext() as ContextProps;

	const handleOpen = () => {
		setIsDrawerOpen((prev) => !prev);
	};
	console.log("REBUILD");

	return (
		<>
			<nav className="fixed flex justify-between items-center top-0 z-50 px-6 sm:px-16 w-full py-2 h-[65px] bg-mainColor bg-opacity-60 backdrop-blur-sm">
				<div className="self-start justify-self-start">
					<Link href="/">
						<a>
							<Image
								src={Logo}
								alt="taungthutada logo"
								width={50}
								height={50}
								className="z-20 cursor-pointer"
							/>
						</a>
					</Link>
				</div>
				<div className="hidden sm:flex z-20 justify-center items-center space-x-10">
					<NavbarButton
						to="/ourwork"
						description="Our Work"
					/>
					<NavbarButton
						to="/ourstory"
						description="Our Story"
					/>
					<NavbarButton
						to="/activities"
						description="Activities"
					/>
					<NavbarButton
						to="/support"
						description="Support"
					/>
				</div>
				{/* Humburger Menu */}
				<div className="block sm:hidden">
					<button
						className="text-white w-10 h-10 relative focus:outline-none bg-transparent"
						onClick={handleOpen}
					>
						<div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<span
								aria-hidden="true"
								className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rounded-full ${
									isDrawerOpen
										? "rotate-45"
										: "-translate-y-1.5"
								}`}
							></span>
							<span
								aria-hidden="true"
								className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rounded-full ${
									isDrawerOpen ? "opacity-0" : ""
								}`}
							></span>
							<span
								aria-hidden="true"
								className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rounded-full ${
									isDrawerOpen
										? "-rotate-45"
										: "translate-y-1.5"
								}`}
							></span>
						</div>
					</button>
				</div>
				<div className="hidden sm:block">&nbsp;</div>
			</nav>
			<Drawer>
				<DrawerLink to="/ourwork" description="Our Work" />

				<DrawerLink
					to="/ourstory"
					description="Our Story"
				/>

				<DrawerLink
					to="/activities"
					description="Activities"
				/>

				<DrawerLink to="/support" description="Support" />
			</Drawer>
		</>
	);
};

export default Navbar;
