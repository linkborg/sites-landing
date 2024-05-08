interface Link {
	title: string;
	slug: string;
	longurl: string;
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
	links: Link[];
}
