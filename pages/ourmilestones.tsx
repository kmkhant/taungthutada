import { NextPage } from "next";
import React from "react";

import { motion } from "framer-motion";
import {
	fadeUp,
	container,
	fade,
	milestoneContainer,
} from "../variants";
import SEO from "../components/SEO/SEO";
import { ILocale } from "../@types.taungthutada";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Timeline from "@mui/lab/Timeline";
import TimelineItemCard from "../components/Timeline/TimelineItemCard";
import TimelineItemCardFlip from "../components/Timeline/TimelineItemCardFlip";
import {
	TimelineSeparator,
	TimelineItem,
	TimelineDot,
} from "@mui/lab/";
const data = [
	{
		date: "Jan, 2021",
		description:
			"Being a member of Myanmar Agriculture Network - Grow Asia",
	},
	{
		date: "May, 2021",
		description:
			"Corn Seed Program for disadvantaged farmers in Pintaya,Southern Shan State",
	},
	{
		date: "April - June, 2021",
		description:
			"Conducting the inputs system intervention project survey for Southern and Northern Shan State in cooperation with HEKS/EPER Myanmar",
	},
	{
		date: "Oct - Sept, 2021",
		description:
			"Inputs Emergency Support to potato farmers from Naungtaya, Southern Shan State (Peer Lead Grant)",
	},
	{
		date: "Oct, 2021",
		description:
			"Women Empowerment Training for local young women farmers from Naungtaya, Southern Shan State ",
	},
	{
		date: "Dec - May, 2021",
		description:
			"Impact Investment from HEKS/EPER Myanmar and pilot project in HsiHseng to transform as social busienss.",
	},
	{
		date: "June - August, 2022 ",
		description:
			"Selected as top-7 startup company to participate in Santhit Accelerator Myanmar",
	},
	{
		date: "October, 2022",
		description:
			"Second Phase project kick-off with HEKS/EPER Myanmar for scaling of formal project. ",
	},
	{
		date: "Jan, 2023",
		description: "New Office in HsiHseng ",
	},
	{
		date: "Feb, 2023",
		description:
			"Team is with 8 fulltime members and 3 part-time members ",
	},
];
const Ourmilestones: NextPage = () => {
	const TimelineMotion = motion(Timeline);

	return (
		<main>
			<SEO title="Our Milestones" />
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
							Our Milestones
						</motion.p>
						<motion.p
							className="text-white text-md lg:text-lg"
							variants={fadeUp}
						>
							Make a short description
						</motion.p>
					</motion.div>
				</div>
			</section>
			<section className="">
				<div className="flex justify-center my-5">
					<TimelineMotion
						variants={milestoneContainer}
						initial="initial"
						animate="animate"
					>
						{data.map((item, idx) =>
							idx === data.length - 1 ? (
								<TimelineItemCard
									key={idx}
									date={item.date}
									description={item.description}
									last={true}
								/>
							) : (
								<TimelineItemCard
									key={idx}
									date={item.date}
									description={item.description}
								/>
							)
						)}
					</TimelineMotion>
				</div>
			</section>
		</main>
	);
};

export const getStaticProps = async ({
	locale,
}: ILocale) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default Ourmilestones;
