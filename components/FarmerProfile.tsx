import React from "react";
import Image from "next/image";

interface FarmerProfileProps {
	img: any;
	name: string;
}

const FarmerProfile: React.FC<FarmerProfileProps> = ({
	img,
	name,
}) => {
	return (
		<div className="flex flex-col justify-center">
			<Image
				src={img}
				alt={"farmer profile"}
				width={100}
				height={100}
			/>
			<h3 className="font-semibold mt-3 text-center">
				{name}
			</h3>
		</div>
	);
};

export default FarmerProfile;
