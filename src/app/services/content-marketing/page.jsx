import ContentMarketingPage from "@/components/pages/ContentMarketingPage";
import { servicesData } from "@/data/servicesData";
import {
    BreadcrumbSchema,
    FAQSchema,
    ServiceSchema,
} from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";
const slug = "content-marketing";
const service = servicesData[slug];

export const metadata = {
    title: "Content Marketing Services | Engaging Content That Converts",
    description:
        "Compelling content that builds authority and drives results. Blog posts, articles, videos, infographics & ebooks. 200% average traffic boost. Start your content strategy!",
    alternates: {
        canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
        title: "Content Marketing Services | Branding Pioneers",
        description:
            "Strategic content marketing that drives 200% average traffic boost. Blogs, videos, ebooks & more.",
        url: `${SITE_URL}/services/${slug}`,
        type: "website",
    },
};

export default function ContentMarketing() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Services", url: `${SITE_URL}/services` },
                    {
                        name: "Content Marketing",
                        url: `${SITE_URL}/services/${slug}`,
                    },
                ]}
            />
            <ServiceSchema service={service} slug={slug} />
            <FAQSchema faqs={service.faqs} />
            <ContentMarketingPage />
        </>
    );
}
