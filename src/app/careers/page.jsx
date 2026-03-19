import CareersPage from "@/components/pages/CareersPage";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    title: "Careers | Join Branding Pioneers Team",
    description:
        "Join the Branding Pioneers team. Explore exciting career opportunities in digital marketing, SEO, web development, content creation, and AI.",
    alternates: {
        canonical: `${SITE_URL}/careers`,
    },
    openGraph: {
        title: "Careers at Branding Pioneers | Shape the Digital Future",
        description:
            "Looking for growth? Join our dynamic team of digital marketers, developers, and creative minds. Explore open positions today.",
        url: `${SITE_URL}/careers`,
        type: "website",
    },
};

export default function Careers() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Careers", url: `${SITE_URL}/careers` },
                ]}
            />
            <CareersPage />
        </>
    );
}
