import { useLayoutEffect, useRef } from "react";

import { ToastContainer } from "@/containers/ToastContainer/index.jsx";
import { ToastConfigurator } from "@/services/ToastConfigurator";

export const ToastService = new ToastConfigurator();

export const ToastProvider = (opitons) => {
    const toastRef = useRef();

    useLayoutEffect(() => {
        ToastService.init(toastRef.current);
    });

    return <ToastContainer ref={toastRef} {...opitons} />;
};
