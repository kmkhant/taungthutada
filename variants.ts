export const leftLeaf = {
	initial: {
		x: -30,
		rotate: 15,
	},
	animate: {
		x: 0,
		rotate: 0,
		transition: {
			duration: 1,
		},
	},
};

export const rightLeaf = {
	initial: {
		x: 30,
		rotate: -15,
	},
	animate: {
		x: 0,
		rotate: 0,
		transition: {
			duration: 1,
		},
	},
};

export const fadeUp = {
	initial: {
		y: 50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

export const fadeUpDelay = {
	initial: {
		y: 50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.2,
		},
	},
};

export const fade = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

export const container = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

export const slideIn = {
	initial: {
		opacity: 0,
		x: -40,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const scaleUp = {
	initial: {
		opacity: 0,
		scale: 0.3,
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.8 },
	},
};
