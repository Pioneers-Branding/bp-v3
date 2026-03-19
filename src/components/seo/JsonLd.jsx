// Organization Schema - for sitewide use
export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://brandingpioneers.com/#organization",
        name: "Branding Pioneers",
        url: "https://brandingpioneers.com",
        logo: "https://res.cloudinary.com/damfndmrm/image/upload/v1770894503/logo_g7usjy.png",
        description:
            "We combine creativity with strategic thinking to help brands discover their unique voice. 2,500+ clients served across SEO, PPC, Social Media, Web Development & AI Automation.",
        foundingDate: "2016",
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            minValue: 50,
            maxValue: 100,
        },
        sameAs: [
            "https://www.facebook.com/brandingpioneers",
            "https://www.instagram.com/brandingpioneers",
            "https://www.linkedin.com/company/brandingpioneers",
            "https://twitter.com/brandingpioneers",
            "https://www.youtube.com/@brandingpioneers",
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+91-97895-65515",
                contactType: "sales",
                email: "arush@rainmindz.com",
                areaServed: ["IN", "US", "GB", "AE"],
                availableLanguage: ["English", "Hindi"],
            },
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "Gurugram",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122001",
            addressCountry: "IN",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2500",
            bestRating: "5",
            worstRating: "1",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// WebSite Schema - for sitewide use (enables sitelinks search box)
export function WebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://brandingpioneers.com/#website",
        name: "Branding Pioneers",
        url: "https://brandingpioneers.com",
        publisher: {
            "@id": "https://brandingpioneers.com/#organization",
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate:
                    "https://brandingpioneers.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// LocalBusiness Schema
export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://brandingpioneers.com/#localbusiness",
        name: "Branding Pioneers - Digital Marketing Agency",
        image: "https://res.cloudinary.com/damfndmrm/image/upload/v1770894503/logo_g7usjy.png",
        url: "https://brandingpioneers.com",
        telephone: "+91-97895-65515",
        email: "arush@rainmindz.com",
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Gurugram",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122001",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 28.4595,
            longitude: 77.0266,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "15:00",
            },
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2500",
            bestRating: "5",
            worstRating: "1",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Marketing Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "SEO Optimization",
                        url: "https://brandingpioneers.com/services/seo-optimization",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Paid Advertising (PPC)",
                        url: "https://brandingpioneers.com/services/paid-advertising",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Social Media Marketing",
                        url: "https://brandingpioneers.com/services/social-media",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Content Marketing",
                        url: "https://brandingpioneers.com/services/content-marketing",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Web Development",
                        url: "https://brandingpioneers.com/services/web-development",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "AI Automation",
                        url: "https://brandingpioneers.com/services/ai-automation",
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// BreadcrumbList Schema
export function BreadcrumbSchema({ items }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// FAQPage Schema
export function FAQSchema({ faqs }) {
    if (!faqs || faqs.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Service Schema
export function ServiceSchema({ service, slug }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `https://brandingpioneers.com/services/${slug}#service`,
        name: `${service.title} ${service.titleHighlight}`.replace(".", ""),
        description: service.description,
        url: `https://brandingpioneers.com/services/${slug}`,
        provider: {
            "@id": "https://brandingpioneers.com/#organization",
        },
        areaServed: {
            "@type": "Country",
            name: "India",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${service.subtitle} Services`,
            itemListElement: service.services.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: s.title,
                    description: s.description,
                },
            })),
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// WebPage Schema
export function WebPageSchema({ title, description, url }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: title,
        description: description,
        url: url,
        isPartOf: {
            "@id": "https://brandingpioneers.com/#website",
        },
        about: {
            "@id": "https://brandingpioneers.com/#organization",
        },
        inLanguage: "en-US",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
