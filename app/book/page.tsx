
import { Metadata } from "next";
import BookPageClient from "./book-client";

export const metadata: Metadata = {
    title: "Book Your 30-Minute Strategy Session | Exorous",
    description: "Schedule a high-level partner interview to discuss automating your agency's fulfillment. This is a strategy call, not a sales pitch.",
    openGraph: {
        title: "Book Your 30-Minute Strategy Session | Exorous",
        description: "Schedule a high-level partner interview to discuss automating your agency's fulfillment. This is a strategy call, not a sales pitch.",
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
