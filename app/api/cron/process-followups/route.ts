import { NextResponse } from "next/server";
import { processPendingFollowUps } from "@/lib/followup-engine";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key");

    if (key !== process.env.CRON_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const result = await processPendingFollowUps();
        return NextResponse.json({ success: true, ...result });
    } catch (error) {
        console.error("Cron Error:", error);
        return NextResponse.json({ success: false, error: "Follow-up processing failed" }, { status: 500 });
    }
}
