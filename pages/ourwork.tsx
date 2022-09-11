import React from "react";
import { NextPage } from "next";
import ImageHolder from "../public/image_holder.svg";
import Image from "next/image";
import ReviewCard from "../components/ReviewCard";
import ProfileHolder from "../public/profile-holder.svg";

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

const Ourwork: NextPage = () => {
	return (
		<main>
			<section className="bg-mainColor h-[350px] flex justify-center items-center">
				<div className="flex space-x-2">
					<div className="w-16 h-0.5 bg-white rounded-full mt-3"></div>
					<div className="sm:w-[600px]">
						<p className="text-white font-semibold">
							OUR MISSION
						</p>
						<p className="text-white text-sm">
							Becoming impact-oriented value chain
							development firm and at the same time, to
							empower rural community members, women and
							youths through economic opportunities, and
							market access.
						</p>
					</div>
				</div>
			</section>
			<section className="mx-4 sm:mx-8 lg:mx-16  bg-white">
				<h3 className="font-bold text-lg sm:text-xl text-center my-12 sm:my-12">
					Our Achievements
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
					<div className="bg-mainColor">
						<div>
							<Image
								src={ImageHolder}
								alt={"Iimage"}
								layout="responsive"
							/>
						</div>
						<div className="pt-4 pb-6">
							<h3 className="font-semibold text-white text-lg text-center">
								Title
							</h3>
							<p className="text-white text-center text-sm">
								Description
							</p>
						</div>
					</div>
					<div className="bg-mainColor">
						<div>
							<Image
								src={ImageHolder}
								alt={"Iimage"}
								layout="responsive"
							/>
						</div>
						<div className="pt-4 pb-6">
							<h3 className="font-semibold text-white text-lg text-center">
								Title
							</h3>
							<p className="text-white text-center text-sm">
								Description
							</p>
						</div>
					</div>
					<div className="bg-mainColor">
						<div>
							<Image
								src={ImageHolder}
								alt={"Iimage"}
								layout="responsive"
							/>
						</div>
						<div className="pt-4 pb-6">
							<h3 className="font-semibold text-white text-lg text-center">
								Title
							</h3>
							<p className="text-white text-center text-sm">
								Description
							</p>
						</div>
					</div>
				</div>
				<div className="my-4">
					<h3 className="font-bold text-lg sm:text-xl text-center my-12 sm:my-12">
						Voice From the Farmers
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
					</div>
				</div>

				<div>
					<h3 className="font-bold text-lg sm:text-xl text-center my-12 sm:my-12">
						Our Value Chain Strategy
					</h3>
					<div className="flex justify-center flex-col sm:flex-row sm:space-x-4">
						<div className="flex flex-col justify-center">
							<Image
								src={InputShopImg}
								alt={"Input Shop Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-sm mt-4">
								Inputs Shop
							</p>
						</div>

						{/* Line */}
						<div className="hidden sm:flex items-center">
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</div>
						<div className="flex sm:hidden items-center justify-center my-4 sm:my-0">
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</div>

						<div className="flex flex-col justify-center">
							<Image
								src={SubstainablePartnerShip}
								alt={"Substainable Parnership"}
								width={80}
								height={80}
							/>
							<p className="text-center text-sm mt-4">
								Substainable Partnership
							</p>
						</div>
						{/* Line */}
						<div className="hidden sm:flex items-center">
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</div>
						<div className="flex sm:hidden items-center justify-center my-4 sm:my-0">
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</div>
						<div className="flex flex-col justify-center">
							<Image
								src={ContractFarming}
								alt={"Contract Farming Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-sm mt-4">
								Contract Farming
							</p>
						</div>
						{/* Line */}
						{/* Line */}
						<div className="hidden sm:flex items-center">
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</div>
						<div className="flex sm:hidden items-center justify-center my-4 sm:my-0">
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</div>
						<div className="flex flex-col justify-center">
							<Image
								src={RegionalMarket}
								alt={"Regional Market Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-sm mt-4">
								Regional Market
							</p>
						</div>
					</div>
				</div>
				<div>
					<h3 className="font-bold text-lg sm:text-xl text-center my-12 sm:my-12">
						Our Publication: Farm Record & Farmer Story
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
						<div>
							<Image
								src={BookCoverImg}
								alt={"taungthutada Book Cover"}
							/>
						</div>
						<div>
							<Image
								src={CalendarImg}
								alt={"taungthutada calendar"}
							/>
						</div>
						<div>
							<Image
								src={RecordImg}
								alt={"taungthutada record"}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Activities Section */}
			<section className="mx-4 sm:mx-8 lg:mx-16 py-2 sm:py-4 bg-white">
				<h3 className="font-bold text-lg sm:text-xl text-center my-12 sm:my-12">
					Latest Activities We&apos;ve Done
				</h3>
				<div className="flex justify-center">
					<Image
						src={ActivitiesImg}
						alt={"taungthutada team activites"}
					/>
				</div>
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

export default Ourwork;
