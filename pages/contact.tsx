import { NextPage } from "next";
import React, {
	useState,
	useRef,
	useCallback,
} from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { motion } from "framer-motion";
import { fadeUp, container, fade } from "../variants";

const ContactPage: NextPage = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const [isNameValid, setIsNameValid] =
		useState<boolean>(true);
	const [isEmailValid, setIsEmailValid] =
		useState<boolean>(true);

	// configure status
	const [loading, setLoading] = useState<boolean>(false);
	const [status, setStatus] = useState<string>("SEND");

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	// configure reCAPCHA
	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleSubmitForm = useCallback(
		(
			e: React.MouseEvent<HTMLButtonElement, MouseEvent>
		) => {
			e.preventDefault();

			if (!executeRecaptcha) {
				console.log("Execute reCAPTCHA not yet available");
				return;
			}

			executeRecaptcha("enquiryFormSubmit").then(
				(greCaptchaToken) => {
					// console.log(
					// greCaptchaToken,
					// " response Google reCaptcha server"
					// );
					submitEnquiryForm(greCaptchaToken);
				}
			);
		},
		[executeRecaptcha]
	);

	const submitEnquiryForm = (gReCaptchaToken: string) => {
		if (
			nameRef.current &&
			emailRef.current &&
			messageRef.current
		) {
			let data = {
				name: nameRef.current.value,
				email: emailRef.current.value,
				message: messageRef.current.value,
				gReCaptchaToken: gReCaptchaToken,
			};

			// cleanup
			nameRef.current.value = "";
			emailRef.current.value = "";
			messageRef.current.value = "";

			setStatus("SENDING...");
			setLoading(true);

			fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((res: Response) => {
					return res.json();
				})
				.then((res) => {
					// clean up and inform
					setStatus("Submitted");
					console.log(res);
					setStatus(res.message);
				})
				.catch((err) => {
					console.log("ERROR");
					setStatus("Oops, Something Went Wrong!");
				});
		}
	};

	const handleNameChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setName(e.target.value);
		if (nameRef.current) {
			let nameValue = nameRef.current.value;
			const nameRegex = new RegExp(/^[A-Za-z\s]+$/);
			if (nameRegex.test(nameValue)) setIsNameValid(true);
			else setIsNameValid(false);
			// console.log(isNameValid);
		}
	};

	const handleEmailChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setEmail(e.target.value);
		if (emailRef.current) {
			let emailValue = emailRef.current.value;
			const emailRegex = new RegExp(
				/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
			);
			if (emailRegex.test(emailValue))
				setIsEmailValid(true);
			else setIsEmailValid(false);
		}
	};

	const handleMessageChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setMessage(e.target.value);
	};

	// console.log("RENDER");

	return (
		<main>
			<section className="bg-midColor h-[350px] flex justify-center items-center">
				<div className="flex space-x-2">
					<motion.div
						className="w-16 h-0.5 bg-white rounded-full mt-3"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					></motion.div>
					<motion.div
						className="sm:w-[600px]"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<motion.p
							className="text-white font-semibold text-xl lg:text-2xl"
							variants={fadeUp}
						>
							OUR MISSION
						</motion.p>
						<motion.p
							className="text-white text-md lg:text-lg"
							variants={fadeUp}
						>
							Becoming impact-oriented value chain
							development firm and at the same time, to
							empower rural community members, women and
							youths through economic opportunities, and
							market access.
						</motion.p>
					</motion.div>
				</div>
			</section>
			<section className="mx-4 sm:mx-8 lg:mx-16 bg-white h-[1000px] pt-3">
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 gap-3"
					variants={fade}
					initial="initial"
					whileInView="animate"
				>
					<div>
						<div>
							<h3 className="font-bold text-lg sm:text-xl mt-4 mb-1">
								TAUNGGYI
							</h3>
							<p className="text-md lg:text-lg">
								No-102 Innyar St, TAUNGGYI, Shan, Myanmar
							</p>
						</div>
						<div>
							<h3 className="font-bold text-lg sm:text-xl mt-4 mb-1">
								Contact Us
							</h3>

							<p className="text-md lg:text-lg">
								Phone : +959123456789
							</p>
							<p className="text-md lg:text-lg">
								{" "}
								Email : support@taungthutada.com
							</p>
						</div>
					</div>
					<div>
						<h3 className="font-bold text-xl sm:text-2xl mt-4 mb-1">
							Get In Touch
						</h3>
						<p className="text-md lg:text-lg">
							Write your message here and our team will
							contact you very soon.
						</p>
						<form>
							<input
								type="text"
								className={`bg-gray-50 border outline-none ${
									isNameValid
										? "border-gray-300 focus:border-midColor"
										: "border-red-500 focus:border-red-500"
								} text-gray-900 text-sm rounded-lg block w-full p-2.5 transition-all duration-300 
								my-2`}
								placeholder="Your Name"
								ref={nameRef}
								onChange={handleNameChange}
								required
							/>
							{!isNameValid && (
								<p className="text-sm text-red-500">
									Invalid Name
								</p>
							)}
							<input
								type="email"
								className={`bg-gray-50 border ${
									isEmailValid
										? "border-gray-300 focus:border-midColor"
										: "border-red-500 focus:border-red-500"
								} outline-none focus:border-midColor text-gray-900 text-sm rounded-lg block w-full p-2.5 transition-all duration-300 my-2`}
								placeholder="Your Email"
								ref={emailRef}
								onChange={handleEmailChange}
								required
							/>
							{!isEmailValid && (
								<p className="text-sm text-red-500">
									Invalid Email
								</p>
							)}
							<textarea
								className="bg-gray-50 border border-gray-300 outline-none focus:border-midColor text-gray-900 text-sm rounded-lg block w-full p-2.5 my-2 h-[150px]"
								placeholder="Write Your Message Here"
								ref={messageRef}
								onChange={handleMessageChange}
								required
							/>
							<button
								type="submit"
								className={`w-full bg-midColor text-white text-center text-semibold rounded-lg p-2 mt-4 
								disabled:bg-gray-400`}
								onClick={handleSubmitForm}
								disabled={
									!isNameValid ||
									!isEmailValid ||
									!name.length ||
									!email.length ||
									!message.length ||
									loading
								}
							>
								{status}
							</button>
						</form>
					</div>
				</motion.div>
			</section>
		</main>
	);
};

export default ContactPage;
