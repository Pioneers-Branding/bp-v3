export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/thank-you"],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/api/", "/_next/", "/thank-you"],
            },
        ],
        sitemap: "https://brandingpioneers.com/sitemap.xml",
        host: "https://brandingpioneers.com",
    };
}
