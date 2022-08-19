import PropTypes from "prop-types";
import React from "react";

import * as close from "@/assets/close.png";
import * as closeWhite from "@/assets/close-white.png";
import { Icon } from "@/components/Icon/index.jsx";
import {
    CloseButton,
    Content,
    ContentWrapper,
    Description,
    Header,
    IconWrapper,
    LeftSide,
    ProgressBar,
    ToastWrapper,
} from "@/components/Toast/styled";
import { useProgress } from "@/hooks/useProgress";

export const Toast = ({
    id,
    type,
    title,
    description,
    duration,
    backgroundColor,
    margin,
    handleRemove,
    animation,
    position,
}) => {
    const removeToastHandler = (id) => () => {
        handleRemove(id);
    };

    const { isStart, handleTouchMove, handleTouchStart } = useProgress({
        duration,
        handleRemove,
        id,
    });
    
    return (
        <ToastWrapper
            type={type}
            backgroundColor={backgroundColor}
            margin={margin}
            animation={animation}
            isStart={isStart}
            position={position}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            id="toast-item"
        >
            <Content>
                <LeftSide>
                    <IconWrapper>
                        <Icon name={type} />
                    </IconWrapper>
                    <ContentWrapper>
                        <Header>{title}</Header>
                        <Description>{description}</Description>
                    </ContentWrapper>
                </LeftSide>
                <CloseButton
                    backgroundImage={type === "warning" ? close : closeWhite}
                    onClick={removeToastHandler(id)}
                />
            </Content>
            <ProgressBar duration={duration} />
        </ToastWrapper>
    );
};

Toast.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    backgroundColor: PropTypes.string,
    margin: PropTypes.string,
    handleRemove: PropTypes.func,
    animation: PropTypes.string,
    position: PropTypes.string,
};
