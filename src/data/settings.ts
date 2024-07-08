//Definte interface
interface Settings {
	site: string;
	title: string;
	description: string;
	image: string;
}

// Main Site Settings
export const settings: Settings = {
	site: "https://cloverlearning.com",
	title: "Clover Learning | Diagnostic Imaging Training, Exam Prep, and Continuing Education",
	description:
		"Supporting a new generation of students & professionals through video-based Radiography training & Prep for the ARRT® Registry Exam",
	image: "/image/url",
};

// Main Menu
export const menu = [
	{ name: "Home", link: "/" },
	{ name: "Components", link: "/components" },
	{ name: "Contact", link: "/contact" },
];
