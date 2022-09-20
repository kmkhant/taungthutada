import React from "react";
import Image from "next/image";

interface ProjectCardProps {
	image: any;
	title: string;
	date: string;
	description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	image,
	title,
	date,
	description,
}) => {
	return (
		<div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4">
			<div className="flex justify-center sm:justify-end">
				<Image
					src={image}
					alt={"project"}
					width={250}
					height={250}
					className="rounded-md"
				/>
			</div>
			<div className="sm:col-span-2 mt-4 sm:mt-0 ">
				<h3 className="font-bold text-lg sm:text-lg lg:text-2xl">
					{title}
				</h3>
				<p className="text-md lg:text-lg text-gray-800 mt-1">
					{date}
				</p>
				<p className="text-md lg:text-lg mt-2">
					{description}
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
