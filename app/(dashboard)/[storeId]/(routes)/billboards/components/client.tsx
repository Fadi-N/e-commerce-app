'use client'

import Heading from "@/components/ui/heading";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useParams, useRouter} from "next/navigation";

const BillboardClient = () =>{
    const router = useRouter();
    const params = useParams();

    return(
        <div className="flex items0center justify-between">
            <Heading
                title="Billboards (0)"
                description="Mange billboards for your store"
            />
            <Button onClick={()=>router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add new
            </Button>
        </div>
    )
}

export default BillboardClient