import {PrismaClient} from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient();

// Decide if to use globalThis or initiate new Prisma Client
// If we are in development
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;