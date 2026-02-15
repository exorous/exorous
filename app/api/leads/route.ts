import { NextResponse } from "next/server";
import { processLead, LeadInput } from "@/lib/lead-engine";
import { z } from "zod";

const leadSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    problem: z.string().min(10),
    budget: z.string().optional(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate input
        const validatedData = leadSchema.parse(body);

        // Trigger AI Orchestration
        const result = await processLead(validatedData as LeadInput);

        return NextResponse.json({
            success: true,
            category: result.category,
            message: "Lead processed successfully"
        }, { status: 201 });

    } catch (error) {
        console.error("Lead API Error:", error);

        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 });
        }

        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
