interface Link {
    description: string;
    order: any;
    hidden: any;
	title: string;
	slug: string;
	longurl: string;
}

interface LinkData {
	title: string;
	description: string;
	longurl: string;
	slug: string;
	image: string;
	hidden: boolean;
	order: any;
	social: false,
	createdAt: any;
	updatedAt: any;
	siteId: any;
	visits: any;
}

interface SiteData {
    user: any;
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
