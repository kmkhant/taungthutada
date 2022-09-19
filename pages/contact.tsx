import { NextPage } from "next";
import React, { useState, useRef, useEffect } from "react";

const ContactPage: NextPage = () => {
	const [isNameValid, setIsNameValid] =
		useState<boolean>(true);
	const [isEmailValid, setIsEmailValid] =
		useState<boolean>(true);

	const [submitted, setSubmitted] =
		useState<boolean>(false);

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	const nameRegex = new RegExp(
		"/(^[a-zA-Z][a-zA-Zs]{0,20}[a-zA-Z]$)/"
	);

	const handleSubmit = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		let name: string = "",
			email: string = "",
			message: string = "";

		if (
			nameRef.current &&
			emailRef.current &&
			messageRef.current
		) {
			name = nameRef.current.value;
			email = emailRef.current.value;
			message = messageRef.current.value;

			console.log(name);
			console.log(email);
			console.log(message);
		}
	};

	const handleNameChange = () => {
		if (nameRef.current) {
			const name = nameRef.current.value;
			const nameRegex = new RegExp(/^[A-Za-z\s]+$/);
			if (nameRegex.test(name)) setIsNameValid(true);
			else setIsNameValid(false);
			// console.log(isNameValid);
		}
	};

	const handleEmailChange = () => {
		if (emailRef.current) {
			const email = emailRef.current.value;
			const emailRegex = new RegExp(
				/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
			);
			if (emailRegex.test(email)) setIsEmailValid(true);
			else setIsEmailValid(false);
		}
	};

	// console.log("RENDER");

	return (
		<main>
			<section className="bg-midColor h-[350px] flex justify-center items-center">
				<div className="flex space-x-2">
					<div className="w-16 h-0.5 bg-white rounded-full mt-3"></div>
					<div className="sm:w-[600px]">
						<p className="text-white font-semibold">
							OUR MISSION
						</p>
						<p className="text-white text-sm">
							Becoming impact-oriented value chain
							development firm and at the same time, to
							empower rural community members, women and
							youths through economic opportunities, and
							market access.
						</p>
					</div>
				</div>
			</section>
			<section className="mx-4 sm:mx-8 lg:mx-16 bg-white h-[1000px] pt-3">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<div>
						<div>
							<h3 className="font-bold text-lg sm:text-xl mt-4 mb-1">
								TAUNGGYI
							</h3>
							<p className="text-sm">
								No-102 Innyar St, TAUNGGYI, Shan, Myanmar
							</p>
						</div>
						<div>
							<h3 className="font-bold text-lg sm:text-xl mt-4 mb-1">
								Contact Us
							</h3>

							<p className="text-sm">
								Phone : +959123456789
							</p>
							<p className="text-sm">
								{" "}
								Email : support@taungthutada.com
							</p>
						</div>
					</div>
					<div>
						<h3 className="font-bold text-lg sm:text-xl mt-4 mb-1">
							Get In Touch
						</h3>
						<p className="text-sm">
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
								required
							/>
							<button
								type="submit"
								className={`w-full bg-midColor text-white text-center text-semibold rounded-lg p-2 mt-4 disabled:bg-gray-400`}
								onClick={handleSubmit}
								disabled={!isNameValid || !isEmailValid}
							>
								SEND
							</button>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;
