import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../variants";

import { ReviewCardProps } from "../@types.taungthutada";

const ReviewCard: React.FC<ReviewCardProps> = ({
	imageUrl,
	name,
	description,
}) => {
	return (
		<motion.div
			className="bg-midColor p-4 bg-opacity-10 rounded-lg shadow-md"
			variants={fadeUp}
		>
			<p className="text-sm">{description}</p>
			<div className="flex space-x-2 mt-2">
				<Image
					src={imageUrl}
					alt={"Farmer Img"}
					width={20}
					height={20}
				/>
				<p className="text-sm font-bold">{name}</p>
			</div>
		</motion.div>
	);
};

export default ReviewCard;
