import AboutPage from "@/components/pages/AboutPage";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    title: "About Us | Branding Pioneers - Digital Marketing Agency",
    description:
        "Learn about Branding Pioneers — 8+ years of digital excellence, 2,500+ happy clients, and a passionate team driving innovation in digital marketing.",
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: "About Branding Pioneers | Digital Excellence Since 2016",
        description:
            "Discover the story behind Branding Pioneers, our team of experts, and how we've helped 2,500+ clients grow digitally.",
        url: `${SITE_URL}/about`,
        type: "website",
    },
};

export default function About() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "About Us", url: `${SITE_URL}/about` },
                ]}
            />
            <AboutPage />
        </>
    );
}
