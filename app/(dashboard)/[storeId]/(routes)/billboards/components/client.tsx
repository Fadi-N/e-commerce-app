'use client'

import Heading from "@/components/ui/heading";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useParams, useRouter} from "next/navigation";
import {BillboardColumn, columns} from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";

interface BillboardClientProps {
    data: BillboardColumn[]
}

const BillboardClient = ({data}:BillboardClientProps) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items0center justify-between">
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Mange billboards for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="label" columns={columns} data={data}/>
            <Heading title="API" description="API calls for Billboards"/>
            <Separator/>
            <ApiList entityName="billboards" entityIdName="billboardId"/>
        </>
    )
}

export default BillboardClient