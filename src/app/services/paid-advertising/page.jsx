import PaidAdvertisingPage from "@/components/pages/PaidAdvertisingPage";
import { servicesData } from "@/data/servicesData";
import {
    BreadcrumbSchema,
    FAQSchema,
    ServiceSchema,
} from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";
const slug = "paid-advertising";
const service = servicesData[slug];

export const metadata = {
    title: "Paid Advertising (PPC) Services | Maximize Your ROI",
    description:
        "Maximize ROI with targeted PPC advertising campaigns. Google Ads, Facebook Ads, LinkedIn Ads & programmatic advertising. 5x average ROAS. Get a free audit!",
    alternates: {
        canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
        title: "PPC & Paid Advertising Services | Branding Pioneers",
        description:
            "Expert paid advertising management with 5x average ROAS. Google Ads, Meta Ads, LinkedIn Ads & more.",
        url: `${SITE_URL}/services/${slug}`,
        type: "website",
    },
};

export default function PaidAdvertising() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "Paid Advertising",
                        url: `${SITE_URL}/services/${slug}`,
                    },
                ]}
            />
            <ServiceSchema service={service} slug={slug} />
            <FAQSchema faqs={service.faqs} />
            <PaidAdvertisingPage />
        </>
    );
}
