import { NextApiRequest, NextApiResponse } from "next";
import SendmailTransport from "nodemailer/lib/sendmail-transport";
export default function contactHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// console.log(req.body);
	if (req.method === "POST") {
		try {
			return fetch(
				"https://www.google.com/recaptcha/api/siteverify",
				{
					method: "POST",
					headers: {
						"Content-Type":
							"application/x-www-form-urlencoded",
					},
					body: `secret=${process.env.reCAPCHA_secret}&response=${req.body.gReCaptchaToken}`,
				}
			)
				.then((reCaptchaRes) => reCaptchaRes.json())
				.then((reCaptchaRes) => {
					// console.log(
					// 	reCaptchaRes,
					// 	"Response from Google reCaptcha verification API"
					// );
					if (reCaptchaRes?.score > 0.5) {
						// Save data to the database from here
						// console.log(name, email, message);
						let nodemailer = require("nodemailer");
						const transporter = nodemailer.createTransport({
							port: 465,
							host: "smtp.titan.email",
							auth: {
								user: process.env.contactbot_user,
								pass: process.env.contactbot_pass,
							},
							secure: true,
						});

						// prepare mailData
						const mailData = {
							from: process.env.contactbot_user,
							to: process.env.contactrequests_user,
							subject: `Message From ${req.body.name}`,
							text:
								req.body.message +
								" | Sent from: " +
								req.body.email,
							html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
						};

						// transporterConfiguration
						transporter.sendMail(
							mailData,
							function (
								err: Error | null,
								info: SendmailTransport.SentMessageInfo
							) {
								if (err) {
									// throw new Error(err.message);
									console.log(err);
									res.status(405).json({
										status: "failure",
										message:
											"Error Submitting the contact form",
									});
								} else {
									// console.log(info);
									res.status(200).json({
										status: "success",
										message:
											"Request submitted successfully",
									});
								}
							}
						);
					} else {
						res.status(200).json({
							status: "failure",
							message: "Google ReCaptcha Failure",
						});
					}
				});
		} catch (err) {
			res.status(405).json({
				status: "failure",
				message: "Error Submitting the contact form",
			});
		}
	} else {
		res.status(405);
		res.end();
	}
}

// use this config to eliminate false warning
// but make sure you send response back in every
// case
export const config = {
	api: {
		externalResolver: true,
	},
};
