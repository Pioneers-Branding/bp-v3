import WebDevelopmentPage from "@/components/pages/WebDevelopmentPage";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    title: "Web Development Services | Custom Websites & Web Apps",
    description:
        "Fast, responsive, and SEO-friendly web development services. Build powerful digital experiences with Next.js, React, and modern tech stack. Free consultation!",
    alternates: {
        canonical: `${SITE_URL}/services/web-development`,
    },
    openGraph: {
        title: "Web Development Services | Branding Pioneers",
        description:
            "Custom web development services: responsive websites, web applications, and eCommerce solutions built with modern technology.",
        url: `${SITE_URL}/services/web-development`,
        type: "website",
    },
};

export default function WebDevelopment() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "Web Development",
                        url: `${SITE_URL}/services/web-development`,
                    },
                ]}
            />
            <WebDevelopmentPage />
        </>
    );
}
