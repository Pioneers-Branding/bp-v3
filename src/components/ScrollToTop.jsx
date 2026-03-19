"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top immediately
        window.scrollTo(0, 0);

        // Refresh ScrollTrigger after the new page DOM has rendered
        // This ensures scroll-based animations recalculate their positions
        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh(true);
        }, 100);

        return () => clearTimeout(refreshTimer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
