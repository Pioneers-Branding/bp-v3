import Contact from "@/components/pages/Contact";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    title: "Contact Us | Get a Free Digital Marketing Audit",
    description:
        "Get in touch with Branding Pioneers today. Discuss your project, request a proposal, or get a free digital marketing audit. Call +91-97895-65515.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Contact Branding Pioneers | Digital Marketing Experts",
        description:
            "Ready to elevate your brand? Contact our digital marketing experts today for a free consultation and project audit.",
        url: `${SITE_URL}/contact`,
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Contact Us", url: `${SITE_URL}/contact` },
                ]}
            />
            <Contact />
        </>
    );
}
