import Link from "next/link";

export const metadata = {
    title: "Page Not Found",
    description:
        "The page you're looking for doesn't exist. Browse our digital marketing services or return to the homepage.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                background:
                    "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
            }}
        >
            <div className="text-center max-w-2xl mx-auto">
                <h1
                    className="text-8xl md:text-9xl font-bold mb-4"
                    style={{
                        background:
                            "linear-gradient(135deg, #C4A484, #DEB887)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist
                    or has been moved. Let&apos;s get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                            background:
                                "linear-gradient(135deg, #C4A484, #DEB887)",
                        }}
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-600 text-white font-semibold transition-all duration-300 hover:border-[#C4A484] hover:text-[#C4A484]"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
