'use client'

import {useEffect, useState} from "react";
import {StoreModal} from "@/components/modals/store-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    // If I am on client side set is Mounted as true
    useEffect(() => {
        setIsMounted(true)
    }, [])


    // If I am on service side rendering return null
    // This eliminates hydration error
    if (!isMounted) {
        return null;
    }

    // If we are on client side
    return (
        <>
            <StoreModal/>
        </>
    )
}