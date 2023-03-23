import { NextPage } from "next";
import Image from "next/legacy/image";
import React from "react";

import { motion } from "framer-motion";
import { fadeUp, container, slideIn } from "../variants";
import SEO from "../components/SEO/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "../@types.taungthutada";

const Activities: NextPage = () => {
	return (
		<main>
			<SEO title="Resources" />
			<section className="bg-midColor h-[600px] flex justify-center items-center">
				<div>hi</div>
			</section>
		</main>
	);
};

export const getServerSideProps = async ({
	locale,
}: ILocale) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default Activities;
