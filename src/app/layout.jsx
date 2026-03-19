import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import {
    OrganizationSchema,
    WebSiteSchema,
    LocalBusinessSchema,
} from "@/components/seo/JsonLd";

const SITE_URL = "https://brandingpioneers.com";

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Branding Pioneers | Leading Digital Marketing Agency in India",
        template: "%s | Branding Pioneers",
    },
    description:
        "We combine creativity with strategic thinking to help brands discover their unique voice. 2,500+ clients served across SEO, PPC, Social Media, Web Development & AI Automation.",
    keywords: [
        "digital marketing agency",
        "branding agency India",
        "SEO services",
        "web development company",
        "social media marketing",
        "PPC advertising",
        "content marketing",
        "email marketing",
        "AI automation",
        "digital marketing Gurugram",
        "best digital marketing agency",
    ],
    authors: [{ name: "Branding Pioneers", url: SITE_URL }],
    creator: "Branding Pioneers",
    publisher: "Branding Pioneers",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: "Branding Pioneers | Where Innovation Meets Impact",
        description:
            "Leading Digital Marketing Agency — SEO, PPC, Social Media, Web Development & AI Automation. 2,500+ happy clients. Get a free digital audit today.",
        url: SITE_URL,
        siteName: "Branding Pioneers",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://res.cloudinary.com/damfndmrm/image/upload/v1770894503/logo_g7usjy.png",
                width: 1200,
                height: 630,
                alt: "Branding Pioneers - Digital Marketing Agency",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Branding Pioneers | Leading Digital Marketing Agency",
        description:
            "Transform your brand with data-driven digital marketing. SEO, PPC, Social Media & AI Automation. 2,500+ happy clients.",
        images: [
            "https://res.cloudinary.com/damfndmrm/image/upload/v1770894503/logo_g7usjy.png",
        ],
        creator: "@brandingpioneers",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "https://res.cloudinary.com/damfndmrm/image/upload/v1770894503/logo_g7usjy.png",
        apple:
            "https://res.cloudinary.com/damfndmrm/image/upload/v1770894503/logo_g7usjy.png",
    },
    verification: {
        // Add your verification codes here when ready
        // google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
    },
    category: "Digital Marketing",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* DNS Prefetch & Preconnect for performance */}
                <link rel="dns-prefetch" href="//res.cloudinary.com" />
                <link rel="dns-prefetch" href="//images.unsplash.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Parkinsans:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />

                {/* Structured Data */}
                <OrganizationSchema />
                <WebSiteSchema />
                <LocalBusinessSchema />
            </head>
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
