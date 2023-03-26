import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

/* import styles */
import styles from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/pagination";

/* import components */
import FarmerProfile from "../components/FarmerProfile";
import VegetableCard from "../components/VegetableCard";

/* import Images */
import HeroImg from "../public/hero-image.png";
import LeftLeaf from "../public/left-leaf.png";
import RightLeaf from "../public/right-leaf.png";
import ArrowDownward from "../public/arrow-downward.svg";
import SolvingWithFarmersImg from "../public/solving-with-farmers.png";
import ProfileHolder from "../public/profile-holder.svg";
import Potato from "../public/potato.png";
import Chilli from "../public/chilli.png";
import SweetPotato from "../public/sweet-potato.png";
import SimilingFarmerImg from "../public/smiling-farmer.png";
import ProjectHolderImg from "../public/projectHolder.png";
import ProjectCard from "../components/ProjectCard";
import ReviewCard from "../components/ReviewCard";

// language data
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "../@types.taungthutada";

// framer motion
import { motion } from "framer-motion";

// variants
import {
	leftLeaf,
	rightLeaf,
	fadeUp,
	fade,
	container,
	fadeUpDelay,
} from "../variants";

// Count-Up
import CountUp from "react-countup";
import ImpactCard from "../components/Cards/ImpactCard";
import {
	faUsers,
	faEarthAsia,
	faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

// Intersection Observer

const impactData = [
	{
		logo: faUsers,
		title: "Impact Community & Space",
		descriptions: [
			"Membership",
			"Community Events",
			"Coworking Space",
			"Venue Rental",
		],
	},
	{
		logo: faEarthAsia,
		title: "Impact Solutions & Consultation",
		descriptions: [
			"Program Design",
			"ESG Advisory",
			"Board of Directors ESG Training",
			"Impact Solution Sourcing for Corporates",
			"Impact Measurements for ESG Integration",
		],
	},
	{
		logo: faSackDollar,
		title: "Impact Community & Space",
		descriptions: [
			"Investment Readiness Program",
			"Investment Matching",
			"Impact Investment Education",
		],
	},
];

const Home: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<div>
			<Head>
				<title>{t("hero.title")}</title>
				<meta
					name="description"
					content="Assisting farmers with the initial aim to increase the information access for farmers in Southern Shan State"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{/* ------------- Hero Image Section ------------- */}
				<section className={styles.heroContainer}>
					<Image
						src={HeroImg}
						alt="hero image"
						style={{ visibility: "hidden" }}
					/>

					<div className={styles.absolute}>
						<motion.div
							className={styles.center}
							animate={{
								transition: {
									staggerChildren: 3,
								},
							}}
						>
							<div className="overflow-hidden inline-block p-4">
								<motion.h1
									className="text-lg sm:text-6xl font-bold"
									variants={fadeUp}
									initial="initial"
									whileInView="animate"
								>
									{t("hero.title")}
								</motion.h1>
							</div>
							<br />
							<div className="inline-block p-1 ">
								<motion.h3
									className="text-sm sm:text-xl font-light italic"
									variants={fadeUpDelay}
									initial="initial"
									whileInView="animate"
								>
									&#8220;Connecting community of rural
									farmers to profitable markets&#8221;
								</motion.h3>
							</div>
							<div className="inline-block p-1 ">
								<motion.h3
									className="text-sm sm:text-xl font-light italic"
									variants={fadeUpDelay}
									initial="initial"
									whileInView="animate"
								>
									&#8220;those who feed us, need us&#8221;
								</motion.h3>
							</div>
						</motion.div>
					</div>
					<div className={styles.downwardArrow}>
						<div className="hidden sm:block sm:animate-bounce">
							<Image
								src={ArrowDownward}
								alt="to next section arrow"
								width={30}
							/>
						</div>
					</div>
				</section>

				{/* ------------- Description Section ------------- */}
				<section className="bg-sectionColor pb-16">
					{/* ------------- Description ------------- */}
					<div className="flex justify-between items-center text-white text-sm sm:text-md">
						{/* ------------- Left Leaf ------------- */}
						<motion.div
							className="hidden sm:block"
							variants={leftLeaf}
							initial="initial"
							whileInView="animate"
							viewport={{ once: false, amount: 0.6 }}
						>
							<Image
								src={LeftLeaf}
								alt="left leaf"
								layout="intrinsic"
							/>
						</motion.div>
						<motion.div
							className="mx-8 sm:mx-16 lg:mx-32"
							variants={fadeUp}
							initial="initial"
							whileInView="animate"
							viewport={{ once: false, amount: 0.6 }}
						>
							<p className="text-sm lg:text-xl font-light">
								Taungthutada &#x28;
								<span className="font-pyidaungsu">
									တောင်သူ့တံတား
								</span>
								&#x29; was started in September, 2019 with
								the initial aim to increase the information
								access for farmers in Southern Shan State.
								The team did pivot along the way to adapt
								the situation and was empowered by many
								people(farmers, women and youths) and
								organizations.
							</p>
						</motion.div>

						{/* ------------- Right Leaf ------------- */}
						<motion.div
							className="hidden sm:block"
							variants={rightLeaf}
							initial="initial"
							whileInView="animate"
							viewport={{ once: false, amount: 0.6 }}
						>
							<Image
								src={RightLeaf}
								alt="right leaf"
								layout="intrinsic"
							/>
						</motion.div>
					</div>

					<div className="mt-10 mx-8 sm:mx-16 lg:mx-32">
						<motion.div
							variants={fade}
							initial="initial"
							whileInView="animate"
						>
							<Image
								src={SolvingWithFarmersImg}
								alt={"farmer smiling"}
								layout="responsive"
							/>
						</motion.div>
					</div>
				</section>
				<section className="mx-4 sm:mx-8 lg:mx-16 pb-4 sm:pb-8">
					<h3 className="font-bold text-center my-4 text-xl lg:text-2xl">
						We were trying to be resilient and sustainable.
					</h3>
					<p className="text-md">
						&emsp;&emsp;&emsp;&emsp;Farmer Difficulties;
						Input Access / Unstable Market Price / Trustful
						Sale Channel To help solving the farmers&apos;
						difficulties, TTTD need to transform as a
						business entity which is sustainable, resilient,
						efficient in order to be a long-term partner of
						farmers to run the farming business together.
						Therefore, it is to provide the solutions; form
						them as cluster and provide management solution
						and market access.
						<br />
						&emsp;&emsp;&emsp;&emsp;As business plan, TTTD
						will engage with agriculture inputs companies,
						traders and exporters to create revenue and to
						expand the market access for farmers and
						customer base for input sale.
					</p>
				</section>

				<section className="mx-4 sm:mx-8 lg:mx-16 pb-8 sm:pb-32">
					<div className="relative sm:absolute left-0 right-0 mx-auto">
						<div className="flex justify-center mt-16">
							<div className="w-[370px] sm:w-[600px] lg:w-[800px] bg-white rounded-xl drop-shadow-lg p-10">
								<h3 className="font-bold text-center my-2 text-xl lg:text-2xl sm:text-2xl">
									Since inception in 2017, Dream Impact has
									supported
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
									<div className="">
										<h3 className="font-bold text-center my-4 text-lg sm:text-4xl text-gray-700">
											<CountUp
												start={0}
												end={157}
												duration={1.5}
												enableScrollSpy
											>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>{" "}
										</h3>
										<p className="text-center text-sm">
											Social Purpose Organizations
										</p>
									</div>
									<div className="">
										<h3 className="font-bold text-center my-4 text-lg sm:text-4xl text-gray-700">
											<CountUp
												start={0}
												end={3500}
												duration={2}
												enableScrollSpy
											>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>
											{"+"}
										</h3>
										<p className="text-center">
											Impact Events
										</p>
									</div>
									<div className="">
										<h3 className="font-bold text-center my-4 text-lg sm:text-4xl text-gray-700">
											<CountUp
												start={0}
												end={50000}
												duration={2}
												enableScrollSpy
											>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>
											{"+"}
										</h3>
										<p className="text-center">
											Participants
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* -------- Strategy -------- */}
				<section className="bg-sectionColor p-4 sm:p-16">
					<motion.div
						className="mt-2 sm:mt-28"
						variants={fade}
						initial="initial"
						whileInView="animate"
					>
						<h3 className="font-bold text-center my-4 text-xl sm:text-2xl text-white">
							Strategy Towards 2021 Inputs Crisis
						</h3>
						<p className="text-center text-white text-md lg:text-xl">
							Due to COVID-19 restrictions, farmers were not
							able to go to the suppliers to buy inputs.
							Moreover, the consequences of February coup
							made the price of inputs doubled and more
							highed because of the difficult logistic, out
							of stock and the cash problem. And retailers
							didn&apos;t want to pay farmers with credit
							and not also able to sell required amounts.
							TTTD initiated “ TTTD Input Coordination”, to
							facilitate the situation and help farmers with
							the investment from HEKS/EPER Myanmar.
						</p>
					</motion.div>

					<div className="mt-8 mx-32">
						<motion.div
							className="flex justify-center space-x-16 sm:space-x-32 lg:space-x-64"
							variants={container}
							initial="initial"
							whileInView="animate"
						>
							<motion.div
								className="flex flex-col justify-center"
								variants={fadeUp}
							>
								<Image
									src={ProfileHolder}
									alt={"strategy icon"}
									width={100}
									height={100}
								/>
								<h3 className="font-bold text-center my-4 text-md sm:text-lg text-white">
									Bulk Sales <br />
									Opportunity
								</h3>
							</motion.div>
							<motion.div
								className="flex flex-col justify-center"
								variants={fadeUp}
							>
								<Image
									src={ProfileHolder}
									alt={"strategy icon"}
									width={100}
									height={100}
								/>
								<h3 className="font-bold text-center my-4 text-md sm:text-lg text-white">
									Technical <br />
									Assistance
								</h3>
							</motion.div>
						</motion.div>
						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUpDelay}
							initial="initial"
							whileInView="animate"
						>
							<Image
								src={ProfileHolder}
								alt={"strategy icon"}
								width={100}
								height={100}
							/>
							<h3 className="font-bold text-center my-4 text-md sm:text-lg text-white">
								No interest <br />
								Bearing
							</h3>
						</motion.div>
					</div>
				</section>
				<section className="mx-4 sm:mx-8 lg:mx-16 py-4 sm:py-8">
					<div className="flex justify-center">
						<div>
							<h3 className="font-bold text-xl lg:text-2xl text-center">
								Our 3 pillars of work{" "}
								<span className="text-mainColor">
									for collective impact
								</span>
							</h3>
							<div className="grid grid-cols-3 mt-8 gap-4">
								{impactData.map((data, idx) => {
									return (
										<div key={idx}>
											<ImpactCard
												logo={data.logo}
												title={data.title}
												descriptions={data.descriptions}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				{/* What Farmers Says */}
				<section className="mx-4 sm:mx-8 lg:mx-16 py-2 sm:py-4">
					<h3 className="font-bold text-xl sm:text-2xl text-center">
						What Farmers Say About Us
					</h3>

					<motion.div
						className="mt-2 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
				</section>
				{/* Previous Projects */}
				<section className="mx-4 sm:mx-8 lg:mx-16 py-2 sm:py-4">
					<h3 className="font-semibold mb-8 text-xl lg:text-2xl">
						Latest Blogs
					</h3>
					{/* Swiper HERE */}
					<Swiper
						spaceBetween={50}
						modules={[Pagination]}
						pagination={{
							dynamicBullets: true,
							clickable: true,
						}}
						slidesPerView={1}
					>
						<SwiperSlide>
							<ProjectCard
								image={ProjectHolderImg}
								title={
									"Onion Plantations using latest technologies"
								}
								date={"October 19, 2021"}
								description={
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum suscipit vehicula. Curabitur hendrerit mi a auctor ornare. Nullam vitae"
								}
							/>
						</SwiperSlide>

						<SwiperSlide>
							<ProjectCard
								image={ProjectHolderImg}
								title={
									"Onion Plantations using latest technologies"
								}
								date={"October 19, 2021"}
								description={
									"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. "
								}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ProjectCard
								image={ProjectHolderImg}
								title={
									"Onion Plantations using latest technologies"
								}
								date={"October 19, 2021"}
								description={
									"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. "
								}
							/>
						</SwiperSlide>
					</Swiper>
				</section>
			</main>
		</div>
	);
};

export const getStaticProps = async ({
	locale,
}: ILocale) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default Home;
