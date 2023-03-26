import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
interface ImpactCardProps {
	logo: IconDefinition;
	title: string;
	descriptions: string[];
}

const ImpactCard: React.FC<ImpactCardProps> = ({
	logo,
	title,
	descriptions,
}) => {
	return (
		<div className="flex justify-center">
			<div>
				<FontAwesomeIcon
					icon={logo}
					className="text-mainColor w-[50px]"
				/>
				<h3 className="text-lg font-bold my-2">{title}</h3>
				<ol className="list-disc ">
					{descriptions.map((data, idx) => {
						return <li key={idx}>{data}</li>;
					})}
				</ol>
			</div>
		</div>
	);
};

export default ImpactCard;
