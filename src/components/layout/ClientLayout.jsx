"use client";

import MegaMenuHeader from "./Header/MegaMenuHeader";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <MegaMenuHeader />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
