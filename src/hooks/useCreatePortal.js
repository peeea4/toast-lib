import { useEffect, useState } from "react";

import { ID } from "@/constants/id";
export const useCreatePortal = () => {
    const [rootStatus, setRootStatus] = useState(false);

    useEffect(() => {
        const modalRoot = document.createElement("div");
        modalRoot.id = ID.modalRoot;

        document.querySelector("body").appendChild(modalRoot);
        setRootStatus(true);

        return () => document.querySelector("body").removeChild(modalRoot);
    }, []);

    return { rootStatus };
};
