import { clerkMiddleware, createRouteMatcher, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoot = createRouteMatcher(["/admin(.*)"]);

const handler = clerkMiddleware(async (auth, req) => {
    if (isProtectedRoot(req)) {
        const { userId, redirectToSignIn } = await auth();

        // 1. Force Sign In
        if (!userId) {
            return redirectToSignIn();
        }

        // 2. Email Whitelist Check (Fetching full user for reliable email)
        const client = await clerkClient();
        const user = await client.users.getUser(userId);
        const userEmail = user.emailAddresses[0]?.emailAddress || "";
        const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];

        if (!adminEmails.includes(userEmail)) {
            console.log(`Access Denied: ${userEmail} is not in ${adminEmails}`);
            // Redirect to home or 403
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
});

export function proxy(req: any, event: any) {
    return handler(req, event);
}

export const config = {
    matcher: [
        // Only run on admin routes and specific protected APIs
        '/admin(.*)',
        '/api/admin(.*)',
        '/api/upload-resume',
    ],
};
