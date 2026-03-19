import SEOOptimizationPage from "@/components/pages/SEOOptimizationPage";
import { servicesData } from "@/data/servicesData";
import {
    BreadcrumbSchema,
    FAQSchema,
    ServiceSchema,
} from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";
const slug = "seo-optimization";
const service = servicesData[slug];

export const metadata = {
    title: "SEO Optimization Services | Rank Higher on Google",
    description:
        "Rank higher and drive organic traffic with data-driven SEO services. On-page, off-page, technical & local SEO. 300% average traffic increase. Free SEO audit!",
    alternates: {
        canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
        title: "SEO Optimization Services | Branding Pioneers",
        description:
            "Expert SEO services that deliver 300% average traffic increase. On-page, off-page, technical & local SEO strategies.",
        url: `${SITE_URL}/services/${slug}`,
        type: "website",
    },
};

export default function SEOOptimization() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "SEO Optimization",
                        url: `${SITE_URL}/services/${slug}`,
                    },
                ]}
            />
            <ServiceSchema service={service} slug={slug} />
            <FAQSchema faqs={service.faqs} />
            <SEOOptimizationPage />
        </>
    );
}
