import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { appWithTranslation } from "next-i18next";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";

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

export default appWithTranslation(MyApp);
