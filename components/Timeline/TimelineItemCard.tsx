import React from "react";
import {
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from "@mui/lab";

import { motion } from "framer-motion";
import { fadeUp } from "../../variants";

interface TimelineItemCardProps {
	date: string;
	description: string;
	last?: boolean;
}

const TimelineItemCard: React.FC<TimelineItemCardProps> = ({
	date,
	description,
	last,
}) => {
	const TimelineDotMotion = motion(TimelineDot);
	const TimelineConnectorMotion = motion(TimelineConnector);
	if (last) {
		return (
			<>
				<motion.div
					className="flex justify-center"
					variants={fadeUp}
				>
					<TimelineDot />
				</motion.div>

				<motion.p className="text-center" variants={fadeUp}>
					2023 - Continue
				</motion.p>
			</>
		);
	}
	return (
		<TimelineItem>
			<TimelineOppositeContent>
				<motion.div variants={fadeUp}>{date}</motion.div>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDotMotion variants={fadeUp} />
				<TimelineConnectorMotion variants={fadeUp} />
			</TimelineSeparator>
			<TimelineContent>
				<motion.div variants={fadeUp}>
					{description}
				</motion.div>
			</TimelineContent>
		</TimelineItem>
	);
};

export default TimelineItemCard;
