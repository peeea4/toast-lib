import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

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
    const [isStart, setIsStart] = useState(true);
    const [xTouch, setXTouch] = useState(0);
    const removeToastHandler = (id) => () => {
        handleRemove(id);
    };
    const handleTouchStart = (e) => {
        setXTouch(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        const xMove = e.touches[0].clientX;
        const diffX = xTouch - xMove;
        if (diffX < 0) {
            setIsStart(false);
            setTimeout(() => {
                handleRemove(id);
            }, 150);
        }
    };

    useEffect(() => {
        if (!duration) return;
        const timerId = setTimeout(() => {
            setIsStart(false);
            setTimeout(() => {
                handleRemove(id);
            }, 150);
        }, duration);
        return () => {
            clearTimeout(timerId);
        };
    }, []);

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
