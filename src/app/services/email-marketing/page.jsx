import EmailMarketingPage from "@/components/pages/EmailMarketingPage";
import { servicesData } from "@/data/servicesData";
import {
    BreadcrumbSchema,
    FAQSchema,
    ServiceSchema,
} from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";
const slug = "email-marketing";
const service = servicesData[slug];

export const metadata = {
    title: "Email Marketing Services | Personalized Campaigns That Convert",
    description:
        "Personalized email campaigns that resonate. Automated email marketing, newsletters & drip campaigns. 42% average open rate. Boost your email ROI today!",
    alternates: {
        canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
        title: "Email Marketing Services | Branding Pioneers",
        description:
            "Expert email marketing automation with 42% average open rate. Drip campaigns, newsletters & lead nurturing.",
        url: `${SITE_URL}/services/${slug}`,
        type: "website",
    },
};

export default function EmailMarketing() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "Email Marketing",
                        url: `${SITE_URL}/services/${slug}`,
                    },
                ]}
            />
            <ServiceSchema service={service} slug={slug} />
            <FAQSchema faqs={service.faqs} />
            <EmailMarketingPage />
        </>
    );
}
