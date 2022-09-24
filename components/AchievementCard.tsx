import React from "react";
import Image from "next/image";

import { IAchievementCard } from "../@types.taungthutada";

import { motion } from "framer-motion";

// import animation variants
import { slideIn } from "../variants";

const AchievementCard: React.FC<IAchievementCard> = ({
	title,
	description,
	imageHolder,
}) => {
	return (
		<motion.div className="bg-mainColor" variants={slideIn}>
			<div>
				<Image
					src={imageHolder}
					alt={"Iimage"}
					layout="responsive"
				/>
			</div>
			<div className="pt-4 pb-6">
				<h3 className="font-semibold text-white text-lg lg:text-xl text-center">
					{title}
				</h3>
				<p className="text-white text-center text-md lg:text-lg">
					{description}
				</p>
			</div>
		</motion.div>
	);
};

export default AchievementCard;
