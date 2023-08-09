'use client'

import {useStoreModal} from "@/hooks/use-store-modal";
import {useEffect} from "react";

const SetupPage = () => {
    // We don't declare like this because it doesn't work with useState const storeModal = useStoreModal();
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        // Check if our modal is open, if not open it
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen])

    return null;
}

export default SetupPage
