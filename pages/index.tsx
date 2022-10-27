import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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

// Intersection Observer

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
								All of us are primarily from farming
								families and eager to serve the farmers as
								much as we can.
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

						<motion.div
							variants={fadeUp}
							initial="initial"
							whileInView="animate"
						>
							<h1 className="text-white font-semibold mt-3 text-md lg:text-2xl">
								Solving Together With Farmers
							</h1>
							<div className="bg-white w-32 h-0.5 rounded-full mt-0.5"></div>
							<p className="text-white text-sm lg:text-xl mt-4 font-light">
								Since the beginning, TTTD team wanted to go
								into fields and meet farmers, learn about
								their problems and solve them. Therefore, at
								the beginning of year 2020, the team put a
								question of “ What if we start the a field
								work in Taunggyi to do a feasibility and
								impact study about farmers&apos;
								livelihoods?”. We partnered with “ Farm Shop
								“ to be a supplier for Shan Vegetables &
								Fruits and growers for the crops such as
								Pumpkin (Pyit Taing Htaung), Baby Kale and
								Sweet Violet Waxy Corn from East-West Seeds.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Meet Farmers Section */}
				<section className="mx-4 sm:mx-8 lg:mx-16 pb-8 sm:pb-32">
					<motion.h1
						className="font-bold text-center mt-8 text-lg sm:text-2xl"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					>
						MEET OUR FARMERS
					</motion.h1>
					<motion.div
						className="flex flex-col sm:flex-row mt-8 space-y-10 sm:space-y-0 sm:space-x-10 justify-center"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<FarmerProfile
							img={ProfileHolder}
							name="U Sai Moe Shwe"
						/>
						<FarmerProfile
							img={ProfileHolder}
							name="Daw Nan Li"
						/>
						<FarmerProfile
							img={ProfileHolder}
							name="U Sai Han"
						/>
						<FarmerProfile
							img={ProfileHolder}
							name="U Kyaw Thu"
						/>
					</motion.div>

					<motion.div
						className="mt-8"
						variants={fade}
						initial="initial"
						whileInView="animate"
					>
						<p className="text-center mx-8 sm:mx-32 text-sm lg:text-xl">
							Taungthutada has improved the farm conditions
							of the farmers in the past 3 years and
							increased the income of the farmers by 30%.
							Taungthutada has improved the farm conditions
							of the farmers in the past 3 years and
							increased the income of the farmers by 30%.
						</p>
					</motion.div>

					<motion.div
						className="mt-8 border-dashed border-black border-2 rounded-lg pb-8"
						variants={fade}
						initial="initial"
						whileInView="animate"
					>
						<h3 className="font-bold text-center my-4 text-xl lg:text-2xl sm:text-2xl">
							We offer a wide range <br />
							of services for
						</h3>
						<div className="mt-8 mx-16">
							<Swiper
								spaceBetween={50}
								modules={[Pagination]}
								pagination={{
									dynamicBullets: true,
									clickable: true,
								}}
								breakpoints={{
									800: {
										slidesPerView: 3,
									},
									0: {
										slidesPerView: 1,
									},
								}}
							>
								<SwiperSlide>
									<VegetableCard
										img={Potato}
										name={"Potato"}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<VegetableCard
										img={Chilli}
										name={"Chilli"}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<VegetableCard
										img={SweetPotato}
										name={"Sweetpotato"}
									/>
								</SwiperSlide>
								<SwiperSlide>
									<VegetableCard
										img={SweetPotato}
										name={"Sweetpotato"}
									/>
								</SwiperSlide>
							</Swiper>
						</div>

						<div className="">
							<h3 className="font-bold text-center my-4 text-xl lg:text-2xl">
								Our Services
							</h3>

							<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-3 mx-8 lg:mx-32 justify-between">
								<div>
									<h6 className="font-semibold text-center text-xl lg:text-2xl mt-4 sm:mt-0">
										Farmer Partner
									</h6>
									<ul className="list-disc mt-4 space-y-5 text-md lg:text-xl">
										<li>Farm Consultation</li>
										<li>Farmers Cluster Support</li>
										<li>Market Information Advisory</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-center text-xl lg:text-2xl mt-4 sm:mt-0">
										Field Partner
									</h6>
									<ul className="list-disc mt-4 text-md lg:text-xl space-y-5">
										<li>Inputs Coordination & Sale</li>
										<li>
											Operation & Agronomist Outsourcing
										</li>
										<li>
											Field Data Collection & Analysis
										</li>
										<li>Contract Farming</li>
									</ul>
								</div>
								<div>
									<h6 className="font-semibold text-center text-xl lg:text-2xl mt-4 sm:mt-0">
										Capacity Development
									</h6>
									<ul className="list-disc mt-4 text-md lg:text-xl space-y-5">
										<li>Women Empowerment Program</li>
										<li>Agri Startup Support</li>
									</ul>
								</div>
							</div>
						</div>
					</motion.div>

					<div className="relative sm:absolute left-0 right-0 mx-auto">
						<div className="flex justify-center mt-16">
							<div className="w-[370px] sm:w-[600px] lg:w-[800px] bg-white rounded-xl drop-shadow-lg p-10">
								<h3 className="font-bold text-center my-2 text-xl lg:text-2xl sm:text-2xl">
									We&apos;ve Completed
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
									<div className="">
										<h3 className="font-bold text-center my-4 text-lg sm:text-2xl">
											<CountUp
												start={0}
												end={6}
												duration={2}
												enableScrollSpy
											>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>{" "}
											Projects
										</h3>
										<p className="text-center">
											in Success
										</p>
									</div>
									<div className="">
										<h3 className="font-bold text-center my-4 text-lg sm:text-2xl">
											<CountUp
												start={0}
												end={3}
												duration={2}
												enableScrollSpy
											>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>{" "}
											+ Years
										</h3>
										<p className="text-center">
											in Service
										</p>
									</div>
									<div className="">
										<h3 className="font-bold text-center my-4 text-lg sm:text-2xl">
											<CountUp
												start={0}
												end={2000}
												duration={2}
												enableScrollSpy
											>
												{({ countUpRef }) => (
													<span ref={countUpRef} />
												)}
											</CountUp>{" "}
											+ Happy
										</h3>
										<p className="text-center">Farmers</p>
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

				{/* Sustainability & Social Impacts */}
				<section className="mx-4 sm:mx-8 lg:mx-16 py-4 sm:py-8">
					<div className="flex space-x-10 border-dashed border-2 border-black rounded-lg p-8">
						<div>
							<h3 className="font-bold text-xl sm:text-2xl">
								Substainability &<br />
								Social Impacts
							</h3>
							<p className="lg:mt-4 text-md lg:text-xl">
								Amet minim mollit non deserunt ullamco est
								sit aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.
								Exercitation veniam consequat sunt nostrud
								amet.
							</p>
						</div>
						<div className="grow">
							<Image
								src={SimilingFarmerImg}
								alt={"happy farmer"}
							/>
						</div>
					</div>
				</section>

				{/* Previous Projects */}
				<section className="mx-4 sm:mx-8 lg:mx-16 py-2 sm:py-4">
					<h3 className="font-semibold mb-8 text-xl lg:text-2xl">
						Previous Projects
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
