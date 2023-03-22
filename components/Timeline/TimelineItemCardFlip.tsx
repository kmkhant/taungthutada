import React from "react";
import {
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from "@mui/lab";

interface TimelineItemCardProps {
	date: string;
	description: string;
}

const TimelineItemCardFlip: React.FC<
	TimelineItemCardProps
> = ({ date, description }) => {
	return (
		<TimelineItem>
			<TimelineContent>{description}</TimelineContent>
			<TimelineSeparator>
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineOppositeContent fontFamily="Inter">
				{date}
			</TimelineOppositeContent>
		</TimelineItem>
	);
};

export default TimelineItemCardFlip;
