import React from "react";
import Image from "next/image";

interface VegetableCardProps {
	img: any;
	name: string;
}

const VegetableCard: React.FC<VegetableCardProps> = ({
	img,
	name,
}) => {
	return (
		<div className="flex flex-col justify-center">
			<Image src={img} alt={name} />
			<p className="text-center">{name}</p>
		</div>
	);
};

export default VegetableCard;
