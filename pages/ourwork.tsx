import React from "react";
import { NextPage } from "next";
import ImageHolder from "../public/image_holder.svg";
import Image from "next/image";
import ReviewCard from "../components/ReviewCard";
import ProfileHolder from "../public/profile-holder.svg";

/* Achievement Section */
import AchievementCard from "../components/AchievementCard";

/* Value Chain Images */
import InputShopImg from "../public/ourwork/inputs-shop.svg";
import SubstainablePartnerShip from "../public/ourwork/substainable-partnership.svg";
import ContractFarming from "../public/ourwork/contract-framing.svg";
import RegionalMarket from "../public/ourwork/regional-market.svg";
import LineVertical from "../public/ourwork/line-vertical.svg";
import LineHorizontal from "../public/ourwork/line-horizontal.svg";

/* Publication Images */
import BookCoverImg from "../public/ourwork/book.png";
import CalendarImg from "../public/ourwork/calendar.png";
import RecordImg from "../public/ourwork/record.png";

/* Activities Section */
import ActivitiesImg from "../public/ourwork/team-activities.svg";
import PlaceHolderImg from "../public/image_holder.svg";
import ActivityCard from "../components/ActivityCard";

import { motion } from "framer-motion";

// Languages
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "../@types.taungthutada";

// variants
import {
	fadeUp,
	container,
	slideIn,
	fade,
} from "../variants";
import SEO from "../components/SEO/SEO";

const Ourwork: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<main>
			<SEO title="Our Work" />
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
						<div className="overflow-hidden inline-block">
							<motion.p
								className="text-white font-semibold text-xl lg:text-2xl"
								variants={fadeUp}
							>
								OUR MISSION
							</motion.p>
						</div>

						<motion.p
							className="text-white text-md lg:text-lg"
							variants={fadeUp}
						>
							Becoming impact-oriented value chain
							development firm and at the same time, to
							empower rural community members, women and
							youths through economic opportunities, and
							market access.
						</motion.p>
					</motion.div>
				</div>
			</section>
			<section className="mx-4 sm:mx-8 lg:mx-16  bg-white">
				<motion.h3
					className="font-bold text-lg sm:text-2xl text-center my-12 sm:my-12"
					variants={fadeUp}
					initial="initial"
					whileInView="animate"
				>
					Our Achievements
				</motion.h3>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-3 gap-3"
					variants={container}
					initial="initial"
					whileInView="animate"
				>
					<AchievementCard
						title="AbCD"
						description="short desc"
						imageHolder={ImageHolder}
					/>
					<AchievementCard
						title="AbCD"
						description="short desc"
						imageHolder={ImageHolder}
					/>
					<AchievementCard
						title="AbCD"
						description="short desc"
						imageHolder={ImageHolder}
					/>
				</motion.div>
				<div className="my-4">
					<motion.h3
						className="font-bold text-xl lg:text-2xl text-center my-12 sm:my-12"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					>
						Voice From the Farmers
					</motion.h3>

					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<ReviewCard
							imageUrl={ProfileHolder}
							name="U Tin Aung"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum suscipit vehicula. Curabitur hendrerit mi a auctor ornare. Nullam vitae"
						/>
						<ReviewCard
							imageUrl={ProfileHolder}
							name="U Tin Aung"
							description="Quisque at ante non turpis euismod viverra. Fusce ipsum urna, suscipit in vestibulum vel, vehicula non nibh. Sed id tincidunt tortor. Nulla dolor nulla, ullamcorper quis sagittis nec, convallis id purus. Maecenas quis gravida lacus. Vivamus non eros erat. Etiam fringilla justo sit amet libero condimentum, at hendrerit."
						/>
						<ReviewCard
							imageUrl={ProfileHolder}
							name="U Tin Aung"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum suscipit vehicula. Curabitur hendrerit mi a auctor ornare. Nullam vitae"
						/>
						<ReviewCard
							imageUrl={ProfileHolder}
							name="U Tin Aung"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum suscipit vehicula. Curabitur hendrerit mi a auctor ornare. Nullam vitae"
						/>
					</motion.div>
				</div>

				<div>
					<motion.h3
						className="font-bold text-xl lg:text-2xl text-center my-12 sm:my-12"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					>
						Our Value Chain Strategy
					</motion.h3>
					<motion.div
						className="flex justify-center flex-col sm:flex-row sm:space-x-4"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUp}
						>
							<Image
								src={InputShopImg}
								alt={"Input Shop Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-md lg:text-xl mt-4">
								Inputs Shop
							</p>
						</motion.div>

						{/* Line Horizontal */}
						<motion.div
							className="hidden sm:flex items-center"
							variants={slideIn}
						>
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</motion.div>

						{/* Line Vertical */}
						<motion.div
							className="flex sm:hidden items-center justify-center my-4 sm:my-0"
							variants={fadeUp}
						>
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</motion.div>

						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUp}
						>
							<Image
								src={SubstainablePartnerShip}
								alt={"Substainable Parnership"}
								width={80}
								height={80}
							/>
							<p className="text-center text-md lg:text-xl mt-4">
								Substainable Partnership
							</p>
						</motion.div>

						{/* Line Horizontal */}
						<motion.div
							className="hidden sm:flex items-center"
							variants={slideIn}
						>
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</motion.div>

						{/* Line Vertical */}
						<motion.div
							className="flex sm:hidden items-center justify-center my-4 sm:my-0"
							variants={fadeUp}
						>
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</motion.div>
						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUp}
						>
							<Image
								src={ContractFarming}
								alt={"Contract Farming Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-md lg:text-xl mt-4">
								Contract Farming
							</p>
						</motion.div>

						{/* Line Horizontal */}
						<motion.div
							className="hidden sm:flex items-center"
							variants={slideIn}
						>
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</motion.div>

						{/* Line Vertical */}
						<motion.div
							className="flex sm:hidden items-center justify-center my-4 sm:my-0"
							variants={fadeUp}
						>
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</motion.div>
						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUp}
						>
							<Image
								src={RegionalMarket}
								alt={"Regional Market Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-md lg:text-xl mt-4">
								Regional Market
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div>
					<motion.h3
						className="font-bold text-xl lg:text-2xl text-center my-12 sm:my-12"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					>
						Our Publication: Farm Record & Farmer Story
					</motion.h3>
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-3 gap-3"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<motion.div variants={slideIn}>
							<Image
								src={BookCoverImg}
								alt={"taungthutada Book Cover"}
							/>
						</motion.div>
						<motion.div variants={slideIn}>
							<Image
								src={CalendarImg}
								alt={"taungthutada calendar"}
							/>
						</motion.div>
						<motion.div variants={slideIn}>
							<Image
								src={RecordImg}
								alt={"taungthutada record"}
							/>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Activities Section */}
			<section className="mx-4 sm:mx-8 lg:mx-16 py-2 sm:py-4 bg-white">
				<motion.h3
					className="font-bold text-xl sm:text-2xl text-center my-12 sm:my-12"
					variants={fadeUp}
					initial="initial"
					whileInView="animate"
				>
					Our Previous Projects
				</motion.h3>
				<motion.div
					className="flex justify-center"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					<Image
						src={ActivitiesImg}
						alt={"taungthutada team activites"}
					/>
				</motion.div>
				<div className="">
					<ActivityCard
						title="Project: Farmer Partnership -
