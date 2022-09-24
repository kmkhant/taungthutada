import { NextPage } from "next";
import Image from "next/image";
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

const OurStory: NextPage = () => {
	return (
		<main>
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
								OUR VISION
							</motion.p>
						</div>

						<div className="overflow-hidden inline-block">
							<motion.p
								className="text-white text-md lg:text-lg"
								variants={fadeUp}
							>
								Towards sustainable inclusive business for
								farmers&apos; livelihoods and food security
								of rural people in Myanmar.
							</motion.p>
						</div>
					</motion.div>
				</div>
			</section>
			<section className="mx-4 sm:mx-8 lg:mx-16 bg-white">
				<div className="flex justify-center mt-8">
					<motion.div
						variants={scaleUp}
						initial="initial"
						whileInView="animate"
					>
						<Image
							src={Logo}
							alt={"logo"}
							width={220}
							height={220}
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
						Taungthutada - TTTD was started in September,
						2019 with the initial aim to increase the
						information access for farmers in Southern Shan
						State. With the belief of “ Those who feed us,
						need us”, we started working on the idea by
						meeting through chit-chat over coffee on
						Saturdays and online discussions at night. Since
						then, TTTD has created a Facebook Page, talked
						to and conducted research for farmers, and
						created agri information contents in an easy
						language for the Shan Farmers. In three month,
						the team has participated at ASEAN level boot
						camp and we have served over 50 farmers through
						messenger chat and phone call and published 33
						educational posts for garlic farmers.
					</motion.p>
					<br />
					<motion.p
						className="text-md lg:text-lg"
						variants={fade}
						initial="initial"
						whileInView="animate"
					>
						Since the beginning, TTTD team wanted to go into
						fields and meet farmers, learn about their
						problems and solve them with the concept of
						<br /> “ Solving Together With Farmer -{" "}
						<span className="font-pyidaungsu">
							တောင်သူများနှင့်အတူပူးပေါင်းဖြေရှင်းခြင်း
						</span>
						”
						<br />
						<br />
						Therefore, at the beginning of year 2020, the
						team put a question of “ What if we start the a
						field work in Taunggyi to do a feasibility and
						impact study about farmers&apos; livelihoods?”
						<br />
						<br />
						We partnered with “ Farm Shop “ to be a supplier
						for Shan Vegetables & Fruits and growers for the
						crops such as Pumpkin (Pyit Taing Htaung), Baby
						Kale and Sweet Violet Waxy Corn. For the
						finance, the team collected money from the core
						members to start its own field work and aimed to
						run as a social business in the region.
						<br />
						<br />
						In the past two years, we did not achieve all of
						our goals, but achieved some positive outcomes:
						the team could serve the Chayote & Kale farmers
						for market linkage, online channel reached over
						15k users, and we conducted to improve the
						operation and expansion of the farmers&apos;
						market and explored new ideas to improve the
						socio economic development of farmer families in
						Shan. <br />
						<br />
						Due to consequences of February Coup in Myanmar,
						the TTTD put total efforts to provide assistance
						interventions to help farmers with partners and
						listen their changing needs in order to stay on
						cause, to innovate and sustain during this very
						difficult times. There were some projects which
						focused on the providing the critical needs and
						to bring up the farmers&apos; motivation by
						providing training.
					</motion.p>
				</div>
				<hr className="mt-4" />
			</section>

			<section className="mx-4 sm:mx-8 lg:mx-16 bg-white">
				<motion.h3
					className="font-bold text-xl md:text-2xl text-center my-4 sm:my-4"
					variants={fadeUp}
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
					Taungthudata(TTTD) is a social business formed by
					young entrepreneurs and farmers that supports the
					families in Southern Shan State to help increasing
					their incomes.TTTD is dedicated to bridge the gaps
					between farmers and farm markets by resolving
					problems together with the farmers.
				</motion.p>
				<motion.h3
					className="font-bold text-lg sm:text-xl text-center my-4 sm:my-8"
					variants={fadeUp}
					initial="initial"
					whileInView="animate"
				>
					Our Members
				</motion.h3>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-3 gap-3"
					variants={container}
					initial="initial"
					whileInView="animate"
				>
					{[...new Array(9)].map((_, idx) => {
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

export default OurStory;
