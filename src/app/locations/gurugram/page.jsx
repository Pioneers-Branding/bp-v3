import GurgaonLocationPage from "@/components/pages/GurgaonLocationPage";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    title: "Digital Marketing Agency in Gurugram | Branding Pioneers",
    description:
        "Top digital marketing agency in Gurugram. Visit our office for professional SEO, website development, social media marketing, and AI automation services.",
    alternates: {
        canonical: `${SITE_URL}/locations/gurugram`,
    },
    openGraph: {
        title: "Branding Pioneers Gurugram | Digital Marketing Experts",
        description:
            "Leading digital marketing agency located in Gurugram (Gurgaon). Expert SEO, PPC, and web development services tailored to your business.",
        url: `${SITE_URL}/locations/gurugram`,
        type: "website",
    },
};

export default function GurgaonLocation() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Locations", url: `${SITE_URL}/locations` },
                    {
                        name: "Gurugram Office",
                        url: `${SITE_URL}/locations/gurugram`,
                    },
                ]}
            />
            <GurgaonLocationPage />
        </>
    );
}
