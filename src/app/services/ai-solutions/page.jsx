import AIServicesPage from "@/components/pages/AIServicesPage";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    title: "AI Solutions & Services | Transform Your Business",
    description:
        "Cutting-edge AI solutions for business growth. Machine learning, NLP, computer vision, and intelligent automation tailored to your unique needs.",
    alternates: {
        canonical: `${SITE_URL}/services/ai-solutions`,
    },
    openGraph: {
        title: "AI Solutions & Services | Branding Pioneers",
        description:
            "Enterprise-grade AI solutions including Machine Learning, NLP, and custom AI implementations for business growth.",
        url: `${SITE_URL}/services/ai-solutions`,
        type: "website",
    },
};

export default function AISolutions() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "AI Solutions",
                        url: `${SITE_URL}/services/ai-solutions`,
                    },
                ]}
            />
            <AIServicesPage />
        </>
    );
}
