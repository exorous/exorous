
import { Metadata } from "next";
import BookPageClient from "./book-client";

export const metadata: Metadata = {
    title: "Book Your Agency Audit | Exorous",
    description: "Schedule a free 15-minute consultation to see how we can automate your agency fulfillment.",
    openGraph: {
        title: "Book Your Agency Audit | Exorous",
        description: "Schedule a free 15-minute consultation to see how we can automate your agency fulfillment.",
        images: [
            {
                url: "/linkedin-banner-high-res.png",
                width: 1584,
                height: 396,
                alt: "Exorous Agency Automation",
            },
        ],
    },
};

export default function BookPage() {
    return <BookPageClient />;
}
