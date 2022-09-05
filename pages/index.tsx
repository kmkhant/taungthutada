import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroImg from "../public/hero-image.png";
import LeftLeaf from "../public/left-leaf.png";
import RightLeaf from "../public/right-leaf.png";
import ArrowDownward from "../public/arrow-downward.svg";
import SolvingWithFarmersImg from "../public/solving-with-farmers.png";
import ProfileHolder from "../public/profile-holder.svg";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
				<meta name="description" content="Home" />
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
						<div className={styles.center}>
							<h1 className="text-lg sm:text-6xl font-bold">
								Taungthutada, TTTD
							</h1>
							<h3 className="text-sm sm:text-xl mt-1 sm:mt-3 italic">
								&#8220; those who feed us, need us &#8221;
							</h3>
						</div>
					</div>
					<div className={styles.downwardArrow}>
						<div className="">
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
						<div className="hidden sm:block">
							<Image
								src={LeftLeaf}
								alt="left leaf"
								layout="intrinsic"
							/>
						</div>
						<div className="mx-8 sm:mx-16 lg:mx-32">
							<p className="text-sm font-light">
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
						</div>

						{/* ------------- Right Leaf ------------- */}
						<div className="hidden sm:block">
							<Image
								src={RightLeaf}
								alt="right leaf"
								layout="intrinsic"
							/>
						</div>
					</div>

					<div className="mt-10 mx-8 sm:mx-16 lg:mx-32">
						<Image
							src={SolvingWithFarmersImg}
							alt={"farmer smiling"}
							layout="responsive"
						/>
						<h1 className="text-white font-semibold mt-3">
							Solving Together With Farmers
						</h1>
						<div className="bg-white w-32 h-0.5 rounded-full mt-0.5"></div>
						<p className="text-white text-sm mt-4 font-light">
							Since the beginning, TTTD team wanted to go
							into fields and meet farmers, learn about
							their problems and solve them. Therefore, at
							the beginning of year 2020, the team put a
							question of “ What if we start the a field
							work in Taunggyi to do a feasibility and
							impact study about farmers&apos;
							livelihoods?”. We partnered with “ Farm Shop “
							to be a supplier for Shan Vegetables & Fruits
							and growers for the crops such as Pumpkin
							(Pyit Taing Htaung), Baby Kale and Sweet
							Violet Waxy Corn from East-West Seeds.
						</p>
					</div>
				</section>

				{/* Meet Farmers Section */}
				<section className="mx-8 sm:mx-16 lg:mx-32">
					<h1 className="font-bold text-center mt-8 text-lg sm:text-2xl">
						MEET OUR FARMERS
					</h1>
					<div className="flex mt-16 space-x-3"></div>
				</section>
			</main>
		</div>
	);
};

export default Home;
