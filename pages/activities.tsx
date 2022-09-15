import { NextPage } from "next";
import React from "react";
import ActivitiyTimeline from "../components/ActivitiyTimeline";

const ActivitiesPage: NextPage = () => {
	return (
		<main>
			<section className="bg-midColor h-[350px] flex justify-center items-center">
				<div className="flex space-x-2">
					<div className="w-16 h-0.5 bg-white rounded-full mt-3"></div>
					<div className="sm:w-[600px]">
						<p className="text-white font-semibold">
							OUR GOAl
						</p>
						<p className="text-white text-sm">
							We strive to create a sustainable and
							inclusive solutions that are capable of
							mitigating climate risks, improving food
							security and safety, and ensuring livelihoods
							in Myanmar&apos;s agriculture.
						</p>
					</div>
				</div>
			</section>
			<section>
				<h3 className="font-bold text-lg sm:text-xl text-center my-12 sm:my-12">
					Activities in 2021
				</h3>
				{/* Timeline */}
				<ActivitiyTimeline />
			</section>
		</main>
	);
};

export default ActivitiesPage;
