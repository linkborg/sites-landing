import type { FC } from 'hono/jsx'
import { Banner } from "./banner"
import { SiteHeader} from "./site-header";
import { LinkBlock } from "./link-block";


export const SitePage: FC<{ siteData: SiteData }> = ({ siteData }) => {
	const ogImage = ``;
	
	return (
		<html lang="en" className={'dark'}>
		<head>
			<title>{`${siteData.name ? siteData.name : siteData?.name}`}</title>
			<link rel="icon" href={siteData.user?.image ? siteData.user?.image : "/favicon.ico"} />
			<link rel="shortcut icon" type="image/x-icon" href={siteData.logo ? siteData.logo : "/favicon.ico"} />
			<link rel="apple-touch-icon" sizes="180x180" href={siteData.logo ? siteData.logo : "/favicon.ico"} />
			<meta name="theme-color" content="#7b46f6" />
			
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			
			<meta itemProp="name" content={ siteData.name ? siteData.name : "linkborg" }/>
			<meta itemProp="description" content={siteData.description ? siteData.description : "Linkborg" } />
			<meta itemProp="image" content={ogImage} />
			<meta property="og:title" content={ siteData.name ? siteData.name : "linkborg" } />
			<meta property="og:description" content={siteData.description ? siteData.description : "Linkborg" } />
			<meta property="og:image" content={ogImage}/>
			<meta property="og:type" content="website" />
			
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@linkbdotorg" />
			<meta name="twitter:creator" content="@xprilion" />
			<meta name="twitter:title" content={ siteData.name ? siteData.name : "linkborg" } />
			<meta name="twitter:description" content={siteData.description ? siteData.description : "Linkborg" } />
			<meta name="twitter:image" content={ogImage} />

			<script defer src="https://umami.apps.xpri.dev/script.js" data-website-id="ad50e8d3-2448-4b82-ac8d-6ac917d1b673"></script>
			<script src="https://cdn.tailwindcss.com"></script>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
				integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
				crossorigin="anonymous"
				referrerpolicy="no-referrer"
			/>
			<script>
				tailwind.config = {{
				darkMode: 'class',
			}};
			</script>
		</head>
		<body className={"bg-black max-h-[100vh] w-full flex flex-col items-center justify-between"}>
			<div className={"min-w-[400px] max-w-[400px] mx-auto mt-16 border-2 border-gray-700 rounded-md "}>
				<Banner image={siteData.image}/>
				<SiteHeader
					logo={siteData.logo}
					name={siteData.name}
					description={siteData.description}
				/>
				{
					siteData.links
						.filter((block) => !block.hidden)
						.sort((a, b) => a.order - b.order)
						.map((block) => (
							<LinkBlock linkData={block as LinkData} />
						))
				}
			</div>
			<div className="text-gray-400 py-8 text-center">© linkborg</div>
		</body>
		</html>
	);
};
