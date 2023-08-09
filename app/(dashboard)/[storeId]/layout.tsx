import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";

import prismadb from "@/lib/prismadb";

export default async function DashboardLayout({children, params}: {
    children: React.ReactNode;
    params: { storedId: string }
}) {
    const {userId} = auth();

    // If no user go to sign-in
    if (!userId){
        redirect("/sign-in");
    }

    // If we have user then we have the store and we can fetch it
    const store = await prismadb.store.findFirst({
        where:{
            id: params.storedId,
            userId
        }
    })

    // If no store go to main page
    if (!store){
        redirect("/");
    }

    // If we have store then return html fragment
    return(
        <>
            <div>This will be a navbar</div>
            {children}
        </>
    )
}