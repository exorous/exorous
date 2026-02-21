
import { Metadata } from "next";
import BookPageClient from "./book-client";

export const metadata: Metadata = {
    title: "Book Your Workflow Audit | Exorous",
    description: "Schedule a high-level partner interview to discuss automating your agency's fulfillment. This is a strategy call, not a sales pitch.",
    openGraph: {
        title: "Book Your Workflow Audit | Exorous",
        description: "Schedule a high-level partner interview to discuss automating your agency's fulfillment. This is a strategy call, not a sales pitch.",
        images: [
            {
                url: "/banner.png",
                width: 1536,
                height: 1024,
                alt: "Exorous Agency Automation",
            },
        ],
    },
};

export default function BookPage() {
    return <BookPageClient />;
}
