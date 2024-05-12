import type { FC } from 'hono/jsx'
import { Canvas} from "./canvas";
import { Banner } from "./banner"
import { SiteHeader} from "./site-header";
import { LinkBlock } from "./link-block";


export const SitePage: FC<{ siteData: SiteData }> = ({ siteData }) => {
	const blocksHTML = siteData.links
		.filter((block) => !block.hidden)
		.sort((a, b) => a.order - b.order)
		.map((block) => (
			<LinkBlock
				linkData={block as LinkData}
			/>
		));
	
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
			
			
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>LinkBorg</title>
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
			<style>
				{`
              body {
                background-color: #000;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: auto;
              }
              
              .canvas {
                background-color: #000;
                border-radius: 2rem;
                overflow: hidden;
                max-width: 400px;
                width: 100%;
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
                position: relative;
              }
              
              .banner {
                height: 150px;
                width: 100%;
                background-size: cover;
                background-position: center;
              }
              
              .dark-mode-toggle {
                position: absolute;
                top: 10px;
                right: 10px;
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                padding: 12px 12px;
                width: auto;
                border-radius: 20px;
                font-size: 14px;
                cursor: pointer;
              }
              
              .share-button {
                background-color: #7c3aed;
                color: white;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 14px;
                cursor: pointer;
                display: inline-block;
                margin-top: 10px;
              }
              
              .link {
                transition: background-color 0.3s ease;
              }
              
              .link:hover {
                background-color: rgba(255, 255, 255, 0.2);
              }
              
              @media (max-width: 640px) {
                .canvas {
                  border-radius: 0;
                  max-width: 100%;
                }
              }
            `}
			</style>
		</head>
		<body>
		<Canvas>
			<Banner image={siteData.image} />
			<SiteHeader
				logo={siteData.logo}
				name={siteData.name}
				description={siteData.description}
			/>
			{blocksHTML}
			<p className="text-gray-400 mt-8 mb-4 text-center">© linkborg</p>
		</Canvas>
		</body>
		</html>
	);
};
