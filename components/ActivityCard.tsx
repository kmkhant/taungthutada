import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ActivityCardProps {
	title: string;
	description: string;
	image: any;
	slug: string;
	flip: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
	title,
	description,
	image,
	slug,
	flip,
}) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
			{!flip && (
				<div className="flex justify-start">
					<Image src={image} alt={"ttt"} />
				</div>
			)}
			<div className={`flex flex-col`}>
				<h3 className="font-bold text-md sm:text-lg ">
					{title}
				</h3>
				<p className="text-sm mt-4">{description}</p>
				<p className="my-4 text-sm font-bold cursor-pointer">
					<Link href={`/activities/detail/${slug}`}>
						<a>Learn More &nbsp;{`->`}</a>
					</Link>
				</p>
			</div>
			{flip && (
				<div className="flex justify-end">
					<Image src={image} alt={"ttt"} />
				</div>
			)}
		</div>
	);
};

export default ActivityCard;
