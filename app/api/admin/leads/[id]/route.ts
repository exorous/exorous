import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { status, category } = await req.json();

        // Validate input (basic validation)
        if (!status && !category) {
            return new NextResponse("Missing data", { status: 400 });
        }

        const updatedLead = await prisma.lead.update({
            where: { id },
            data: {
                ...(status && { status }),
                ...(category && { category }),
                // If status is changed to BOOKED or DORMANT, stop follow-ups
                ...(status && {
                    stopFollowUps: ["BOOKED", "DORMANT"].includes(status)
                })
            }
        });

        return NextResponse.json(updatedLead);
    } catch (error) {
        console.error("[LEAD_UPDATE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
