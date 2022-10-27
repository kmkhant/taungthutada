import React from "react";
import { NextPage } from "next";
import BackgroundImage from "../public/career/bg.jpg";
import Image from "next/image";
import SEO from "../components/SEO/SEO";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "../@types.taungthutada";

const CareerPage: NextPage = () => {
	return (
		<main>
			<SEO title="Career" />
			<section>
				<div>
					<Image
						src={BackgroundImage}
						alt={"farmer chilling photo"}
						layout="responsive"
					/>
					<div className="absolute top-[18%] md:top-[25%] lg:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
						<h1 className="text-3xl text-white md:text-6xl font-bold">
							Careers
						</h1>
					</div>
				</div>

				<p>Hi Mom and Dad</p>
			</section>
		</main>
	);
};

export const getServerSideProps = async ({
	locale,
}: ILocale) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default CareerPage;
