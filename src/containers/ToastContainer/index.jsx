import PropTypes from "prop-types";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

import { ToastList } from "@/components/ToastList/index.jsx";
import { ID } from "@/constants/id";
import { useCreatePortal } from "@/hooks/useCreatePortal";

export const ToastContainer = forwardRef(({ position, animation }, ref) => {
    const { rootStatus } = useCreatePortal();

    const [toasts, setToasts] = useState([]);

    const handleAdd = (toast) => {
        setToasts((prevState) => [...prevState, toast]);
    };

    const handleRemove = (toastId) => {
        setToasts((prevState) =>
            prevState.filter((toast) => toast.toastId !== toastId),
        );
    };

    useImperativeHandle(ref, () => ({
        onAdd: handleAdd,
        onRemove: handleRemove,
    }));

    const visibleToasts = toasts.slice(0, 3);

    return (
        rootStatus &&
        createPortal(
            <ToastList
                position={position}
                animation={animation}
                visibleToasts={visibleToasts}
                handleRemove={handleRemove}
            />,
            document.getElementById(ID.modalRoot),
        )
    );
});

ToastContainer.propTypes = {
    position: PropTypes.string,
    animation: PropTypes.string,
    toasts: PropTypes.array,
    removeToast: PropTypes.func,
};
