import AIAutomationPage from "@/components/pages/AIAutomationPage";
import { servicesData } from "@/data/servicesData";
import {
    BreadcrumbSchema,
    FAQSchema,
    ServiceSchema,
} from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";
const slug = "ai-automation";
const service = servicesData[slug];

export const metadata = {
    title: "AI Automation Services | Smart Solutions for Business Growth",
    description:
        "Automate workflows and enhance customer experience with AI-powered solutions. Chatbots, marketing automation & business process automation. 70% time savings!",
    alternates: {
        canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
        title: "AI Automation Services | Branding Pioneers",
        description:
            "Cut-edge AI automation with 70% time savings. Chatbots, marketing automation & process optimization.",
        url: `${SITE_URL}/services/${slug}`,
        type: "website",
    },
};

export default function AIAutomation() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "AI Automation",
                        url: `${SITE_URL}/services/${slug}`,
                    },
                ]}
            />
            <ServiceSchema service={service} slug={slug} />
            <FAQSchema faqs={service.faqs} />
            <AIAutomationPage />
        </>
    );
}
