import { clerkMiddleware, createRouteMatcher, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoot = createRouteMatcher([]);

const handler = clerkMiddleware(async (auth, req) => {
    // No protected routes currently
});

export function proxy(req: any, event: any) {
    return handler(req, event);
}

export const config = {
    matcher: [
        // Only run on specific protected APIs if needed, currently empty/default
        '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)',
    ],
};
