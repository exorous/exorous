"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToCalendly({ url }: { url: string }) {
    const router = useRouter();

    useEffect(() => {
        // Small delay to ensure smooth transition, but fast enough for user
        const timer = setTimeout(() => {
            window.location.href = url;
        }, 1500);

        return () => clearTimeout(timer);
    }, [url, router]);

    return null;
}
