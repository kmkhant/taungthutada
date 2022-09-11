import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import FacebookIcon from "../public/social/facebook.svg";
import LinkedInIcon from "../public/social/linkedin.svg";

const Footer: React.FC = () => {
	return (
		<footer className="mx-4 sm:mx-8 lg:mx-16 py-2 sm:py-4">
			<div className="flex flex-col sm:flex-row justify-between">
				<div className="flex flex-col justify-center">
					<div className="flex justify-center">
						<Image
							src={Logo}
							alt={"TTTD Logo"}
							height={60}
							width={60}
						/>
					</div>

					<div className="flex mt-2 justify-center space-x-2">
						<div>
							<a href="https://www.facebook.com/">
								<Image
									src={FacebookIcon}
									alt={"facebook"}
									width={20}
									height={20}
								/>
							</a>
						</div>
						<div>
							<a href="https://www.linkedin.com">
								<Image
									src={LinkedInIcon}
									alt={"linkedin"}
									width={20}
									height={20}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-md text-gray-800 text-center">
					Copyright &copy; - Taungthutada 2022
				</h3>
			</div>
		</footer>
	);
};

export default Footer;
