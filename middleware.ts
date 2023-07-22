import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

// Config for Clerk Auth
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
