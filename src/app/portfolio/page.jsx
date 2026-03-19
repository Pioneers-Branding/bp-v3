import PortfolioPage from "@/components/pages/portfolio";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    title: "Our Portfolio | Digital Marketing Case Studies",
    description:
        "Explore our portfolio of successful digital marketing projects. See real results and case studies from our work in SEO, PPC, web design, and branding.",
    alternates: {
        canonical: `${SITE_URL}/portfolio`,
    },
    openGraph: {
        title: "Digital Marketing Portfolio | Branding Pioneers",
        description:
            "Discover how we've helped brands scale their revenue through expert digital marketing, SEO, and web development.",
        url: `${SITE_URL}/portfolio`,
        type: "website",
    },
};

export default function Portfolio() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Portfolio", url: `${SITE_URL}/portfolio` },
                ]}
            />
            <PortfolioPage />
        </>
    );
}
