'use client'

import Heading from "@/components/ui/heading";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useParams, useRouter} from "next/navigation";
import {columns} from "@/app/(dashboard)/[storeId]/(routes)/colors/components/columns";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";
import {ColorColumn} from "@/app/(dashboard)/[storeId]/(routes)/colors/components/columns";

interface ColorsClientProps {
    data: ColorColumn[]
}

const ColorsClient = ({data}:ColorsClientProps) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items0center justify-between">
                <Heading
                    title={`Colors (${data.length})`}
                    description="Mange colors for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="API calls for Colors"/>
            <Separator/>
            <ApiList entityName="colors" entityIdName="colorId"/>
        </>
    )
}

export default ColorsClient