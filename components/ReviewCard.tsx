import Image from "next/image";
import React from "react";

interface ReviewCardProps {
	imageUrl: string;
	name: string;
	description: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
	imageUrl,
	name,
	description,
}) => {
	return (
		<div className="bg-midColor p-2 bg-opacity-10 rounded-lg">
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
		</div>
	);
};

export default ReviewCard;
