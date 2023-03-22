import { NextPage } from "next";
import Image from "next/legacy/image";
import React from "react";
import MemberProfile from "../components/MemberProfile";

import Logo from "../public/ourstory/logo.svg";
import profileHolder from "../public/ourstory/profileHolder.png";

import { motion } from "framer-motion";
import {
	fadeUp,
	container,
	fade,
	scaleUp,
} from "../variants";
import SEO from "../components/SEO/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "../@types.taungthutada";

const OurStory: NextPage = () => {
	return (
		<main>
			<SEO title="Our Story" />
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
								MISSION
							</motion.p>
						</div>

						<div className="overflow-hidden inline-block">
							<motion.p
								className="text-white text-md lg:text-lg"
								variants={fadeUp}
							>
								We drive the growth of rural economy and
								agriculture where everyone can enlarge their
								participation , improve their livelihoods,
								and we scale and deepen the agriculture
								development, economic and social impacts
								together with rural people(farmers, women
								and youths) through market creation,
								sustainable innovative agri-services, and
								rural business partnerships.
							</motion.p>
							<br />
						</div>
					</motion.div>
				</div>
			</section>
			<section className="mx-4 sm:mx-8 lg:mx-16 bg-white">
				<h3 className="font-bold text-xl lg:text-2xl text-center mt-6">
					Story of Taungthutada
				</h3>
				<div className="flex justify-center mt-8">
					<motion.div
						variants={scaleUp}
						initial="initial"
						whileInView="animate"
					>
						<Image
							src={Logo}
							alt={"logo"}
							width={160}
							height={160}
						/>
					</motion.div>
				</div>
				<div className="mt-8">
					<motion.p
						className="text-md lg:text-lg"
						variants={fade}
						initial="initial"
						whileInView="animate"
					>
						&emsp;&emsp;&emsp;&emsp;Taungthutada
						(တောင်သူ့တံတား) was started in September, 2019
						with the initial aim to increase the information
						access for farmers in Southern Shan State. All
						of us are primarily from farming families and
						eager to serve the farmers as much as we can.{" "}
						<br />
						&emsp;&emsp;&emsp;&emsp; With the belief of “
						Those who feed us, need us”, we started working
						on the idea by meeting through chit-chat over
						coffee on Saturdays and online discussions at
						night. Since then, TTTD has created a Facebook
						Page, talked to and conducted research for
						farmers, and created agri information contents
						in an easy language for the Shan Farmers. In
						three month, the team has participated at ASEAN
						level boot camp and we have served farmers as
						follows:
					</motion.p>
					<br />
					<div className="flex justify-center">
						<motion.ol className="list-disc list-mainColor text-md lg:text-lg">
							<motion.li>
								Assisting 20 farmers through messenger chat
								and phone call
							</motion.li>
							<motion.li>
								Publishing 33 educational posts for garlic
								farmers.
							</motion.li>
							<motion.li>
								One of team members joining “ 2019 Winter
								Innovation Camp at Chulalongkorn University”
							</motion.li>
						</motion.ol>
					</div>
				</div>
				<div>
					<motion.h3 className="font-bold text-xl md:text-2xl text-center my-4 sm:my-4">
						A Global Pandemic & TTTD: 2020 Year
					</motion.h3>
					<p className="text-md lg:text-lg">
						&emsp;&emsp;&emsp;&emsp;Since the beginning,
						TTTD team wanted to go into fields and meet
						farmers, learn about their problems and solve
						them with the concept of “ Solving Together With
						Farmer -{" "}
						<span className="font-pyidaungsu text-center">
							တောင်သူများနှင့်အတူပူးပေါင်းပြီးကူညီဖြေရှင်းခြင်း
							”
						</span>
					</p>

					<p className="text-md lg:text-lg">
						&emsp;&emsp;&emsp;&emsp;Therefore, at the
						beginning of year 2020, the team put a question
						of “ What if we start the a field work in
						Taunggyi to do a feasibility and impact study
						about farmers&apos; livelihoods?” We partnered
						with “ E-commerce Platform “ to be a supplier
						for Shan Vegetables & Fruits and growers for the
						crops such as Pumpkin (Pyit Taing Htaung), Baby
						Kale and Sweet Violet Waxy Corn from East-West
						Seeds. For the finance, the team collected money
						from the core members to start its own field
						opera work and aimed to run as a social business
						in the region.
					</p>
					<p className="text-md lg:text-lg">
						&emsp;&emsp;&emsp;&emsp;We did not achieve all
						of our goals, but achieved some positive
						outcomes: the team could serve the Chayote &
						Kale farmers for market linkage, we conducted to
						improve the operation and expansion of the
						farmers&apos; market and explored new ideas to
						improve the socio economic development of farmer
						families in Shan.
					</p>
				</div>
				<hr className="mt-4" />
			</section>

			<section className="mx-4 sm:mx-8 lg:mx-16 bg-white">
				<motion.h3
					className="font-bold text-xl md:text-2xl text-center my-4 sm:my-4"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					Taungthutada - Farmers&apos; Bridge Team
				</motion.h3>
				<motion.p
					className="text-md lg:text-lg"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					&emsp;&emsp;&emsp;&emsp;We are a Value-chain
					Development Firm that aims to grow, transport &
					transform crops into sustainable responsible
					products and commodities in rural areas with
					small-holder farmers for the purpose of offering
					these high-quality products in Local, ASEAN, and
					international markets at a highly competitive
					price.
				</motion.p>
				<motion.p
					className="text-md lg:text-lg"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					&emsp;&emsp;&emsp;&emsp;Farmer Partnership Unit :
					The frontline of TTTD is the farmer partnership
					team, which will work with farmers to create
					partnerships for the production of crops and farm
					management plans. Many such partnerships and plans
					will promote climate-smart agriculture techniques,
					higher productivity, and group-based innovative
					approaches by combining traditional knowledge with
					contemporary agri-equipment, agri-inputs,
					agri-tech, and demand-driven contract farming to
					address current agricultural issues. With all
					tools, the FPT team delivers the solutions and
					innovations from TTTD in coordination with the
					agri-innovation team and handles all management
					necessary for a successful farming operation.
				</motion.p>
				<motion.p
					className="text-md lg:text-lg"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					&emsp;&emsp;&emsp;&emsp;Agri-innovation Unit : The
					backbone of TTTD is the agri-innovation team,
					which will create the unique methods, goods, and
					service models through research, design workshops,
					educational materials, and experimentation. This
					team focuses on creating local partnerships for
					the development of organic agricultural inputs,
					assuring high-quality inputs for our customers and
					promoting women&apos;s empowerment in our supply
					chain. Agronomists, innovators, designers,
					educators, and a variety of technical expertise
					make up the team, which collaborates with two
					other teams on market development,activation &
					sourcing and healthy partnership among
					stakeholders in farming communities.
				</motion.p>
				<motion.p
					className="text-md lg:text-lg"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					&emsp;&emsp;&emsp;&emsp;Market Development &
					Sourcing Unit : The market development & sourcing
					team is the face of the TTTD field force and
					partner farmers . They will devote their efforts
					to developing an efficient supply to meet the
					needs of our clients&apos; businesses and will
					employ business development and sales strategy to
					market the crops from the rural area. The team
					concentrates on the marketing and sales
					opportunities through various channels, developing
					long-term relationships of trust with clients,
					conducting research to identify new markets and
					consumer demands in coordination with the
					agri-innovation team, and ensuring the logistical
					management and facility hub for the harvested crop
					at the required time and amount with highest fresh
					quality.
				</motion.p>
				<motion.h3
					className="font-bold text-xl md:text-2xl text-center my-8 sm:my-4"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					Leadership & Management Team
				</motion.h3>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-3 gap-3"
					variants={container}
					initial="initial"
					whileInView="animate"
				>
					{[...new Array(3)].map((_, idx) => {
						return (
							<div
								key={idx}
								className="flex justify-center"
							>
								<MemberProfile
									name="San Nyunt"
									occupation="Chief Executive Officer"
									imageUrl={profileHolder}
									linkedIn="https://www.linkedin.com"
									email="email@taungthutada.com"
								/>
							</div>
						);
					})}
				</motion.div>
				<hr className="my-10" />
				<motion.h3
					className="font-bold text-xl md:text-2xl text-center my-8 sm:my-4"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					Operation Team
				</motion.h3>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-3 gap-3"
					variants={container}
					initial="initial"
					whileInView="animate"
				>
					{[...new Array(3)].map((_, idx) => {
						return (
							<div
								key={idx}
								className="flex justify-center"
							>
								<MemberProfile
									name="San Nyunt"
									occupation="Chief Executive Officer"
									imageUrl={profileHolder}
									linkedIn="https://www.linkedin.com"
									email="email@taungthutada.com"
								/>
							</div>
						);
					})}
				</motion.div>
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

export default OurStory;
