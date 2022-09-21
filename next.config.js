/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["via.placeholder.com"],
	},
	i18n: {
		locales: ["en", "my"],
		defaultLocale: "en",
	},
};

module.exports = nextConfig;
