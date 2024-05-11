import type { FC } from 'hono/jsx'
import {formatUrl} from "../lib/utils";
import { Hono } from 'hono'


const app = new Hono<{
    Bindings: {
        API_BASE: string,
    }
}>()


// Component for the canvas area
const Canvas: FC = ({ children }) => (
    <div className="canvas">{children}</div>
  );
  
// Component for the banner area
const Banner: FC<{ image: string }> = ({ image }) => (
<div className="banner">
    <img src={image} alt="Banner" className="w-full h-full object-cover" />
</div>
);

// Component for the site header (logo, name, description)
const SiteHeader: FC<{ logo: string; name: string; description: string }> = ({
logo,
name,
description,
}) => (
<div className="text-center mb-8 -mt-16">
    <img
    src={logo}
    alt="Avatar"
    className="rounded-full bg-blue-500 w-32 h-32 mx-auto mb-4"
    />
    <h1 className="text-2xl font-bold mt-4">{name}</h1>
    {/* <p className="text-gray-400">{description}</p> */}
    <p className="text-gray-400">Associate Cloud Developer</p>
</div>
);

// Component for individual link blocks
const LinkBlock: FC<{ linkData: LinkData }> = ({ linkData }) => {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${linkData.longurl}`;

  return (
      <div key={linkData.id} className="rounded-lg m-4 link">
          <a
              href={`/${linkData.slug}`}
              className="block rounded-lg border border-gray-100 p-4 text-white hover:bg-gray-600 transition-colors duration-300 "
          >
              <div className="flex items-center">
                  <img src={faviconUrl} alt="favicon" className="mr-2" />
                  {linkData.title}
                  <i className="fas fa-share-alt ml-auto"></i>
              </div>
          </a>
      </div>
  );
};


// Component for the whole link page
const LinkPage: FC<{ siteData: SiteData }> = ({ siteData }) => {
    const blocksHTML = siteData.links
      .filter((block) => !block.hidden)
      .sort((a, b) => a.order - b.order)
      .map((block) => (
        <LinkBlock
          linkData={block}
        />
      ));


    const ogImage = ``;
  
  
    return (
      <html lang="en" className={'dark'}>
        <head>
            <title>{`${siteData.name ? siteData.name : siteData?.name}`}</title>
            <link rel="icon" href={siteData.user?.image ? siteData.user?.image : "/favicon.ico"} />
            <link rel="shortcut icon" type="image/x-icon" href={siteData.image ? siteData.image : "/favicon.ico"} />
            <link rel="apple-touch-icon" sizes="180x180" href={siteData.image ? siteData.image : "/favicon.ico"} />
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

app.get("/:path", async (c) => {
    const url = new URL(c.req.url);
    const subdomain = url.hostname.split(".")[0];
    const pathname = url.pathname;
    
    const fetch_url = `${c.env.API_BASE}/${subdomain}/${pathname}`;
    
    const response = await fetch(fetch_url, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    });
    
    if (!response.ok) {
        return c.text("Not found", 404)
    }
    
    const linkData = await response.json() as Link;
    
    return c.redirect(formatUrl(linkData.longurl))
});


app.get("/", async (c) => {
    const url = new URL(c.req.url);
    const subdomain = url.hostname.split(".")[0];

    const fetch_url = `${c.env.API_BASE}/${subdomain}`
  
    const response = await fetch(fetch_url, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    });
    
    if (!response.ok) {
        return c.text("Not found", 404)
    }
    
    const siteData = await response.json() as SiteData;

    return c.html(<LinkPage siteData={siteData} />);
})

export default app