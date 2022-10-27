import Head from "next/head";
import React from "react";

interface SEOProps {
	title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
	const titleText = `Taungthutada | ${title}`;
	return (
		<Head>
			<title>{titleText}</title>
			<meta
				name="description"
				content="Assisting farmers with the initial aim to increase the information access for farmers in Southern Shan State"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default SEO;
