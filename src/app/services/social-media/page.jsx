import SocialMediaPage from "@/components/pages/SocialMediaPage";
import { servicesData } from "@/data/servicesData";
import {
    BreadcrumbSchema,
    FAQSchema,
    ServiceSchema,
} from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";
const slug = "social-media";
const service = servicesData[slug];

export const metadata = {
    title: "Social Media Marketing Services | Grow Your Brand Online",
    description:
        "Build community and brand awareness with expert social media marketing. Instagram, Facebook, LinkedIn & Twitter management. 500K+ followers generated. Free strategy call!",
    alternates: {
        canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
        title: "Social Media Marketing Services | Branding Pioneers",
        description:
            "Expert social media management — Instagram, Facebook, LinkedIn & Twitter. 500K+ followers generated for clients.",
        url: `${SITE_URL}/services/${slug}`,
        type: "website",
    },
};

export default function SocialMedia() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "Social Media Marketing",
                        url: `${SITE_URL}/services/${slug}`,
                    },
                ]}
            />
            <ServiceSchema service={service} slug={slug} />
            <FAQSchema faqs={service.faqs} />
            <SocialMediaPage />
        </>
    );
}
