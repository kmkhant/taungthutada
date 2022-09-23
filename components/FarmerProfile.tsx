import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { farmerProfile } from "../variants";

interface FarmerProfileProps {
	img: any;
	name: string;
}

const FarmerProfile: React.FC<FarmerProfileProps> = ({
	img,
	name,
}) => {
	return (
		<motion.div
			className="flex flex-col justify-center"
			variants={farmerProfile}
		>
			<Image
				src={img}
				alt={"farmer profile"}
				width={100}
				height={100}
			/>
			<h3 className="font-semibold mt-3 text-center text-md lg:text-xl">
				{name}
			</h3>
		</motion.div>
	);
};

export default FarmerProfile;
