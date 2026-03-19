import YoutubeMarketingPage from "@/components/pages/YoutubeMarketingPage";
import { servicesData } from "@/data/servicesData";
import {
    BreadcrumbSchema,
    FAQSchema,
    ServiceSchema,
} from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";
const slug = "youtube-marketing";
const service = servicesData[slug];

export const metadata = {
    title: "YouTube Marketing Services | Grow Your Channel & Brand",
    description:
        "Grow your brand with professional YouTube marketing. Video SEO, channel optimization & content strategy. 10M+ views generated. Start growing your channel!",
    alternates: {
        canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
        title: "YouTube Marketing Services | Branding Pioneers",
        description:
            "Professional YouTube marketing with 10M+ views generated. Video SEO, channel optimization & growth strategy.",
        url: `${SITE_URL}/services/${slug}`,
        type: "website",
    },
};

export default function YoutubeMarketing() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "YouTube Marketing",
                        url: `${SITE_URL}/services/${slug}`,
                    },
                ]}
            />
            <ServiceSchema service={service} slug={slug} />
            <FAQSchema faqs={service.faqs} />
            <YoutubeMarketingPage />
        </>
    );
}
