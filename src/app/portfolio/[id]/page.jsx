import PortfolioDetail from "@/components/pages/PortfolioDetail";
import { projects } from "@/data/projects";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: String(project.id),
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    const canonicalUrl = `${SITE_URL}/portfolio/${id}`;
    const description = project.challenge || project.description || "View our portfolio of successful digital marketing projects.";

    return {
        title: `${project.title} | Portfolio Case Study`,
        description: description.slice(0, 160) + (description.length > 160 ? "..." : ""),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${project.title} - ${project.subtitle} | Branding Pioneers`,
            description: description.slice(0, 160) + (description.length > 160 ? "..." : ""),
            url: canonicalUrl,
            type: "article",
            images: project.images && project.images.length > 0 ? [
                {
                    url: typeof project.images[0] === 'string' ? project.images[0] : project.images[0]?.src || "https://res.cloudinary.com/damfndmrm/image/upload/v1770894503/logo_g7usjy.png",
                    width: 1200,
                    height: 630,
                    alt: `${project.title} Case Study`
                }
            ] : undefined,
        },
    };
}

export default async function PortfolioDetailPage({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === parseInt(id));

    // Create the FAQ Schema data if FAQs exist
    const faqData = project?.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: project.faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    } : null;

    // Create the Article Schema
    const articleSchema = project ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `${project.title} - ${project.subtitle}`,
        description: project.challenge || project.description,
        author: {
            "@type": "Organization",
            name: "Branding Pioneers"
        },
        publisher: {
            "@type": "Organization",
            name: "Branding Pioneers",
            logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/damfndmrm/image/upload/v1770894503/logo_g7usjy.png"
            }
        },
        datePublished: `${project.year}-01-01`,
        dateModified: new Date().toISOString()
    } : null;

    return (
        <>
            {project && (
                <BreadcrumbSchema
                    items={[
                        { name: "Home", url: SITE_URL },
                        { name: "Portfolio", url: `${SITE_URL}/portfolio` },
                        {
                            name: project.title,
                            url: `${SITE_URL}/portfolio/${id}`,
                        },
                    ]}
                />
            )}

            {/* Inject JSON-LD directly to avoid hydration issues with dangerouslySetInnerHTML from a prop */}
            {faqData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
                />
            )}

            {articleSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />
            )}

            <PortfolioDetail id={id} />
        </>
    );
}
