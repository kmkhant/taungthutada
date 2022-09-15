import Image from "next/image";
import React from "react";

import linkedInIcon from "../public/social/linkedin.svg";
import emailIcon from "../public/social/email.svg";
interface MemberProfileProps {
	name: string;
	occupation: string;
	imageUrl: any;
	linkedIn: string;
	email: string;
}

const MemberProfile: React.FC<MemberProfileProps> = ({
	name,
	occupation,
	imageUrl,
	linkedIn,
	email,
}) => {
	return (
		<div className="">
			<Image
				src={imageUrl}
				alt={`${name}'s profile`}
				width={200}
				height={200}
			/>

			<h3 className="mt-3 text-lg font-bold">{name}</h3>
			<p className="text-gray-800 italic">{occupation}</p>
			<div className="flex mt-3 space-x-2">
				<a href={linkedIn} target="_blank" rel="noreferrer">
					<Image
						src={linkedInIcon}
						alt={"linkedIn icon taungthutada"}
						width={25}
						height={25}
					/>
				</a>
				<a href={`mailto:${email}`}>
					<Image
						src={emailIcon}
						alt={"email icon taungthutada"}
						width={25}
						height={25}
					/>
				</a>
			</div>
		</div>
	);
};

export default MemberProfile;
