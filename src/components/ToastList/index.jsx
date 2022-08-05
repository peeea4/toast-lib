import PropTypes from "prop-types";
import React from "react";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Toast } from "@/components/Toast";
import { ToastsListWrapper } from "@/components/ToastList/styled";
import { convertContainerPosition } from "@/utils/convertContainerPosition";

export const ToastList = ({
    position,
    animation,
    visibleToasts,
    handleRemove,
}) => {
    const positionStyle = convertContainerPosition(position);
    return (
        <ToastsListWrapper id="toast-list" position={positionStyle}>
            <ErrorBoundary>
                {visibleToasts?.map(
                    ({ type, toastId, title, description, duration }) => (
                        <Toast
                            key={toastId}
                            id={toastId}
                            type={type}
                            title={title}
                            duration={duration}
                            description={description}
                            handleRemove={handleRemove}
                            animation={animation}
                            position={position}
                        />
                    ),
                )}
            </ErrorBoundary>
        </ToastsListWrapper>
    );
};

Toast.propTypes = {
    position: PropTypes.string,
    animation: PropTypes.string,
    visibleToasts: PropTypes.array,
    removeToast: PropTypes.func,
};
