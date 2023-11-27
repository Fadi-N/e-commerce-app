'use client'

import Heading from "@/components/ui/heading";
import {columns} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {OrderColumn} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";

interface OrderClientProps {
    data: OrderColumn[]
}

const OrderClient = ({data}: OrderClientProps) => {

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Mange orders for your store"
            />
            <Separator/>
            <DataTable searchKey="products" columns={columns} data={data}/>
        </>
    )
}

export default OrderClient