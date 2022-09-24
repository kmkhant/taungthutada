import React, { useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { ContextProps } from "../../@types.taungthutada";
import Drawer from "../Drawer/Drawer";
import DrawerLink from "../Drawer/DrawerLink";
import NavbarButton from "./NavbarButton";
import { useRouter } from "next/router";

// language
import { en, my } from "../../assets/locales/navbar";

// framer motion
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
	const { isDrawerOpen, setIsDrawerOpen } =
		useStateContext() as ContextProps;

	const handleOpen = () => {
		setIsDrawerOpen((prev) => !prev);
	};

	const router = useRouter();

	function changeLanguage(
		e: React.MouseEvent<HTMLButtonElement>
	) {
		e.preventDefault();

		if (router.locale === "en") {
			// change to myanmar
			const locale = "my";
			router.push(
				router.pathname,
				`/my/${router.pathname}`,
				{ locale }
			);
		} else {
			// change to english
			const locale = "en";
			router.push(
				router.pathname,
				`/en/${router.pathname}`,
				{ locale }
			);
		}
	}

	const t = router.locale === "en" ? en : my;

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
						description={t.ourwork}
					/>
					<NavbarButton
						to="/ourstory"
						description={t.ourstory}
					/>
					<NavbarButton
						to="/activities"
						description={t.activities}
					/>
					<NavbarButton
						to="/contact"
						description={t.contact}
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
				<motion.button
					className="hidden sm:block text-white"
					onClick={changeLanguage}
					whileHover={{
						scale: 1.1,
						transition: {
							type: "spring",
							stiffness: 100,
						},
					}}
					whileTap={{
						scale: 0.9,
					}}
				>
					<p>{router.locale}</p>
				</motion.button>
			</nav>
			<Drawer>
				<DrawerLink to="/ourwork" description={t.ourwork} />

				<DrawerLink
					to="/ourstory"
					description={t.ourstory}
				/>

				<DrawerLink
					to="/activities"
					description={t.activities}
				/>

				<DrawerLink to="/contact" description={t.contact} />
			</Drawer>
		</>
	);
};

export default Navbar;
