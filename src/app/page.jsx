import HomePage from "@/components/pages/HomePage";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    title: "Branding Pioneers | Leading Digital Marketing Agency in India",
    description:
        "Transform your brand with data-driven digital marketing strategies. Expert SEO, PPC, Social Media, Web Development & AI Automation services. 2,500+ happy clients. Free audit!",
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: "Branding Pioneers | Where Innovation Meets Impact",
        description:
            "Leading Digital Marketing Agency — SEO, PPC, Social Media, Web Development & AI Automation. 2,500+ happy clients.",
        url: SITE_URL,
        type: "website",
    },
};

export default function Home() {
    return (
        <>
            <WebPageSchema
                title="Branding Pioneers | Leading Digital Marketing Agency"
                description="Transform your brand with data-driven digital marketing strategies."
                url={SITE_URL}
            />
            <BreadcrumbSchema
                items={[{ name: "Home", url: SITE_URL }]}
            />
            <HomePage />
        </>
    );
}
