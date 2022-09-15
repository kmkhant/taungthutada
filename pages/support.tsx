import { NextPage } from "next";
import React from "react";

const SupportPage: NextPage = () => {
	return (
		<main>
			<section className="bg-midColor h-[350px] flex justify-center items-center">
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
		</main>
	);
};

export default SupportPage;
