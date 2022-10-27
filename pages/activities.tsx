import { NextPage } from "next";
import React from "react";
import ActivitiyTimeline from "../components/ActivitiyTimeline";

import { motion } from "framer-motion";
import { fadeUp, container } from "../variants";
import SEO from "../components/SEO/SEO";
import { ILocale } from "../@types.taungthutada";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ActivitiesPage: NextPage = () => {
	return (
		<main>
			<SEO title="Activities" />
			<section className="bg-midColor h-[350px] flex justify-center items-center">
				<div className="flex space-x-2">
					<motion.div
						className="w-16 h-0.5 bg-white rounded-full mt-3"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					></motion.div>
					<motion.div
						className="sm:w-[600px]"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<motion.p
							className="text-white font-semibold text-xl lg:text-2xl"
							variants={fadeUp}
						>
							OUR GOAl
						</motion.p>
						<motion.p
							className="text-white text-md lg:text-lg"
							variants={fadeUp}
						>
							We strive to create a sustainable and
							inclusive solutions that are capable of
							mitigating climate risks, improving food
							security and safety, and ensuring livelihoods
							in Myanmar&apos;s agriculture.
						</motion.p>
					</motion.div>
				</div>
			</section>
			<section>
				<motion.h3
					className="font-bold text-xl lg:text-2xl text-center my-12 sm:my-12"
					variants={fadeUp}
					initial="initial"
					whileInView="animate"
				>
					Activities in 2021
				</motion.h3>
				{/* Timeline */}
				<ActivitiyTimeline />
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

export default ActivitiesPage;
