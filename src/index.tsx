import {formatUrl} from "../lib/utils";
import { Hono } from 'hono'
import { SitePage } from "../components/site-page"

const app = new Hono<{
    Bindings: {
        API_BASE: string,
    }
}>()

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
    
    const linkData = await response.json() as LinkData;
    
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
    
    return c.html(<SitePage siteData={siteData} />);
})

export default app