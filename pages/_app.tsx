import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Suspense } from "react";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey="6LeQlg4iAAAAAIPjWgXoTSoCDBD8ggrKOPIeOKt1"
			scriptProps={{
				async: false,
				defer: false,
				appendTo: "head",
				nonce: undefined,
			}}
		>
			<StateContext>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</StateContext>
		</GoogleReCaptchaProvider>
	);
}

export default MyApp;
