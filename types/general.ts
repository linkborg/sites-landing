interface User {
	name: string;
	email: string;
	bio: string;
	image: string;
}

interface Block {
	title: string;
	description: string;
	type: string;
	slug: string;
	image: string;
	hidden: boolean;
	order: number;
}

interface SiteData {
	user: User;
	description: string;
	subdomain: string;
	customDomain: string | null;
	image: string;
	ackee_tracking_id: string;
	analytics_code: string;
	layout: string;
	blocks: Block[];
}
