import { NextPage } from "next";
import Image from "next/legacy/image";
import React from "react";

import { motion } from "framer-motion";
import { fadeUp, container, slideIn } from "../variants";
import SEO from "../components/SEO/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "../@types.taungthutada";

/* Value Chain Images */
import InputShopImg from "../public/ourwork/inputs-shop.svg";
import SubstainablePartnerShip from "../public/ourwork/substainable-partnership.svg";
import ContractFarming from "../public/ourwork/contract-framing.svg";
import RegionalMarket from "../public/ourwork/regional-market.svg";
import LineVertical from "../public/ourwork/line-vertical.svg";
import LineHorizontal from "../public/ourwork/line-horizontal.svg";

const Activities: NextPage = () => {
	return (
		<main>
			<SEO title="Activities" />
			<section className="bg-midColor h-[600px] flex justify-center items-center">
				<div className="flex space-x-2">
					<motion.div
						className="w-16 h-0.5 bg-white rounded-full mt-3"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					></motion.div>
					<motion.div
						className="sm:w-[750px]"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<div className="overflow-hidden inline-block">
							<motion.p
								className="text-white font-semibold text-xl lg:text-2xl"
								variants={fadeUp}
							>
								Our Goal
							</motion.p>
						</div>

						<div className="overflow-hidden inline-block">
							<motion.p
								className="text-white text-md lg:text-lg"
								variants={fadeUp}
							>
								We strive to create a sustainable and
								inclusive solutions that are capable of
								ensuring livelihoods, improving food
								security and safety, and mitigating the
								climate risks.
							</motion.p>
							<br />
						</div>
					</motion.div>
				</div>
			</section>
			<section className="">
				<div>
					<motion.h3
						className="font-bold text-xl lg:text-2xl text-center my-6 sm:my-6"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					>
						Our Value Chain Strategy
					</motion.h3>
					<motion.p className="text-center px-16 mb-12">
						We are a Value-chain Development Firm that aims
						to grow, transport & transform crops into
						sustainable responsible products and commodities
						in rural areas with small-holder farmers for the
						purpose of offering these high-quality products
						in Local, ASEAN, and international markets at a
						highly competitive price.
					</motion.p>
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
							<p className="text-center text-md mt-4">
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
							<p className="text-center text-md mt-4">
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
							<p className="text-center text-md mt-4">
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
							<p className="text-center text-md mt-4">
								Regional Market
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div>
					<motion.h3
						className="font-bold text-xl lg:text-2xl text-center my-6 sm:my-6"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					>
						Our Service for Farmers
					</motion.h3>
					<div className="grid grid-cols-2">
						<div className="flex justify-center">
							<div>
								<h3 className="text-md text-center">
									Contract Farming Service
								</h3>
							</div>
						</div>
						<div className="flex justify-center">
							<div>
								<h3 className="text-md text-center">
									Innovative Inputs Service
								</h3>
							</div>
						</div>
					</div>
					<motion.h3
						className="font-bold text-xl lg:text-2xl text-center my-6 sm:my-6"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					>
						Our Products
					</motion.h3>
				</div>
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
