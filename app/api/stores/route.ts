import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        const {userId} = auth();
        const body = await req.json();
        const {name} = body;

        // Take only userId and name to check if they are existing
        // Don't need rest because they are automatically assigned
        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        if (!name) {
            return new NextResponse("Name is required", {status: 400});

        }

        // If we have them create in DB
        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        })

        return NextResponse.json(store);
    } catch (error) {
        console.log("[STORES_POST]", error);
        return new NextResponse("Internal error", {status: 500});
    }
}