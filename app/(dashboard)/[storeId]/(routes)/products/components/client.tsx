'use client'

import Heading from "@/components/ui/heading";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useParams, useRouter} from "next/navigation";
import {columns} from "@/app/(dashboard)/[storeId]/(routes)/products/components/columns";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";
import {ProductColumn} from "@/app/(dashboard)/[storeId]/(routes)/products/components/columns";

interface ProductClientProps {
    data: ProductColumn[]
}

const ProductClient = ({data}: ProductClientProps) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items0center justify-between">
                <Heading
                    title={`Products (${data.length})`}
                    description="Mange products for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="API calls for Products"/>
            <Separator/>
            <ApiList entityName="products" entityIdName="productId"/>
        </>
    )
}

export default ProductClient