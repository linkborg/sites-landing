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
	name: string;
	description: string;
	subdomain: string;
	customDomain: string | null;
	image: string;
	logo: string;
	ackee_tracking_id: string;
	analytics_code: string;
	layout: string;
	blocks: Block[];
}
