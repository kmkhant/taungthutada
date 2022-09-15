import Image from "next/image";
import React from "react";

const ActivitiyTimeline: React.FC = () => {
	return (
		<div className="relative wrap overflow-hidden p-10 h-full">
			<div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-14 sm:left-[50%]"></div>
			{/* Right Timeline */}
			<div className="mb-8 flex sm:justify-between items-center w-full right-timeline group">
				<div className="hidden sm:block sm:w-5/12"></div>
				<div className="z-20 flex items-center order-1 w-8 h-8 rounded-full justify-center">
					<span className="group-hover:animate-ping absolute inline-flex z-30 bg-green-800 rounded-full w-4 h-4"></span>
					<span className="z-30 bg-midColor rounded-full w-4 h-4"></span>
				</div>

				<div className="order-1 bg-midColor bg-opacity-10 rounded-lg shadow-md w-5/12 px-6 py-4 ml-8 sm:ml-0 grow sm:grow-0">
					<img
						src={"https://via.placeholder.com/150"}
						alt={"img"}
					/>
					<h3 className="mb-3 font-semibold text-xl mt-3">
						January 2021
					</h3>
					<p className="text-sm font-medium leading-snug tracking-widetext-opacity-100">
						Being a member of Myanmar Agriculture Network -
						Grow Asia
					</p>
				</div>
			</div>
			{/* Left Timeline - May */}
			<div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline group">
				<div className="order-1 sm:w-5/12"></div>
				<div className="z-20 flex items-center order-1 w-8 h-8 rounded-full justify-center">
					<span className="group-hover:animate-ping absolute inline-flex z-30 bg-green-800 rounded-full w-4 h-4"></span>
					<span className="z-30 bg-midColor rounded-full w-4 h-4"></span>
				</div>
				<div className="order-1 bg-midColor bg-opacity-10 rounded-lg shadow-md w-5/12 px-6 py-4 ml-8 sm:ml-0 grow sm:grow-0">
					<img
						src={"https://via.placeholder.com/150"}
						alt={"img"}
					/>
					<h3 className="mb-3 font-semibold text-xl mt-3">
						May
					</h3>
					<p className="text-sm font-medium leading-snug tracking-widetext-opacity-100">
						Corn Seed Program for disadvantaged farmers in
						Pintaya, Southern Shan State
					</p>
				</div>
			</div>
			{/* Right Timeline - April - June*/}
			<div className="mb-8 flex sm:justify-between items-center w-full right-timeline group">
				<div className="hidden sm:block sm:w-5/12"></div>
				<div className="z-20 flex items-center order-1 w-8 h-8 rounded-full justify-center">
					<span className="group-hover:animate-ping absolute inline-flex z-30 bg-green-800 rounded-full w-4 h-4"></span>
					<span className="z-30 bg-midColor rounded-full w-4 h-4"></span>
				</div>

				<div className="order-1 bg-midColor bg-opacity-10 rounded-lg shadow-md w-5/12 px-6 py-4 ml-8 sm:ml-0 grow sm:grow-0">
					<img
						src={"https://via.placeholder.com/150"}
						alt={"img"}
					/>
					<h3 className="mb-3 font-semibold text-xl mt-3">
						April - June 2021
					</h3>
					<p className="text-sm font-medium leading-snug tracking-widetext-opacity-100">
						Conducting the inputs system intervention
						project survey for Southern and Northern Shan
						State in cooperation with HEKS/EPER Myanmar
						Being a member of Myanmar Agriculture Network -
						Grow Asia
					</p>
				</div>
			</div>
			{/* Left Timeline - Oct - Sept*/}
			<div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline group">
				<div className="order-1 sm:w-5/12"></div>
				<div className="z-20 flex items-center order-1 w-8 h-8 rounded-full justify-center">
					<span className="group-hover:animate-ping absolute inline-flex z-30 bg-green-800 rounded-full w-4 h-4"></span>
					<span className="z-30 bg-midColor rounded-full w-4 h-4"></span>
				</div>
				<div className="order-1 bg-midColor bg-opacity-10 rounded-lg shadow-md w-5/12 px-6 py-4 ml-8 sm:ml-0 grow sm:grow-0">
					<img
						src={"https://via.placeholder.com/150"}
						alt={"img"}
					/>
					<h3 className="mb-3 font-semibold text-xl mt-3">
						Oct - Sept
					</h3>
					<p className="text-sm font-medium leading-snug tracking-widetext-opacity-100">
						Inputs Emergency Support to potato farmers from
						Naungtaya, Southern Shan State Corn Seed Program
						for disadvantaged farmers in Pintaya, Southern
						Shan State
					</p>
				</div>
			</div>
			{/* Right Timeline - Oct */}
			<div className="mb-8 flex sm:justify-between items-center w-full right-timeline group">
				<div className="hidden sm:block sm:w-5/12"></div>
				<div className="z-20 flex items-center order-1 w-8 h-8 rounded-full justify-center">
					<span className="group-hover:animate-ping absolute inline-flex z-30 bg-green-800 rounded-full w-4 h-4"></span>
					<span className="z-30 bg-midColor rounded-full w-4 h-4"></span>
				</div>

				<div className="order-1 bg-midColor bg-opacity-10 rounded-lg shadow-md w-5/12 px-6 py-4 ml-8 sm:ml-0 grow sm:grow-0">
					<img
						src={"https://via.placeholder.com/150"}
						alt={"img"}
					/>
					<h3 className="mb-3 font-semibold text-xl mt-3">
						Oct 2021
					</h3>
					<p className="text-sm font-medium leading-snug tracking-widetext-opacity-100">
						Women Empowerment Training for local young women
						farmers from Naungtaya, Southern Shan State
						Being a member of Myanmar Agriculture Network -
						Grow Asia
					</p>
				</div>
			</div>
			{/* Left Timeline - Dec */}
			<div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline group">
				<div className="order-1 sm:w-5/12"></div>
				<div className="z-20 flex items-center order-1 w-8 h-8 rounded-full justify-center">
					<span className="group-hover:animate-ping absolute inline-flex z-30 bg-green-800 rounded-full w-4 h-4"></span>
					<span className="z-30 bg-midColor rounded-full w-4 h-4"></span>
				</div>
				<div className="order-1 bg-midColor bg-opacity-10 rounded-lg shadow-md w-5/12 px-6 py-4 ml-8 sm:ml-0 grow sm:grow-0">
					<img
						src={"https://via.placeholder.com/150"}
						alt={"img"}
					/>
					<h3 className="mb-3 font-semibold text-xl mt-3">
						Dec
					</h3>
					<p className="text-sm font-medium leading-snug tracking-widetext-opacity-100">
						Impact Investment for two-year terms to
						establish as a social business. Inputs Emergency
						Support to potato farmers from Naungtaya,
						Southern Shan State Corn Seed Program for
						disadvantaged farmers in Pintaya, Southern Shan
						State
					</p>
				</div>
			</div>
		</div>
	);
};

export default ActivitiyTimeline;