Farm Consultaion"
						description="TTTD team worked with HEKS Myanmar for rapid market assessment of inputs market system in Myanmar. The project is intended to facilitate the input assistance to farmers and TTTD is considered to be the data collection team of the project to farmers and"
						image={PlaceHolderImg}
						slug={"demo"}
						flip={false}
					/>
					<hr className="mt-4" />
					<ActivityCard
						title="Project: Farmer Partnership -
Farm Consultaion"
						description="TTTD team worked with HEKS Myanmar for rapid market assessment of inputs market system in Myanmar. The project is intended to facilitate the input assistance to farmers and TTTD is considered to be the data collection team of the project to farmers and"
						image={PlaceHolderImg}
						slug={"demo"}
						flip={true}
					/>
					<hr className="mt-4" />
					<ActivityCard
						title="Project: Farmer Partnership -
Farm Consultaion"
						description="TTTD team worked with HEKS Myanmar for rapid market assessment of inputs market system in Myanmar. The project is intended to facilitate the input assistance to farmers and TTTD is considered to be the data collection team of the project to farmers and"
						image={PlaceHolderImg}
						slug={"demo"}
						flip={false}
					/>
					<hr className="mt-4" />
					<ActivityCard
						title="Project: Farmer Partnership -
Farm Consultaion"
						description="TTTD team worked with HEKS Myanmar for rapid market assessment of inputs market system in Myanmar. The project is intended to facilitate the input assistance to farmers and TTTD is considered to be the data collection team of the project to farmers and"
						image={PlaceHolderImg}
						slug={"demo"}
						flip={true}
					/>
					<hr className="mt-4" />
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

export default Ourwork;
